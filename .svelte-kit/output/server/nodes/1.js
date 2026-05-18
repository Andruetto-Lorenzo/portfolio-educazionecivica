

export const index = 1;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/fallbacks/error.svelte.js')).default;
export const imports = ["_app/immutable/nodes/1.CuxdIfFV.js","_app/immutable/chunks/CNqNuAG8.js","_app/immutable/chunks/DaSYX-kH.js","_app/immutable/chunks/DXLwiZ0H.js"];
export const stylesheets = [];
export const fonts = [];
