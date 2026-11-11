$ErrorActionPreference='Stop'
$taskParts=Get-Content (Join-Path $PSScriptRoot 'material-parts.json') -Raw | ConvertFrom-Json
$taskOut=Join-Path $PSScriptRoot $taskParts.filename
if(Test-Path -LiteralPath $taskOut){throw 'Output already exists; move it before rejoining.'}
$taskStream=[System.IO.File]::Create($taskOut)
try {foreach($part in $taskParts.parts){$taskFile=Join-Path $PSScriptRoot $part.name;if((Get-FileHash -LiteralPath $taskFile -Algorithm SHA256).Hash.ToLower() -ne $part.sha256){throw ('Bad chunk '+$part.name)};$taskInput=[System.IO.File]::OpenRead($taskFile);try{$taskInput.CopyTo($taskStream)}finally{$taskInput.Dispose()}}}finally{$taskStream.Dispose()}
if((Get-FileHash -LiteralPath $taskOut -Algorithm SHA256).Hash.ToLower() -ne $taskParts.sha256){throw 'ZIP hash mismatch'}
Write-Output ('Verified: '+$taskOut)
