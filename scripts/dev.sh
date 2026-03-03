#!/bin/bash
# Raise file descriptor limit to avoid EMFILE errors, then start Next.js dev server
ulimit -n 10240 2>/dev/null || true
exec npx next dev --hostname localhost
