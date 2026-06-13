// diagnostics.js
// A lightweight Node CLI that reports system information.
const os = require("os");
function parseArgs(argv) {
const args = argv.slice(2);
const labelIndex = args.indexOf("--label");
if (labelIndex === -1 || !args[labelIndex + 1]) {
return { label: null };
}
return { label: args[labelIndex + 1] };
}
function gather() {
const totalGB = (os.totalmem() / 1024 ** 3).toFixed(2);
const freeGB = (os.freemem() / 1024 ** 3).toFixed(2);
const uptimeHours = (os.uptime() / 3600).toFixed(2);
return {
hostname: os.hostname(),
platform: os.platform(),
arch: os.arch(),
cpuCount: os.cpus().length,
totalMemoryGB: totalGB,
freeMemoryGB: freeGB,
uptimeHours,
nodeVersion: process.version,
};
}
function main() {
const { label } = parseArgs(process.argv);
if (!label) {
console.error("ERR_MISSING_LABEL: pass --label <name>, e.g. --label morning-check");
process.exit(1);
}
const data = gather();
console.log("=== System Diagnostics Report ===");
console.log(`Label:        ${label}`);
console.log(`Generated:    ${new Date().toISOString()}`);
console.log(`Hostname:     ${data.hostname}`);
console.log(`Platform:     ${data.platform} (${data.arch})`);
console.log(`CPU cores:    ${data.cpuCount}`);
console.log(`Memory:       ${data.freeMemoryGB} GB free / ${data.totalMemoryGB} GB
total`);
console.log(`Uptime:       ${data.uptimeHours} hours`);
console.log(`Node runtime: ${data.nodeVersion}`);
console.log("=================================");
}
main();
