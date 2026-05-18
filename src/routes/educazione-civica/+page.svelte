<script>
  import { featuredProjects } from '../projects';
  import { onMount } from 'svelte';

  let visible = {};
  let selectedProject = null;

  onMount(() => {
    const obs = new IntersectionObserver(
      entries => entries.forEach(e => { if (e.isIntersecting) visible[e.target.dataset.obs] = true; }),
      { threshold: 0.1 }
    );
    document.querySelectorAll('[data-obs]').forEach(el => obs.observe(el));
    return () => obs.disconnect();
  });

  function openProject(project) {
    selectedProject = project;
    document.body.style.overflow = 'hidden';
  }

  function closeProject() {
    selectedProject = null;
    document.body.style.overflow = '';
  }

  function handleKeydown(e) {
    if (e.key === 'Escape') closeProject();
  }

  function handleOverlayClick(e) {
    if (e.target === e.currentTarget) closeProject();
  }

  const temi = [
    {
      id: 1,
      titolo: 'Cittadinanza Digitale',
      anno: 'Terza Superiore',
      icon: '🌐',
      color: '#38bdf8',
      sottotitolo: 'Diritti e responsabilità online',
      descrizione: `In questo modulo abbiamo esplorato cosa significa essere cittadini nell'era digitale. Abbiamo analizzato i diritti fondamentali online, il contrasto alle fake news e l'identità digitale.`,
      contenuti: [
        'Identità digitale e reputazione online',
        'Fake news: riconoscerle e contrastarle',
        'Netiquette e comportamento in rete',
        'Cyberbullismo: prevenzione e difesa'
      ],
      risorse: ['AGCOM', 'Safer Internet Day']
    },
    {
      id: 2,
      titolo: 'Privacy & GDPR',
      anno: 'Terza Superiore',
      icon: '🔐',
      color: '#fb7185',
      sottotitolo: 'Protezione dei dati',
      descrizione: `Studio del Regolamento Europeo sulla protezione dei dati (GDPR 2016/679) e delle implicazioni pratiche per la privacy degli utenti.`,
      contenuti: [
        'Principi fondamentali del GDPR',
        "Diritti dell'interessato",
        'Consenso informato',
        'Il ruolo del Garante Privacy'
      ],
      risorse: ['Garante Privacy.it', 'GDPR.eu']
    },
  ];

  const timelineItems = [
    {
      year: '2022/23',
      grade: 'Terza',
      title: 'Legalità e Digitale',
      description: 'Studio della criminalità organizzata e primi passi nella cittadinanza digitale e protezione dati.',
      highlights: ['La Mattanza', 'Cittadinanza Digitale', 'GDPR'],
      accent: '#fb7185'
    },
    {
      year: '2023/24',
      grade: 'Quarta',
      title: 'Sviluppo e Competenze',
      description: "Focus sulle applicazioni pratiche della logica informatica e simulazioni d'esame.",
      highlights: ['Quiz Patente B', 'Algoritmi', 'Sostenibilità'],
      accent: '#fbbf24'
    },
    {
      year: '2024/26',
      grade: 'Quinta',
      title: 'Storia, Diritti e Memoria',
      description: 'Approfondimento dei grandi temi del Novecento, della Costituzione e delle problematiche sociali attuali.',
      highlights: ['Costituzione', 'Diritti Umani', 'Analisi Storica'],
      accent: '#818cf8',
      isLast: true
    }
  ];

  let activeTema = null;
</script>

<svelte:head>
  <title>Educazione Civica | Portfolio</title>
</svelte:head>

<svelte:window on:keydown={handleKeydown} />

<!-- ── MODAL ──────────────────────────────────────────────── -->
{#if selectedProject}
  <!-- svelte-ignore a11y-click-events-have-key-events -->
  <div class="modal-overlay" on:click={handleOverlayClick} role="dialog" aria-modal="true">
    <div class="modal-card" style="--accent: {selectedProject.color}">

      <div class="modal-header" style="background: linear-gradient(135deg, {selectedProject.color}22, {selectedProject.color}08)">
        <div class="modal-title-wrap">
          <h2 class="modal-title">{selectedProject.title}</h2>
          <div class="modal-meta">
            <span class="modal-year">{selectedProject.year}</span>
            <span class="modal-status" class:done={selectedProject.status === 'Completato'}>
              {selectedProject.status}
            </span>
          </div>
        </div>
        <button class="modal-close" on:click={closeProject} aria-label="Chiudi">✕</button>
      </div>

      <div class="modal-body">
        <p class="modal-description">{selectedProject.description}</p>

        {#if selectedProject.tags?.length}
          <div class="modal-tags">
            {#each selectedProject.tags as tag}
              <span class="modal-tag" style="border-color: {selectedProject.color}55; color: {selectedProject.color}">{tag}</span>
            {/each}
          </div>
        {/if}

        {#if selectedProject.contenuti?.length}
          <div class="modal-section">
            <h3 class="modal-section-title">Contenuti trattati</h3>
            <ul class="modal-list">
              {#each selectedProject.contenuti as item}
                <li style="--dot: {selectedProject.color}">{item}</li>
              {/each}
            </ul>
          </div>
        {/if}

        {#if selectedProject.risorse?.length}
          <div class="modal-section">
            <h3 class="modal-section-title">Risorse</h3>
            <div class="modal-resources">
              {#each selectedProject.risorse as r}
                <span class="modal-resource">{r}</span>
              {/each}
            </div>
          </div>
        {/if}
      </div>

      {#if selectedProject.link}
        <div class="modal-footer">
          <a href={selectedProject.link} target="_blank" rel="noopener" class="modal-cta" style="background: {selectedProject.color}">
            Apri progetto →
          </a>
        </div>
      {/if}

    </div>
  </div>
{/if}

<!-- ── HERO ───────────────────────────────────────────────── -->
<div class="page-hero">
  <div class="page-hero-bg">
    <div class="hero-orb h-orb-1"></div>
    <div class="hero-orb h-orb-2"></div>
    <div class="grid-pattern"></div>
  </div>
  <div class="page-hero-content">
    <span class="tag fade-in" style="animation-delay:0.1s">// triennio formativo</span>
    <h1 class="page-title fade-in" style="animation-delay:0.2s">
      Educazione <span class="accent">Civica</span>
    </h1>
    <p class="page-subtitle fade-in" style="animation-delay:0.35s">
      Percorso trasversale che unisce Informatica, Storia e Diritto per formare cittadini consapevoli delle dinamiche sociali e digitali contemporanee.
    </p>
    <div class="page-hero-stats fade-in" style="animation-delay:0.5s">
      <div class="hs"><span class="hs-n">{featuredProjects.length}</span><span class="hs-l">Lavori prodotti</span></div>
      <div class="hs-sep"></div>
      <div class="hs"><span class="hs-n">3</span><span class="hs-l">Anni scolastici</span></div>
    </div>
  </div>
</div>

<!-- ── PROGETTI ───────────────────────────────────────────── -->
<section class="section" data-obs="elaborati">
  <div class="section-head" class:anim-in={visible['elaborati']}>
    <span class="tag">// portfolio lavori</span>
    <h2 class="section-title">Progetti & <span class="accent">Ricerche</span></h2>
    <p class="section-subtitle">Tutti i prodotti realizzati durante il percorso triennale</p>
    <div class="glow-line"></div>
  </div>

  <div class="projects-grid" class:anim-in={visible['elaborati']}>
    {#each featuredProjects as p, i}
      <!-- svelte-ignore a11y-click-events-have-key-events -->
      <div
        class="project-card-wrapper"
        role="button"
        tabindex="0"
        style="animation-delay: {i * 0.08}s"
        on:click={() => openProject(p)}
        on:keydown={(e) => e.key === 'Enter' && openProject(p)}
      >
        <!-- Card inline (non usa più il componente esterno) -->
        <div class="pcard" style="--c: {p.color}">
          <div class="pcard-top">
            {#if p.icon}<span class="pcard-icon">{p.icon}</span>{/if}
            <span class="pcard-year">{p.year}</span>
          </div>
          <h3 class="pcard-title">{p.title}</h3>
          <p class="pcard-desc">{p.description}</p>
          <div class="pcard-tags">
            {#each p.tags as t}
              <span class="pcard-tag">{t}</span>
            {/each}
          </div>
          <div class="pcard-footer">
            <span class="pcard-status" class:done={p.status === 'Completato'}>{p.status}</span>
            <span class="pcard-cta">Dettagli →</span>
          </div>
        </div>
      </div>
    {/each}
  </div>
</section>

<style>
  /* ── RESET / BASE ── */
  :global(body) { margin: 0; background: #080b12; color: #e2e8f0; font-family: 'Segoe UI', system-ui, sans-serif; }

  .accent { color: #38bdf8; }
  .tag {
    display: inline-block;
    font-size: 0.72rem;
    font-family: monospace;
    color: #38bdf8;
    border: 1px solid #38bdf822;
    padding: 0.25rem 0.75rem;
    border-radius: 999px;
    margin-bottom: 1rem;
    background: #38bdf808;
  }

  /* ── HERO ── */
  .page-hero {
    position: relative;
    padding: 6rem 2rem 4rem;
    text-align: center;
    overflow: hidden;
  }
  .page-hero-bg { position: absolute; inset: 0; pointer-events: none; }
  .hero-orb { position: absolute; border-radius: 50%; filter: blur(80px); }
  .h-orb-1 { width: 500px; height: 500px; background: radial-gradient(circle, rgba(56,189,248,0.1), transparent 70%); top: -150px; left: 10%; }
  .h-orb-2 { width: 400px; height: 400px; background: radial-gradient(circle, rgba(129,140,248,0.08), transparent 70%); bottom: -100px; right: 10%; }
  .grid-pattern { position: absolute; inset: 0; background-image: radial-gradient(circle, rgba(56,189,248,0.05) 1px, transparent 1px); background-size: 40px 40px; opacity: 0.6; }
  .page-hero-content { position: relative; z-index: 1; max-width: 800px; margin: 0 auto; }
  .page-title { font-size: clamp(2.5rem, 6vw, 4.5rem); font-weight: 900; letter-spacing: 0.03em; margin-bottom: 1.5rem; line-height: 1.1; }
  .page-subtitle { font-size: 1.1rem; color: #94a3b8; line-height: 1.75; max-width: 600px; margin: 0 auto 2.5rem; }
  .page-hero-stats { display: inline-flex; gap: 2rem; align-items: center; padding: 1rem 2rem; background: rgba(255,255,255,0.02); border: 1px solid rgba(255,255,255,0.08); border-radius: 1rem; backdrop-filter: blur(10px); }
  .hs { display: flex; flex-direction: column; align-items: center; }
  .hs-n { font-size: 1.5rem; font-weight: 700; color: #38bdf8; }
  .hs-l { font-size: 0.72rem; color: #64748b; font-family: monospace; }
  .hs-sep { width: 1px; height: 35px; background: rgba(255,255,255,0.08); }

  /* ── SECTION ── */
  .section { padding: 5rem 2rem; max-width: 1200px; margin: 0 auto; }
  .section-head { margin-bottom: 3rem; opacity: 0; transform: translateY(20px); transition: all 0.6s ease; }
  .section-head.anim-in { opacity: 1; transform: translateY(0); }
  .section-title { font-size: clamp(1.8rem, 4vw, 2.8rem); font-weight: 800; margin: 0.5rem 0 0.75rem; }
  .section-subtitle { color: #64748b; margin: 0; }
  .glow-line { width: 60px; height: 3px; background: linear-gradient(90deg, #38bdf8, #818cf8); border-radius: 2px; margin-top: 1rem; }

  /* ── GRID ── */
  .projects-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    gap: 1.25rem;
  }

  /* ── PROJECT CARD WRAPPER ── */
  .project-card-wrapper {
    cursor: pointer;
    opacity: 0;
    transform: translateY(20px);
    animation: fadeInUp 0.5s ease forwards;
    border-radius: 1rem;
    outline: none;
  }
  .project-card-wrapper:focus-visible .pcard {
    box-shadow: 0 0 0 2px var(--c, #38bdf8);
  }

  /* ── PCARD (inline card) ── */
  .pcard {
    background: #0f1520;
    border: 1px solid rgba(255,255,255,0.07);
    border-radius: 1rem;
    padding: 1.4rem;
    height: 100%;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    gap: 0.75rem;
    transition: border-color 0.2s, transform 0.2s, box-shadow 0.2s;
    border-top: 2px solid var(--c, #38bdf8);
  }
  .pcard:hover {
    border-color: var(--c, #38bdf8);
    transform: translateY(-3px);
    box-shadow: 0 8px 30px color-mix(in srgb, var(--c) 15%, transparent);
  }
  .pcard-top { display: flex; justify-content: space-between; align-items: center; }
  .pcard-icon { font-size: 1.8rem; line-height: 1; }
  .pcard-year { font-size: 0.7rem; font-family: monospace; color: #64748b; background: rgba(255,255,255,0.04); padding: 0.2rem 0.5rem; border-radius: 4px; }
  .pcard-title { font-size: 1.05rem; font-weight: 700; color: #f1f5f9; margin: 0; }
  .pcard-desc { font-size: 0.85rem; color: #94a3b8; line-height: 1.6; margin: 0; flex: 1; display: -webkit-box; -webkit-line-clamp: 3; -webkit-box-orient: vertical; overflow: hidden; }
  .pcard-tags { display: flex; flex-wrap: wrap; gap: 0.35rem; }
  .pcard-tag { font-size: 0.68rem; font-family: monospace; padding: 0.15rem 0.5rem; border-radius: 999px; background: rgba(255,255,255,0.05); color: #94a3b8; border: 1px solid rgba(255,255,255,0.08); }
  .pcard-footer { display: flex; justify-content: space-between; align-items: center; margin-top: auto; padding-top: 0.5rem; border-top: 1px solid rgba(255,255,255,0.05); }
  .pcard-status { font-size: 0.7rem; padding: 0.15rem 0.5rem; border-radius: 999px; background: rgba(255,255,255,0.05); color: #64748b; }
  .pcard-status.done { background: rgba(52,211,153,0.1); color: #34d399; }
  .pcard-cta { font-size: 0.75rem; color: var(--c, #38bdf8); font-weight: 600; }

  /* ── MODAL ── */
  .modal-overlay {
    position: fixed;
    inset: 0;
    z-index: 1000;
    background: rgba(0,0,0,0.8);
    backdrop-filter: blur(8px);
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 1rem;
    animation: fadeOverlay 0.2s ease;
  }

  @keyframes fadeOverlay { from { opacity: 0; } to { opacity: 1; } }

  .modal-card {
    background: #0d1117;
    border: 1px solid color-mix(in srgb, var(--accent) 40%, transparent);
    border-radius: 1.25rem;
    width: 100%;
    max-width: 560px;
    max-height: 88vh;
    overflow-y: auto;
    box-shadow: 0 0 80px color-mix(in srgb, var(--accent) 15%, transparent);
    animation: slideUp 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
  }

  @keyframes slideUp {
    from { opacity: 0; transform: translateY(28px) scale(0.96); }
    to   { opacity: 1; transform: translateY(0) scale(1); }
  }

  .modal-header {
    display: flex;
    align-items: center;
    gap: 1rem;
    padding: 1.5rem;
    border-bottom: 1px solid rgba(255,255,255,0.06);
    position: sticky;
    top: 0;
    backdrop-filter: blur(12px);
  }

  .modal-icon { font-size: 2.2rem; line-height: 1; flex-shrink: 0; }
  .modal-title-wrap { flex: 1; min-width: 0; }
  .modal-title { font-size: 1.3rem; font-weight: 700; margin: 0 0 0.3rem; color: #fff; }
  .modal-meta { display: flex; align-items: center; gap: 0.6rem; }
  .modal-year { font-size: 0.72rem; font-family: monospace; color: #64748b; }
  .modal-status { font-size: 0.68rem; padding: 0.15rem 0.5rem; border-radius: 999px; background: rgba(255,255,255,0.06); color: #64748b; }
  .modal-status.done { background: rgba(52,211,153,0.12); color: #34d399; }

  .modal-close {
    background: rgba(255,255,255,0.06);
    border: none;
    color: #aaa;
    width: 2rem;
    height: 2rem;
    border-radius: 50%;
    cursor: pointer;
    font-size: 0.85rem;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
    transition: background 0.15s, color 0.15s;
  }
  .modal-close:hover { background: rgba(255,255,255,0.12); color: #fff; }

  .modal-body { padding: 1.5rem; }
  .modal-description { color: #cbd5e1; line-height: 1.75; margin: 0 0 1.25rem; }

  .modal-tags { display: flex; flex-wrap: wrap; gap: 0.4rem; margin-bottom: 1.5rem; }
  .modal-tag { font-size: 0.72rem; padding: 0.2rem 0.6rem; border-radius: 999px; border: 1px solid; font-family: monospace; }

  .modal-section { margin-bottom: 1.25rem; }
  .modal-section-title { font-size: 0.72rem; font-family: monospace; text-transform: uppercase; letter-spacing: 0.08em; color: #64748b; margin: 0 0 0.75rem; }

  .modal-list { list-style: none; padding: 0; margin: 0; display: flex; flex-direction: column; gap: 0.5rem; }
  .modal-list li { padding-left: 1.25rem; position: relative; color: #cbd5e1; font-size: 0.9rem; line-height: 1.5; }
  .modal-list li::before { content: '▸'; position: absolute; left: 0; color: var(--dot, #38bdf8); }

  .modal-resources { display: flex; flex-wrap: wrap; gap: 0.5rem; }
  .modal-resource { font-size: 0.8rem; font-family: monospace; padding: 0.25rem 0.75rem; background: rgba(255,255,255,0.04); border: 1px solid rgba(255,255,255,0.08); border-radius: 0.4rem; color: #cbd5e1; }

  .modal-footer { padding: 1.25rem 1.5rem; border-top: 1px solid rgba(255,255,255,0.06); }
  .modal-cta { display: inline-block; padding: 0.6rem 1.5rem; border-radius: 0.6rem; color: #000; font-weight: 700; font-size: 0.88rem; text-decoration: none; transition: opacity 0.15s, transform 0.15s; }
  .modal-cta:hover { opacity: 0.85; transform: translateX(3px); }

  /* ── ANIMATIONS ── */
  @keyframes fadeInUp {
    from { opacity: 0; transform: translateY(20px); }
    to   { opacity: 1; transform: translateY(0); }
  }

  .fade-in { animation: fadeInUp 0.6s ease both; }

  /* ── RESPONSIVE ── */
  @media (max-width: 640px) {
    .projects-grid { grid-template-columns: 1fr; }
    .modal-card { max-height: 92vh; }
    .modal-header { padding: 1.1rem; }
    .modal-body { padding: 1.1rem; }
  }
</style>