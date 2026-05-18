

export const index = 2;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/2.BalVHBJg.js","_app/immutable/chunks/CNqNuAG8.js","_app/immutable/chunks/DXLwiZ0H.js","_app/immutable/chunks/zzNRoaFO.js"];
export const stylesheets = ["_app/immutable/assets/2.CMWQMFyj.css"];
export const fonts = [];
