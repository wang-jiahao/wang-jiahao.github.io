#!/usr/bin/env python3
"""Serve this task directory locally with HTTP Range support.

Python's SimpleHTTPRequestHandler does not implement Range requests, which
prevents browsers from seeking in large MP4 files. Run this script from any
directory and open the printed URL.
"""

import argparse
import os
import re
import sys
from http.server import SimpleHTTPRequestHandler, ThreadingHTTPServer
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent


class RangeReader:
    def __init__(self, file_obj, remaining):
        self.file_obj = file_obj
        self.remaining = remaining

    def read(self, size=-1):
        if self.remaining <= 0:
            return b""
        if size < 0 or size > self.remaining:
            size = self.remaining
        data = self.file_obj.read(size)
        self.remaining -= len(data)
        return data

    def close(self):
        self.file_obj.close()


class RangeRequestHandler(SimpleHTTPRequestHandler):
    def __init__(self, *args, **kwargs):
        super().__init__(*args, directory=str(ROOT), **kwargs)

    def end_headers(self):
        if not getattr(self, "_accept_ranges_sent", False):
            self.send_header("Accept-Ranges", "bytes")
        super().end_headers()

    def send_head(self):
        range_header = self.headers.get("Range")
        if not range_header:
            return super().send_head()

        path = self.translate_path(self.path)
        if os.path.isdir(path):
            return super().send_head()

        try:
            file_obj = open(path, "rb")
        except OSError:
            self.send_error(404, "File not found")
            return None

        try:
            stat = os.fstat(file_obj.fileno())
            size = stat.st_size
            match = re.fullmatch(r"bytes=(\d*)-(\d*)", range_header.strip())
            if not match or "," in range_header:
                self.send_error(416, "Unsupported Range")
                file_obj.close()
                return None

            first, last = match.groups()
            if not first and not last:
                self.send_error(416, "Invalid Range")
                file_obj.close()
                return None
            if not first:
                suffix_length = int(last)
                start = max(size - suffix_length, 0)
                end = size - 1
            else:
                start = int(first)
                end = int(last) if last else size - 1

            if start >= size or end < start:
                self.send_response(416)
                self.send_header("Content-Range", f"bytes */{size}")
                self._accept_ranges_sent = True
                self.send_header("Accept-Ranges", "bytes")
                self.end_headers()
                file_obj.close()
                return None

            end = min(end, size - 1)
            length = end - start + 1
            file_obj.seek(start)
            self.send_response(206)
            self.send_header("Content-Type", self.guess_type(path))
            self.send_header("Content-Range", f"bytes {start}-{end}/{size}")
            self.send_header("Content-Length", str(length))
            self.send_header("Last-Modified", self.date_time_string(stat.st_mtime))
            self.send_header("Cache-Control", "no-cache")
            self.send_header("Accept-Ranges", "bytes")
            self._accept_ranges_sent = True
            self.end_headers()
            return RangeReader(file_obj, length)
        except Exception:
            file_obj.close()
            raise


class QuietThreadingHTTPServer(ThreadingHTTPServer):
    daemon_threads = True

    def handle_error(self, request, client_address):
        error = sys.exc_info()[1]
        if isinstance(error, (ConnectionResetError, ConnectionAbortedError, BrokenPipeError)):
            return
        super().handle_error(request, client_address)


def main():
    parser = argparse.ArgumentParser(description="Range-capable local server for the action report")
    parser.add_argument("--port", type=int, default=8000)
    parser.add_argument("--bind", default="127.0.0.1")
    args = parser.parse_args()
    server = QuietThreadingHTTPServer((args.bind, args.port), RangeRequestHandler)
    url = f"http://{args.bind}:{args.port}/output/report.html"
    print(f"Serving {ROOT}")
    print(f"Open: {url}")
    try:
        server.serve_forever()
    except KeyboardInterrupt:
        print("\nStopped")
    finally:
        server.server_close()


if __name__ == "__main__":
    sys.exit(main())
