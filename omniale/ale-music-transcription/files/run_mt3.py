import os
os.environ['OPENBLAS_NUM_THREADS']='4'
os.environ['OMP_NUM_THREADS']='4'
os.environ['TOKENIZERS_PARALLELISM']='false'
import sys
sys.path.append('/opt/ale-run/.venv/lib/python3.12/site-packages')
import numpy as np
import soundfile as sf
import torch
import json
import pretty_midi
from pathlib import Path
from mt3_infer.adapters.mt3_pytorch import MT3PyTorchAdapter
from mt3_infer.adapters.mr_mt3 import compute_spectrogram, SpectrogramConfig

torch.set_num_threads(4)
torch.set_num_interop_threads(1)
model=MT3PyTorchAdapter(auto_filter=False)
model.load_model('models/mt3',device='cpu')
model._spectrogram_processor.compute_spectrogram=lambda samples: compute_spectrogram(samples,SpectrogramConfig()).T
y,sr=sf.read('reference.wav',dtype='float32')
y=y.mean(axis=1)
features=model.preprocess(y,sr=sr)
print('Prepared',features.shape,'spectrograms',flush=True)

@torch.inference_mode()
def cached_generate(network,features,max_length=1024):
    """Use the checkpoint's T5 layers with the installed Transformers 4 API."""
    batch=features.shape[0]
    stack=network.encoder
    hidden=network.proj(features)
    hidden=stack.dropout(hidden+stack.pos_emb(hidden.shape[1]))
    bias=None
    mask=hidden.new_zeros((batch,1,1,hidden.shape[1]))
    for block in stack.block:
        output=block(hidden,attention_mask=mask,position_bias=bias,use_cache=False,output_attentions=False)
        hidden,bias=output[0],output[1]
    encoded=stack.dropout(stack.final_layer_norm(hidden))
    token=torch.full((batch,1),network.config.decoder_start_token_id,dtype=torch.long)
    tokens=[token]
    finished=torch.zeros(batch,dtype=torch.bool)
    past=[None]*len(network.decoder.block)
    crossmask=encoded.new_zeros((batch,1,1,encoded.shape[1]))
    for step in range(max_length):
        dec=network.decoder
        hidden=dec.dropout(dec.embed_tokens(token)+dec.pos_emb(1,offset=step))
        selfbias=crossbias=None
        selfmask=hidden.new_zeros((batch,1,1,step+1))
        for index,block in enumerate(dec.block):
            output=block(hidden,attention_mask=selfmask,position_bias=selfbias,
                         encoder_hidden_states=encoded,encoder_attention_mask=crossmask,
                         encoder_decoder_position_bias=crossbias,past_key_value=past[index],
                         use_cache=True,output_attentions=False)
            hidden,past[index],selfbias,crossbias=output
        hidden=dec.dropout(dec.final_layer_norm(hidden))
        if network.config.tie_word_embeddings:hidden*=network.model_dim**-.5
        token=network.lm_head(hidden).argmax(-1)
        token[finished]=network.config.pad_token_id
        finished|=token.squeeze(1)==network.config.eos_token_id
        tokens.append(token)
        if bool(finished.all()):break
    return torch.cat(tokens,dim=1)

all_outputs=[]
for start in range(0,len(features),4):
    inputs=torch.from_numpy(features[start:start+4]).float()
    result=cached_generate(model._model,inputs)
    processed=model._postprocess_batch(result).numpy()
    all_outputs.extend(processed)
    print('Decoded segments',start+1,'to',min(start+4,len(features)),'tokens',result.shape[1],flush=True)
length=max(len(row) for row in all_outputs)
outputs=np.full((len(all_outputs),length),-1,dtype=np.int64)
for i,row in enumerate(all_outputs):outputs[i,:len(row)]=row
np.save('mt3_tokens.npy',outputs)
midi=model.decode(outputs)
midi.save('mt3_estimate.mid')
p=pretty_midi.PrettyMIDI('mt3_estimate.mid')
events=[]
for inst in p.instruments:
    print(inst.program,inst.name,len(inst.notes),flush=True)
    for n in inst.notes:
        events.append({'program':int(inst.program),'drum':bool(inst.is_drum),'pitch':int(n.pitch),'start':float(n.start),'end':float(n.end),'velocity':int(n.velocity)})
Path('mt3_events.json').write_text(json.dumps(events,indent=2))
print('Saved',len(events),'estimated note events',flush=True)
