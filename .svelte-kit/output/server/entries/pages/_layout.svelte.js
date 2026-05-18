import { G as attr, K as escape_html, a as attr_style, c as head, f as store_get, h as html, i as attr_class, m as unsubscribe_stores, o as derived, p as stringify, s as ensure_array_like, tt as getContext, u as slot } from "../../chunks/index-server.js";
import "../../chunks/client.js";
//#region node_modules/@sveltejs/kit/src/runtime/app/stores.js
/**
* A function that returns all of the contextual stores. On the server, this must be called during component initialization.
* Only use this if you need to defer store subscription until after the component has mounted, for some reason.
*
* @deprecated Use `$app/state` instead (requires Svelte 5, [see docs for more info](https://svelte.dev/docs/kit/migrating-to-sveltekit-2#SvelteKit-2.12:-$app-stores-deprecated))
*/
var getStores = () => {
	const stores$1 = getContext("__svelte__");
	return {
		/** @type {typeof page} */
		page: { subscribe: stores$1.page.subscribe },
		/** @type {typeof navigating} */
		navigating: { subscribe: stores$1.navigating.subscribe },
		/** @type {typeof updated} */
		updated: stores$1.updated
	};
};
/**
* A readable store whose value contains page data.
*
* On the server, this store can only be subscribed to during component initialization. In the browser, it can be subscribed to at any time.
*
* @deprecated Use `page` from `$app/state` instead (requires Svelte 5, [see docs for more info](https://svelte.dev/docs/kit/migrating-to-sveltekit-2#SvelteKit-2.12:-$app-stores-deprecated))
* @type {import('svelte/store').Readable<import('@sveltejs/kit').Page>}
*/
var page = { subscribe(fn) {
	return getStores().page.subscribe(fn);
} };
//#endregion
//#region src/lib/components/Navbar.svelte
function Navbar($$renderer, $$props) {
	$$renderer.component(($$renderer) => {
		var $$store_subs;
		let scrolled = false;
		let menuOpen = false;
		const navLinks = [{
			href: "/",
			label: "Home"
		}, {
			href: "/educazione-civica",
			label: "Ed. Civica"
		}];
		let currentPath = derived(() => store_get($$store_subs ??= {}, "$page", page).url.pathname);
		$$renderer.push(`<nav${attr_class("navbar svelte-rfuq4y", void 0, {
			"scrolled": scrolled,
			"menu-open": menuOpen
		})}><div class="nav-inner svelte-rfuq4y"><a href="/" class="logo svelte-rfuq4y"><span class="logo-bracket svelte-rfuq4y">[</span> <span class="logo-text svelte-rfuq4y">PORTFOLIO</span> <span class="logo-bracket svelte-rfuq4y">]</span> <span class="logo-cursor svelte-rfuq4y">_</span></a> <ul class="nav-links svelte-rfuq4y"><!--[-->`);
		const each_array = ensure_array_like(navLinks);
		for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
			let link = each_array[$$index];
			$$renderer.push(`<li class="svelte-rfuq4y"><a${attr("href", link.href)}${attr_class("nav-link svelte-rfuq4y", void 0, { "active": currentPath() === link.href })}>${escape_html(link.label)} `);
			if (currentPath() === link.href) {
				$$renderer.push("<!--[0-->");
				$$renderer.push(`<span class="active-dot svelte-rfuq4y"></span>`);
			} else $$renderer.push("<!--[-1-->");
			$$renderer.push(`<!--]--></a></li>`);
		}
		$$renderer.push(`<!--]--></ul> <button${attr_class("hamburger svelte-rfuq4y", void 0, { "open": menuOpen })} aria-label="Toggle menu"${attr("aria-expanded", menuOpen)}><span class="svelte-rfuq4y"></span> <span class="svelte-rfuq4y"></span> <span class="svelte-rfuq4y"></span></button></div> <div${attr_class("mobile-menu svelte-rfuq4y", void 0, { "open": menuOpen })}><ul class="mobile-links svelte-rfuq4y"><!--[-->`);
		const each_array_1 = ensure_array_like(navLinks);
		for (let i = 0, $$length = each_array_1.length; i < $$length; i++) {
			let link = each_array_1[i];
			$$renderer.push(`<li${attr_style(`animation-delay: ${stringify(i * .07)}s`)} class="svelte-rfuq4y"><a${attr("href", link.href)}${attr_class("mobile-link svelte-rfuq4y", void 0, { "active": currentPath() === link.href })}><span class="mobile-link-num svelte-rfuq4y">0${escape_html(i + 1)}</span> ${escape_html(link.label)}</a></li>`);
		}
		$$renderer.push(`<!--]--></ul> <div class="mobile-footer svelte-rfuq4y"><span class="mobile-tagline svelte-rfuq4y">// studente di informatica</span></div></div></nav>`);
		if ($$store_subs) unsubscribe_stores($$store_subs);
	});
}
//#endregion
//#region src/lib/components/Footer.svelte
function Footer($$renderer, $$props) {
	$$renderer.component(($$renderer) => {
		const socials = [{
			name: "GitHub",
			href: "https://github.com/Andruetto-Lorenzo",
			icon: `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/></svg>`
		}];
		const year = (/* @__PURE__ */ new Date()).getFullYear();
		$$renderer.push(`<footer class="footer svelte-jz8lnl"><div class="footer-glow svelte-jz8lnl"></div> <div class="footer-inner svelte-jz8lnl"><div class="footer-grid svelte-jz8lnl"><div class="footer-brand svelte-jz8lnl"><div class="footer-logo svelte-jz8lnl"><span class="logo-bracket svelte-jz8lnl">[</span> <span class="svelte-jz8lnl">PORTFOLIO</span> <span class="logo-bracket svelte-jz8lnl">]</span></div> <p class="footer-desc svelte-jz8lnl">Un percorso di crescita, curiosità e passione per la tecnologia. Dalla terza superiore alla maturità.</p></div> <div class="footer-nav svelte-jz8lnl"><h4 class="footer-nav-title svelte-jz8lnl">Sezioni</h4> <ul class="svelte-jz8lnl"><li class="svelte-jz8lnl"><a href="/" class="svelte-jz8lnl">Home</a></li> <li class="svelte-jz8lnl"><a href="/chi-sono" class="svelte-jz8lnl">Chi Sono</a></li> <li class="svelte-jz8lnl"><a href="/educazione-civica" class="svelte-jz8lnl">Ed. Civica</a></li> <li class="svelte-jz8lnl"><a href="/percorso" class="svelte-jz8lnl">Percorso</a></li> <li class="svelte-jz8lnl"><a href="/progetti" class="svelte-jz8lnl">Progetti</a></li> <li class="svelte-jz8lnl"><a href="/contatti" class="svelte-jz8lnl">Contatti</a></li></ul></div> <div class="footer-contact svelte-jz8lnl"><h4 class="footer-nav-title svelte-jz8lnl">Contatti</h4> <p class="footer-email svelte-jz8lnl">lorenzo.andruetto@istitutoagnelli.it</p> <div class="socials svelte-jz8lnl"><!--[-->`);
		const each_array = ensure_array_like(socials);
		for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
			let social = each_array[$$index];
			$$renderer.push(`<a${attr("href", social.href)} class="social-link svelte-jz8lnl"${attr("title", social.name)} target="_blank" rel="noopener noreferrer">${html(social.icon)}</a>`);
		}
		$$renderer.push(`<!--]--></div></div></div> <div class="footer-quote svelte-jz8lnl"><div class="quote-line svelte-jz8lnl"></div> <blockquote class="svelte-jz8lnl">"Il codice che scrivi oggi è la fondamenta del mondo di domani."</blockquote> <div class="quote-line svelte-jz8lnl"></div></div> <div class="footer-bottom svelte-jz8lnl"><span class="footer-copy svelte-jz8lnl">© ${escape_html(year)} Portfolio Studente — Tutti i diritti riservati</span> <span class="footer-made svelte-jz8lnl"><span class="footer-mono svelte-jz8lnl">crafted with</span> <span class="footer-heart svelte-jz8lnl">♥</span> <span class="footer-mono svelte-jz8lnl">SvelteKit</span></span></div></div> <div class="footer-particles svelte-jz8lnl"><!--[-->`);
		const each_array_1 = ensure_array_like(Array(8));
		for (let i = 0, $$length = each_array_1.length; i < $$length; i++) {
			each_array_1[i];
			$$renderer.push(`<span class="particle svelte-jz8lnl"${attr_style(`--i:${stringify(i)}`)}></span>`);
		}
		$$renderer.push(`<!--]--></div></footer>`);
	});
}
//#endregion
//#region src/routes/+layout.svelte
function _layout($$renderer, $$props) {
	$$renderer.component(($$renderer) => {
		head("12qhfyh", $$renderer, ($$renderer) => {
			$$renderer.title(($$renderer) => {
				$$renderer.push(`<title>Portfolio | Studente Informatico</title>`);
			});
			$$renderer.push(`<meta name="description" content="Portfolio scolastico di uno studente di informatica - percorso dalla terza alla quinta superiore"/> <link rel="preconnect" href="https://fonts.googleapis.com"/> <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin=""/> <link href="https://fonts.googleapis.com/css2?family=Orbitron:wght@400;600;700;900&amp;family=DM+Sans:ital,opsz,wght@0,9..40,300;0,9..40,400;0,9..40,500;1,9..40,300&amp;family=JetBrains+Mono:wght@300;400;500&amp;display=swap" rel="stylesheet"/>`);
		});
		$$renderer.push(`<div class="app svelte-12qhfyh">`);
		Navbar($$renderer, {});
		$$renderer.push(`<!----> <main class="svelte-12qhfyh"><!--[-->`);
		slot($$renderer, $$props, "default", {}, null);
		$$renderer.push(`<!--]--></main> `);
		Footer($$renderer, {});
		$$renderer.push(`<!----></div>`);
	});
}
//#endregion
export { _layout as default };
