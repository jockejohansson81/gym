#!/usr/bin/env python3
import http.server
import socketserver
import os

os.chdir("/Users/joakimjohansson/Library/CloudStorage/OneDrive-Personal/Cabinet configurator")
PORT = 8000
Handler = http.server.SimpleHTTPRequestHandler
with socketserver.TCPServer(("", PORT), Handler) as httpd:
    print(f"Server running at http://localhost:{PORT}/")
    httpd.serve_forever()
