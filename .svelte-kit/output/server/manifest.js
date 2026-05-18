export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "portfolio-educazionecivica/_app",
	assets: new Set(["robots.txt"]),
	mimeTypes: {".txt":"text/plain"},
	_: {
		client: {start:"_app/immutable/entry/start.BLOjGlB1.js",app:"_app/immutable/entry/app.D3eps1_i.js",imports:["_app/immutable/entry/start.BLOjGlB1.js","_app/immutable/chunks/CXrjCH18.js","_app/immutable/chunks/CNqNuAG8.js","_app/immutable/entry/app.D3eps1_i.js","_app/immutable/chunks/CNqNuAG8.js","_app/immutable/chunks/BcgnSMxp.js","_app/immutable/chunks/DXLwiZ0H.js"],stylesheets:[],fonts:[],uses_env_dynamic_public:false},
		nodes: [
			__memo(() => import('./nodes/0.js')),
			__memo(() => import('./nodes/1.js'))
		],
		remotes: {
			
		},
		routes: [
			
		],
		prerendered_routes: new Set(["/portfolio-educazionecivica/","/portfolio-educazionecivica/educazione-civica"]),
		matchers: async () => {
			
			return {  };
		},
		server_assets: {}
	}
}
})();
