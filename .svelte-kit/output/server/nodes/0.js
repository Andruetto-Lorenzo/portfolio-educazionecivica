import * as universal from '../entries/pages/_layout.js';

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_layout.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/+layout.js";
export const imports = ["_app/immutable/nodes/0.ClumP3dF.js","_app/immutable/chunks/CNqNuAG8.js","_app/immutable/chunks/Sn9sGc6C.js","_app/immutable/chunks/DXLwiZ0H.js"];
export const stylesheets = ["_app/immutable/assets/0.D0HsVks8.css"];
export const fonts = [];
