import { K as escape_html, a as attr_style, c as head, i as attr_class, p as stringify, s as ensure_array_like } from "../../../chunks/index-server.js";
import { t as featuredProjects } from "../../../chunks/projects.js";
//#region src/routes/educazione-civica/+page.svelte
function _page($$renderer, $$props) {
	$$renderer.component(($$renderer) => {
		let visible = {};
		head("1ixeugk", $$renderer, ($$renderer) => {
			$$renderer.title(($$renderer) => {
				$$renderer.push(`<title>Educazione Civica | Portfolio</title>`);
			});
		});
		$$renderer.push("<!--[-1-->");
		$$renderer.push(`<!--]--> <div class="page-hero svelte-1ixeugk"><div class="page-hero-bg svelte-1ixeugk"><div class="hero-orb h-orb-1 svelte-1ixeugk"></div> <div class="hero-orb h-orb-2 svelte-1ixeugk"></div> <div class="grid-pattern svelte-1ixeugk"></div></div> <div class="page-hero-content svelte-1ixeugk"><span class="tag fade-in svelte-1ixeugk" style="animation-delay:0.1s">// triennio formativo</span> <h1 class="page-title fade-in svelte-1ixeugk" style="animation-delay:0.2s">Educazione <span class="accent svelte-1ixeugk">Civica</span></h1> <p class="page-subtitle fade-in svelte-1ixeugk" style="animation-delay:0.35s">Percorso trasversale che unisce Informatica, Storia e Diritto per formare cittadini consapevoli delle dinamiche sociali e digitali contemporanee.</p> <div class="page-hero-stats fade-in svelte-1ixeugk" style="animation-delay:0.5s"><div class="hs svelte-1ixeugk"><span class="hs-n svelte-1ixeugk">${escape_html(featuredProjects.length)}</span><span class="hs-l svelte-1ixeugk">Lavori prodotti</span></div> <div class="hs-sep svelte-1ixeugk"></div> <div class="hs svelte-1ixeugk"><span class="hs-n svelte-1ixeugk">3</span><span class="hs-l svelte-1ixeugk">Anni scolastici</span></div></div></div></div> <section class="section svelte-1ixeugk" data-obs="elaborati"><div${attr_class("section-head svelte-1ixeugk", void 0, { "anim-in": visible["elaborati"] })}><span class="tag svelte-1ixeugk">// portfolio lavori</span> <h2 class="section-title svelte-1ixeugk">Progetti &amp; <span class="accent svelte-1ixeugk">Ricerche</span></h2> <p class="section-subtitle svelte-1ixeugk">Tutti i prodotti realizzati durante il percorso triennale</p> <div class="glow-line svelte-1ixeugk"></div></div> <div${attr_class("projects-grid svelte-1ixeugk", void 0, { "anim-in": visible["elaborati"] })}><!--[-->`);
		const each_array_3 = ensure_array_like(featuredProjects);
		for (let i = 0, $$length = each_array_3.length; i < $$length; i++) {
			let p = each_array_3[i];
			$$renderer.push(`<div class="project-card-wrapper svelte-1ixeugk" role="button" tabindex="0"${attr_style(`animation-delay: ${stringify(i * .08)}s`)}><div class="pcard svelte-1ixeugk"${attr_style(`--c: ${stringify(p.color)}`)}><div class="pcard-top svelte-1ixeugk">`);
			if (p.icon) {
				$$renderer.push("<!--[0-->");
				$$renderer.push(`<span class="pcard-icon svelte-1ixeugk">${escape_html(p.icon)}</span>`);
			} else $$renderer.push("<!--[-1-->");
			$$renderer.push(`<!--]--> <span class="pcard-year svelte-1ixeugk">${escape_html(p.year)}</span></div> <h3 class="pcard-title svelte-1ixeugk">${escape_html(p.title)}</h3> <p class="pcard-desc svelte-1ixeugk">${escape_html(p.description)}</p> <div class="pcard-tags svelte-1ixeugk"><!--[-->`);
			const each_array_4 = ensure_array_like(p.tags);
			for (let $$index_3 = 0, $$length = each_array_4.length; $$index_3 < $$length; $$index_3++) {
				let t = each_array_4[$$index_3];
				$$renderer.push(`<span class="pcard-tag svelte-1ixeugk">${escape_html(t)}</span>`);
			}
			$$renderer.push(`<!--]--></div> <div class="pcard-footer svelte-1ixeugk"><span${attr_class("pcard-status svelte-1ixeugk", void 0, { "done": p.status === "Completato" })}>${escape_html(p.status)}</span> <span class="pcard-cta svelte-1ixeugk">Dettagli →</span></div></div></div>`);
		}
		$$renderer.push(`<!--]--></div></section>`);
	});
}
//#endregion
export { _page as default };
