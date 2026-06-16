# system-diagnostics
A tiny Node.js CLI that reports system information. Built as a Week 9 mini-project for
the UpliftHub Bootcamp.
## What it does
Collects hostname, platform, CPU count, memory usage, uptime, and Node version, then
prints a labelled report. Errors cleanly when invoked without the required `--label`
argument, writing the failure to stderr.
## Run it
### macOS / Linux / WSL2 / Git Bash
```bash
npm install
