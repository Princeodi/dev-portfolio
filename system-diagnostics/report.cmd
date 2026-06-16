#!/usr/bin/env bash
# report.sh: run diagnostics twice and separate the streams
echo "=========================================="
echo "Starting diagnostics run"
echo "=========================================="
# Step 1: log basic context
{
echo "Run started at: $(date)"
echo "Working directory: $(pwd)"
echo "Node version: $(node --version)"
echo ""
} > report.out.log
# Step 2: successful run, stdout appended to report.out.log
node diagnostics.js --label scheduled-check >> report.out.log 2>> report.err.log
# Step 3: failing run (no --label argument), stderr appended to report.err.log
echo "" >> report.err.log
echo "Run at: $(date)" >> report.err.log
node diagnostics.js >> report.out.log 2>> report.err.log
echo "Done."
echo "Inspect report.out.log (success output) and report.err.log (errors)."
echo "==========================================".
