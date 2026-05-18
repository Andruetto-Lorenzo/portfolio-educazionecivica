<script>
  import Hero from '$lib/components/Hero.svelte';
  import ProjectCard from '$lib/components/ProjectCard.svelte';
  import { base } from '$app/paths';
  import { onMount } from 'svelte';
  import { featuredProjects } from './projects';

  let sectionVisible = $state({});

  onMount(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(e => {
          if (e.isIntersecting) {
            sectionVisible[e.target.dataset.section] = true;
          }
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll('[data-section]').forEach(el => observer.observe(el));
    return () => observer.disconnect();
  });
</script>

<svelte:head>
  <title>Home | Portfolio Studente Informatico</title>
</svelte:head>

<!-- HERO -->
<Hero />

<!-- FEATURED PROJECTS -->
<section class="section projects-section" data-section="projects">
  <div class="section-head" class:anim-in={sectionVisible['projects']}>
    <span class="tag">// progetti in evidenza</span>
    <h2 class="section-title">Lavori & <span class="accent">Ricerche</span></h2>
    <p class="section-subtitle">Una selezione dei lavori realizzati nel percorso scolastico</p>
    <div class="glow-line"></div>
  </div>

  <div class="projects-grid" class:anim-in={sectionVisible['projects']}>
    {#each featuredProjects as project, i}
      <div class="card-wrapper" style="animation-delay: {i * 0.1}s">
        <ProjectCard {...project} />
      </div>
    {/each}
  </div>
</section>

<!-- ABOUT PREVIEW -->
<section class="section about-preview" data-section="about">
  <div class="about-grid" class:anim-in={sectionVisible['about']}>
    <div class="about-text">
      <span class="tag">// chi sono</span>
      <h2 class="section-title">Studente &<br /><span class="accent">Appassionato</span></h2>
      <div class="glow-line"></div>
      <p class="about-desc">
        Sono uno studente di informatica alla fine del mio percorso all'istituto tecnico.
        In questi tre anni ho sviluppato competenze tecniche e trasversali, imparando a pensare
        come un informatico e a risolvere problemi con creatività e metodo.
      </p>
      <p class="about-desc">
        Il mio percorso di <strong>Educazione Civica</strong> mi ha permesso di esplorare temi
        fondamentali come la cittadinanza digitale, la sostenibilità e i diritti nella società moderna.
      </p>
      <div class="about-ctas">
      </div>
    </div>

    <div class="about-visual">
      <div class="terminal">
        <div class="terminal-bar">
          <span class="t-btn t-close"></span>
          <span class="t-btn t-min"></span>
          <span class="t-btn t-max"></span>
          <span class="t-title">about.js</span>
        </div>
        <div class="terminal-body">
          <div class="t-line"><span class="t-kw">const</span> <span class="t-var">studente</span> = {'{'}</div>
          <div class="t-line t-indent"><span class="t-key">nome</span>: <span class="t-str">"Lorenzo Andruetto"</span>,</div>
          <div class="t-line t-indent"><span class="t-key">classe</span>: <span class="t-str">"5ª Informatica"</span>,</div>
          <div class="t-line t-indent"><span class="t-key">passione</span>: <span class="t-str">"Tecnologia"</span>,</div>
          <div class="t-line t-indent"><span class="t-key">obiettivo</span>: <span class="t-str">"Maturità 2026"</span>,</div>
          <div class="t-line t-indent"><span class="t-key">skills</span>: [<span class="t-str">"JS"</span>, <span class="t-str">"Python"</span>, <span class="t-str">"SQL"</span>],</div>
          <div class="t-line t-indent"><span class="t-key">sogno</span>: <span class="t-str">"Dev @ Future Corp"</span></div>
          <div class="t-line">{'}'}</div>
          <div class="t-line t-empty"></div>
          <div class="t-cursor">█</div>
        </div>
      </div>
    </div>
  </div>
</section>
    <div class="projects-cta">
      <a href={`${base}/educazione-civica`} class="btn-outline">
        Approfondisci Educazione Civica
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
          <path d="M5 12h14M12 5l7 7-7 7"/>
        </svg>
      </a>
    </div>
  <!-- </div> -->
<!-- </section> -->

<style>
  /* Section header */
  .section-head {
    margin-bottom: 3rem;
    opacity: 0;
    transform: translateY(24px);
    transition: opacity 0.6s ease, transform 0.6s ease;
  }

  .section-head.anim-in {
    opacity: 1;
    transform: translateY(0);
  }

  .section-head .tag {
    margin-bottom: 1rem;
    display: inline-flex;
  }

  /* Projects */
  .projects-section {
    padding-bottom: 4rem;
  }

  .projects-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
    gap: 1.5rem;
    margin-bottom: 2.5rem;
    opacity: 1;
    transition: opacity 0.4s ease 0.2s;
  }

  .projects-grid.anim-in {
    opacity: 1;
  }

  .card-wrapper {
    opacity: 0;
    transform: translateY(20px);
    animation: none;
  }

  @keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

  .projects-grid.anim-in .card-wrapper {
    animation: fadeInUp 0.6s cubic-bezier(0.4,0,0.2,1) forwards;
  }

  .projects-cta {
    text-align: center;
    margin-top: 1rem;
  }

  .btn-outline {
    display: inline-flex;
    align-items: center;
    gap: 0.5rem;
    padding: 0.75rem 1.8rem;
    border: 1px solid var(--c-border);
    border-radius: var(--radius-full);
    font-size: 0.9rem;
    font-weight: 500;
    color: var(--c-text-2);
    transition: all var(--transition);
  }

  .btn-outline:hover {
    border-color: var(--c-accent);
    color: var(--c-accent);
    background: rgba(56,189,248,0.04);
    transform: translateY(-2px);
  }

  /* Skills */
  .skills-section-wrap {
    background: var(--c-bg-2);
    border-top: 1px solid var(--c-border);
    border-bottom: 1px solid var(--c-border);
  }

  .skills-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
    gap: 1.5rem;
    opacity: 0;
    transition: opacity 0.4s ease 0.2s;
  }

  .skills-grid.anim-in {
    opacity: 1;
  }

  .skills-grid.anim-in .skill-item {
    animation: fadeInUp 0.6s cubic-bezier(0.4,0,0.2,1) forwards;
  }

  .skill-item {
    opacity: 0;
  }

  .skill-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 0.6rem;
  }

  .skill-name {
    font-size: 0.875rem;
    font-weight: 500;
    color: var(--c-text);
  }

  .skill-pct {
    font-family: var(--f-mono);
    font-size: 0.75rem;
    font-weight: 600;
  }

  .skill-bar {
    height: 6px;
    background: var(--c-surface-2);
    border-radius: 99px;
    overflow: hidden;
  }

  .skill-fill {
    height: 100%;
    width: 0;
    background: linear-gradient(90deg, var(--color), color-mix(in srgb, var(--color) 70%, #fff));
    border-radius: 99px;
    box-shadow: 0 0 8px var(--color);
    transition: none;
  }

  .skill-fill.animate {
    animation: growBar 1.2s cubic-bezier(0.4, 0, 0.2, 1) forwards;
    animation-delay: var(--d, 0s);
  }

  @keyframes growBar {
    to { width: var(--w); }
  }

  /* About */
  .about-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 4rem;
    align-items: center;
    opacity: 0;
    transform: translateY(24px);
    transition: opacity 0.6s ease, transform 0.6s ease;
  }

  .about-grid.anim-in {
    opacity: 1;
    transform: translateY(0);
  }

  .about-text .tag { margin-bottom: 1rem; display: inline-flex; }

  .about-desc {
    color: var(--c-text-2);
    font-size: 0.95rem;
    line-height: 1.8;
    margin-bottom: 1rem;
  }

  .about-ctas {
    display: flex;
    gap: 1rem;
    margin-top: 1.5rem;
    flex-wrap: wrap;
  }

  .btn-primary-sm {
    display: inline-flex;
    align-items: center;
    padding: 0.6rem 1.4rem;
    background: linear-gradient(135deg, var(--c-accent), var(--c-accent-2));
    color: var(--c-bg);
    font-weight: 600;
    font-size: 0.875rem;
    border-radius: var(--radius-full);
    transition: all var(--transition);
  }

  .btn-primary-sm:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 20px rgba(56,189,248,0.35);
  }

  .btn-ghost-sm {
    display: inline-flex;
    align-items: center;
    padding: 0.6rem 1rem;
    color: var(--c-text-2);
    font-size: 0.875rem;
    transition: color var(--transition);
  }

  .btn-ghost-sm:hover {
    color: var(--c-accent);
  }

  /* Terminal */
  .terminal {
    background: #0d1117;
    border: 1px solid rgba(56, 189, 248, 0.2);
    border-radius: var(--radius-lg);
    overflow: hidden;
    box-shadow: 0 20px 60px rgba(0,0,0,0.5), 0 0 40px rgba(56,189,248,0.05);
  }

  .terminal-bar {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    padding: 0.8rem 1rem;
    background: #161b22;
    border-bottom: 1px solid rgba(56,189,248,0.1);
  }

  .t-btn {
    width: 12px;
    height: 12px;
    border-radius: 50%;
  }

  .t-close { background: #ff5f56; }
  .t-min { background: #ffbd2e; }
  .t-max { background: #27c93f; }

  .t-title {
    font-family: var(--f-mono);
    font-size: 0.72rem;
    color: var(--c-text-3);
    margin-left: auto;
  }

  .terminal-body {
    padding: 1.5rem;
    font-family: var(--f-mono);
    font-size: 0.82rem;
    line-height: 1.8;
  }

  .t-line { color: var(--c-text-2); }
  .t-indent { padding-left: 1.5rem; }
  .t-empty { height: 0.5rem; }
  .t-kw { color: #f97583; }
  .t-var { color: #79b8ff; }
  .t-key { color: #ffab70; }
  .t-str { color: #9ecbff; }
  .t-comment { color: #6a737d; font-style: italic; }

  .t-cursor {
    color: var(--c-accent);
    animation: blink 1.2s step-end infinite;
    margin-top: 0.2rem;
  }

  @keyframes blink {
    0%, 100% { opacity: 1; }
    50% { opacity: 0; }
  }

  /* Ed. Civica themes */
  .civica-section-wrap {
    background: var(--c-bg-2);
    border-top: 1px solid var(--c-border);
    border-bottom: 1px solid var(--c-border);
  }

  .civica-themes {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));
    gap: 1.25rem;
    margin-bottom: 2.5rem;
    opacity: 0;
    transition: opacity 0.4s ease 0.2s;
  }

  .civica-themes.anim-in {
    opacity: 1;
  }

  .civica-themes.anim-in .theme-card {
    animation: fadeInUp 0.5s cubic-bezier(0.4,0,0.2,1) forwards;
  }

  .theme-card {
    opacity: 0;
    background: var(--c-surface);
    border: 1px solid var(--c-border);
    border-radius: var(--radius-lg);
    padding: 1.5rem;
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    transition: all var(--transition);
    position: relative;
    overflow: hidden;
  }

  .theme-card::after {
    content: '';
    position: absolute;
    inset: 0;
    background: radial-gradient(circle at top right, var(--tc), transparent 70%);
    opacity: 0;
    transition: opacity var(--transition);
  }

  .theme-card:hover {
    border-color: var(--tc);
    transform: translateY(-4px);
    box-shadow: 0 12px 32px rgba(0,0,0,0.2);
  }

  .theme-card:hover::after {
    opacity: 0.05;
  }

  .theme-icon {
    font-size: 1.8rem;
    line-height: 1;
  }

  .theme-label {
    font-size: 0.9rem;
    font-weight: 600;
    color: var(--c-text);
  }

  .theme-desc {
    font-size: 0.8rem;
    color: var(--c-text-2);
    line-height: 1.55;
  }

  @media (max-width: 900px) {
    .about-grid {
      grid-template-columns: 1fr;
    }
  }

  @media (max-width: 640px) {
    .civica-themes {
      grid-template-columns: 1fr 1fr;
    }
  }

  @media (max-width: 480px) {
    .civica-themes {
      grid-template-columns: 1fr;
    }
  }
</style>