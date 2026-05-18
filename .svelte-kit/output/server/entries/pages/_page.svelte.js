import { G as attr, K as escape_html, a as attr_style, c as head, d as spread_props, i as attr_class, p as stringify, s as ensure_array_like } from "../../chunks/index-server.js";
import { d as base } from "../../chunks/environment.js";
import "../../chunks/paths.js";
import { t as featuredProjects } from "../../chunks/projects.js";
//#region src/lib/components/Hero.svelte
function Hero($$renderer, $$props) {
	$$renderer.component(($$renderer) => {
		let visible = false;
		const techStack = [
			"HTML/CSS",
			"JavaScript",
			"Python",
			"SQL",
			"Linux",
			"Git"
		];
		$$renderer.push(`<section class="hero svelte-1q37ri0"><canvas class="hero-canvas svelte-1q37ri0"></canvas> <div class="orb orb-1 svelte-1q37ri0"></div> <div class="orb orb-2 svelte-1q37ri0"></div> <div class="orb orb-3 svelte-1q37ri0"></div> <div${attr_class("hero-content svelte-1q37ri0", void 0, { "visible": visible })}><h1 class="hero-title fade-in svelte-1q37ri0" style="animation-delay:0.2s"><br class="svelte-1q37ri0"/> <span class="title-name svelte-1q37ri0">Lorenzo Andruetto</span> <span class="title-cursor svelte-1q37ri0">|</span></h1> <p class="hero-subtitle fade-in svelte-1q37ri0" style="animation-delay:0.35s">Studente di <span class="hero-accent svelte-1q37ri0">Informatica</span> appassionato di tecnologia, coding e innovazione digitale.
      Dalla terza alla quinta superiore, un percorso di crescita verso la <span class="hero-accent-2 svelte-1q37ri0">maturità</span>.</p> <div class="tech-stack fade-in svelte-1q37ri0" style="animation-delay:0.5s"><span class="tech-label svelte-1q37ri0">// stack tecnologico</span> <div class="tech-tags svelte-1q37ri0"><!--[-->`);
		const each_array = ensure_array_like(techStack);
		for (let i = 0, $$length = each_array.length; i < $$length; i++) {
			let tech = each_array[i];
			$$renderer.push(`<span class="tech-tag svelte-1q37ri0"${attr_style(`animation-delay: ${stringify(.55 + i * .07)}s`)}>${escape_html(tech)}</span>`);
		}
		$$renderer.push(`<!--]--></div></div> <div class="hero-ctas fade-in svelte-1q37ri0" style="animation-delay:0.7s"><a${attr("href", `${base}/educazione-civica`)} class="btn-primary svelte-1q37ri0"><span class="svelte-1q37ri0">Educazione Civica</span> <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" class="svelte-1q37ri0"><path d="M5 12h14M12 5l7 7-7 7" class="svelte-1q37ri0"></path></svg></a></div>  <div${attr_class("scroll-hint svelte-1q37ri0", void 0, { "visible": visible })}><span class="scroll-text svelte-1q37ri0">scroll</span> <span class="scroll-line svelte-1q37ri0"></span></div></div></section>`);
	});
}
//#endregion
//#region src/lib/components/ProjectCard.svelte
function ProjectCard($$renderer, $$props) {
	let { title = "Titolo Progetto", description = "Descrizione del progetto placeholder.", tags = ["Tag1", "Tag2"], color = "#38bdf8", icon = "🖥️", link = "#", year = "2024", status = "Completato" } = $$props;
	$$renderer.push(`<article class="card svelte-oviq8z"${attr_style(`--card-color: ${stringify(color)}`)}><div class="card-header svelte-oviq8z"><span class="card-icon svelte-oviq8z">${escape_html(icon)}</span> <div class="card-meta svelte-oviq8z"><span class="card-year svelte-oviq8z">${escape_html(year)}</span> <span class="card-status svelte-oviq8z"${attr("data-status", status)}>${escape_html(status)}</span></div></div> <div class="card-glow svelte-oviq8z"></div> <h3 class="card-title svelte-oviq8z">${escape_html(title)}</h3> <p class="card-desc svelte-oviq8z">${escape_html(description)}</p> <div class="card-tags svelte-oviq8z"><!--[-->`);
	const each_array = ensure_array_like(tags);
	for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
		let tag = each_array[$$index];
		$$renderer.push(`<span class="card-tag svelte-oviq8z">${escape_html(tag)}</span>`);
	}
	$$renderer.push(`<!--]--></div> <a${attr("href", link)} class="card-link svelte-oviq8z"><span>Esplora</span> <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M7 17L17 7M17 7H7M17 7v10"></path></svg></a></article>`);
}
//#endregion
//#region src/routes/+page.svelte
function _page($$renderer, $$props) {
	$$renderer.component(($$renderer) => {
		let sectionVisible = {};
		head("1uha8ag", $$renderer, ($$renderer) => {
			$$renderer.title(($$renderer) => {
				$$renderer.push(`<title>Home | Portfolio Studente Informatico</title>`);
			});
		});
		Hero($$renderer, {});
		$$renderer.push(`<!----> <section class="section projects-section svelte-1uha8ag" data-section="projects"><div${attr_class("section-head svelte-1uha8ag", void 0, { "anim-in": sectionVisible["projects"] })}><span class="tag svelte-1uha8ag">// progetti in evidenza</span> <h2 class="section-title svelte-1uha8ag">Lavori &amp; <span class="accent svelte-1uha8ag">Ricerche</span></h2> <p class="section-subtitle svelte-1uha8ag">Una selezione dei lavori realizzati nel percorso scolastico</p> <div class="glow-line svelte-1uha8ag"></div></div> <div${attr_class("projects-grid svelte-1uha8ag", void 0, { "anim-in": sectionVisible["projects"] })}><!--[-->`);
		const each_array = ensure_array_like(featuredProjects);
		for (let i = 0, $$length = each_array.length; i < $$length; i++) {
			let project = each_array[i];
			$$renderer.push(`<div class="card-wrapper svelte-1uha8ag"${attr_style(`animation-delay: ${stringify(i * .1)}s`)}>`);
			ProjectCard($$renderer, spread_props([project]));
			$$renderer.push(`<!----></div>`);
		}
		$$renderer.push(`<!--]--></div></section> <section class="section about-preview svelte-1uha8ag" data-section="about"><div${attr_class("about-grid svelte-1uha8ag", void 0, { "anim-in": sectionVisible["about"] })}><div class="about-text svelte-1uha8ag"><span class="tag svelte-1uha8ag">// chi sono</span> <h2 class="section-title svelte-1uha8ag">Studente &amp;<br class="svelte-1uha8ag"/><span class="accent svelte-1uha8ag">Appassionato</span></h2> <div class="glow-line svelte-1uha8ag"></div> <p class="about-desc svelte-1uha8ag">Sono uno studente di informatica alla fine del mio percorso all'istituto tecnico.
        In questi tre anni ho sviluppato competenze tecniche e trasversali, imparando a pensare
        come un informatico e a risolvere problemi con creatività e metodo.</p> <p class="about-desc svelte-1uha8ag">Il mio percorso di <strong class="svelte-1uha8ag">Educazione Civica</strong> mi ha permesso di esplorare temi
        fondamentali come la cittadinanza digitale, la sostenibilità e i diritti nella società moderna.</p> <div class="about-ctas svelte-1uha8ag"></div></div> <div class="about-visual svelte-1uha8ag"><div class="terminal svelte-1uha8ag"><div class="terminal-bar svelte-1uha8ag"><span class="t-btn t-close svelte-1uha8ag"></span> <span class="t-btn t-min svelte-1uha8ag"></span> <span class="t-btn t-max svelte-1uha8ag"></span> <span class="t-title svelte-1uha8ag">about.js</span></div> <div class="terminal-body svelte-1uha8ag"><div class="t-line svelte-1uha8ag"><span class="t-kw svelte-1uha8ag">const</span> <span class="t-var svelte-1uha8ag">studente</span> = {</div> <div class="t-line t-indent svelte-1uha8ag"><span class="t-key svelte-1uha8ag">nome</span>: <span class="t-str svelte-1uha8ag">"Lorenzo Andruetto"</span>,</div> <div class="t-line t-indent svelte-1uha8ag"><span class="t-key svelte-1uha8ag">classe</span>: <span class="t-str svelte-1uha8ag">"5ª Informatica"</span>,</div> <div class="t-line t-indent svelte-1uha8ag"><span class="t-key svelte-1uha8ag">passione</span>: <span class="t-str svelte-1uha8ag">"Tecnologia"</span>,</div> <div class="t-line t-indent svelte-1uha8ag"><span class="t-key svelte-1uha8ag">obiettivo</span>: <span class="t-str svelte-1uha8ag">"Maturità 2026"</span>,</div> <div class="t-line t-indent svelte-1uha8ag"><span class="t-key svelte-1uha8ag">skills</span>: [<span class="t-str svelte-1uha8ag">"JS"</span>, <span class="t-str svelte-1uha8ag">"Python"</span>, <span class="t-str svelte-1uha8ag">"SQL"</span>],</div> <div class="t-line t-indent svelte-1uha8ag"><span class="t-key svelte-1uha8ag">sogno</span>: <span class="t-str svelte-1uha8ag">"Dev @ Future Corp"</span></div> <div class="t-line svelte-1uha8ag">}</div> <div class="t-line t-empty svelte-1uha8ag"></div> <div class="t-cursor svelte-1uha8ag">█</div></div></div></div></div></section> <div class="projects-cta svelte-1uha8ag"><a${attr("href", `${base}/educazione-civica`)} class="btn-outline svelte-1uha8ag">Approfondisci Educazione Civica <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" class="svelte-1uha8ag"><path d="M5 12h14M12 5l7 7-7 7" class="svelte-1uha8ag"></path></svg></a></div>`);
	});
}
//#endregion
export { _page as default };
