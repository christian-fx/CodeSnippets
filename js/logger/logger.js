import { formatDate } from "./utils";

function log(level, message, meta = {}) {
    const stamp = new Date().toISOString();
    const entry = {
        timestamp: formatDate(stamp),
        level,
        message,
        ...meta
    }
    console.log(JSON.stringify(entry));
}

export default {
    info: (msg, meta) => log("info", msg, meta),
    warn: (msg, meta) => log("warn", msg, meta),
    error: (msg, meta) => log("error", msg, meta)
}
