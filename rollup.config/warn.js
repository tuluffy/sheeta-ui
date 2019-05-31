export function buildWithWarn(warning) {
    const {loc, frame, message} = warning;
    if (warning.code === 'UNUSED_EXTERNAL_IMPORT') return;
    if (loc) {
        console.warn(`${loc.file} (${loc.line}:${loc.column}) ${message}`);
        if (frame) console.warn(frame);
    } else {
        console.warn(message);
    }
}