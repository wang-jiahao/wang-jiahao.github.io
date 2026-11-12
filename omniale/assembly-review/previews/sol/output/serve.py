"""Serve only this task folder on localhost, with byte ranges for video seeking.

Usage from the task root: python output/serve.py --port 8766
CC BY-NC-SA 4.0, accompanying assembly evidence handoff.
"""
from pathlib import Path
from http.server import SimpleHTTPRequestHandler, ThreadingHTTPServer
from functools import partial
import argparse
import os
import re


class RangeHandler(SimpleHTTPRequestHandler):
    def send_head(self):
        self._byte_range = None
        path = self.translate_path(self.path)
        if os.path.isdir(path) or not self.headers.get('Range'):
            return super().send_head()
        try:
            stream = open(path, 'rb')
        except OSError:
            self.send_error(404, 'File not found')
            return None
        stat = os.fstat(stream.fileno())
        size = stat.st_size
        match = re.fullmatch(r'bytes=(\d*)-(\d*)', self.headers['Range'].strip())
        if not match or not any(match.groups()):
            stream.close()
            self.send_error(416, 'Unsupported range')
            return None
        first, last = match.groups()
        if first:
            start = int(first)
            end = min(int(last), size - 1) if last else size - 1
        else:
            start = max(0, size - int(last))
            end = size - 1
        if start >= size or start > end:
            stream.close()
            self.send_response(416)
            self.send_header('Content-Range', f'bytes */{size}')
            self.send_header('Content-Length', '0')
            self.end_headers()
            return None
        self.send_response(206)
        self.send_header('Content-Type', self.guess_type(path))
        self.send_header('Accept-Ranges', 'bytes')
        self.send_header('Content-Range', f'bytes {start}-{end}/{size}')
        self.send_header('Content-Length', str(end - start + 1))
        self.send_header('Last-Modified', self.date_time_string(stat.st_mtime))
        self.end_headers()
        stream.seek(start)
        self._byte_range = (start, end)
        return stream

    def copyfile(self, source, outputfile):
        if self._byte_range is None:
            return super().copyfile(source, outputfile)
        remaining = self._byte_range[1] - self._byte_range[0] + 1
        try:
            while remaining:
                data = source.read(min(1024 * 1024, remaining))
                if not data:
                    break
                outputfile.write(data)
                remaining -= len(data)
        except (ConnectionResetError, BrokenPipeError, ConnectionAbortedError):
            pass  # The browser may cancel a previous range when changing clips.

    def log_message(self, format, *args):
        pass


if __name__ == '__main__':
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument('--port', type=int, default=8766)
    args = parser.parse_args()
    task_root = Path(__file__).resolve().parent.parent
    server = ThreadingHTTPServer(('127.0.0.1', args.port), partial(RangeHandler, directory=str(task_root)))
    print(f'Open http://127.0.0.1:{args.port}/output/report.html', flush=True)
    try:
        server.serve_forever()
    except KeyboardInterrupt:
        server.server_close()
