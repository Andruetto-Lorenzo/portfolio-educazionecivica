<script>
  import { onMount } from 'svelte';
  let visible = {};

  onMount(() => {
    const obs = new IntersectionObserver(
      e => e.forEach(en => { if (en.isIntersecting) visible[en.target.dataset.obs] = true; }),
      { threshold: 0.1 }
    );
    document.querySelectorAll('[data-obs]').forEach(el => obs.observe(el));
    return () => obs.disconnect();
  });

  const interessi = [
    { icon: '💻', label: 'Programmazione', desc: 'Web dev, scripting e problem solving algoritmico' },
    { icon: '🎮', label: 'Gaming & Game Dev', desc: 'Appassionato di videogiochi e sviluppo indie' },
    { icon: '🤖', label: 'Intelligenza Artificiale', desc: 'Curiosità per ML, LLM e l\'etica dell\'IA' },
    { icon: '🔐', label: 'Cybersecurity', desc: 'CTF, sicurezza informatica e hacking etico' },
    { icon: '📚', label: 'Open Source', desc: 'Contribuire e imparare dalla community' },
    { icon: '🎵', label: 'Musica & Creatività', desc: 'Ascolto, produzione e arte digitale' }
  ];

  const materie = [
    { nome: 'Informatica', voto: 9, colore: '#38bdf8' },
    { nome: 'Matematica', voto: 8, colore: '#818cf8' },
    { nome: 'Sistemi & Reti', voto: 8, colore: '#34d399' },
    { nome: 'Tecnologie Web', voto: 9, colore: '#fbbf24' },
    { nome: 'Ed. Civica', voto: 9, colore: '#fb7185' },
    { nome: 'Inglese', voto: 7, colore: '#a78bfa' }
  ];
</script>

<svelte:head>
  <title>Chi Sono | Portfolio</title>
</svelte:head>

<div class="page-hero">
  <div class="hero-decor">
    <div class="decor-orb d1"></div>
    <div class="decor-orb d2"></div>
  </div>
  <div class="page-hero-inner">
    <span class="tag fade-in" style="animation-delay:0.1s">// about me</span>
    <h1 class="page-title fade-in" style="animation-delay:0.2s">
      Chi <span class="accent">Sono</span>
    </h1>
    <p class="page-sub fade-in" style="animation-delay:0.3s">
      Studente, curioso, appassionato di tecnologia. Benvenuto nel mio percorso.
    </p>
  </div>
</div>

<!-- PROFILO -->
<section class="section" data-obs="profilo">
  <div class="profilo-grid" class:anim-in={visible['profilo']}>
    <div class="avatar-wrap">
      <div class="avatar-placeholder">
        <span class="avatar-icon">👤</span>
        <span class="avatar-label">// inserisci foto</span>
      </div>
      <div class="avatar-badges">
        <span class="a-badge" style="--bc: #38bdf8">Classe 5ª</span>
        <span class="a-badge" style="--bc: #34d399">Informatica</span>
        <span class="a-badge" style="--bc: #818cf8">2025</span>
      </div>
    </div>

    <div class="profilo-info">
      <span class="tag" style="margin-bottom:0.8rem; display:inline-flex">// profilo studente</span>
      <h2 class="section-title">Mario <span class="accent">Rossi</span></h2>
      <div class="glow-line"></div>

      <p class="profilo-text">
        Sono uno studente di quinta superiore presso l'Istituto Tecnico / Liceo Scientifico 
        indirizzo Informatica di [Città]. Il mio percorso scolastico mi ha portato ad 
        appassionarmi sempre di più al mondo del software, delle reti e dell'innovazione tecnologica.
      </p>
      <p class="profilo-text">
        In questi tre anni ho imparato non solo a programmare, ma a pensare come un informatico: 
        scomponendo i problemi, cercando soluzioni eleganti e collaborando con i compagni su 
        progetti che simulano il mondo reale del lavoro.
      </p>

      <div class="info-grid">
        {#each [
          { label: 'Nome', value: 'Mario Rossi' },
          { label: 'Istituto', value: '[Nome Istituto]' },
          { label: 'Indirizzo', value: 'Informatica e Telecomunicazioni' },
          { label: 'Anno', value: '2024/25 — Quinta' },
          { label: 'Email', value: 'studente@email.com' },
          { label: 'Città', value: '[La tua città]' }
        ] as info}
          <div class="info-item">
            <span class="info-label">{info.label}</span>
            <span class="info-val">{info.value}</span>
          </div>
        {/each}
      </div>
    </div>
  </div>
</section>

<!-- INTERESSI -->
<section class="section interests-wrap" data-obs="interessi">
  <div class="section-head" class:anim-in={visible['interessi']}>
    <span class="tag">// passioni</span>
    <h2 class="section-title">Interessi & <span class="accent">Passioni</span></h2>
    <div class="glow-line"></div>
  </div>

  <div class="interessi-grid" class:anim-in={visible['interessi']}>
    {#each interessi as int, i}
      <div class="int-card" style="animation-delay: {i * 0.08}s">
        <span class="int-icon">{int.icon}</span>
        <strong class="int-label">{int.label}</strong>
        <p class="int-desc">{int.desc}</p>
      </div>
    {/each}
  </div>
</section>

<!-- VOTI / MATERIE -->
<section class="section voti-section" data-obs="voti">
  <div class="section-head" class:anim-in={visible['voti']}>
    <span class="tag">// andamento scolastico</span>
    <h2 class="section-title">Materie & <span class="accent">Valutazioni</span></h2>
    <p class="section-subtitle">Performance nelle materie principali (dati placeholder)</p>
    <div class="glow-line"></div>
  </div>

  <div class="voti-grid" class:anim-in={visible['voti']}>
    {#each materie as m, i}
      <div class="voto-card" style="animation-delay: {i*0.08}s; --vc: {m.colore}">
        <div class="voto-header">
          <span class="voto-nome">{m.nome}</span>
          <span class="voto-num">{m.voto}/10</span>
        </div>
        <div class="voto-bar">
          <div
            class="voto-fill"
            style="--w: {m.voto * 10}%; --vc: {m.colore}"
            class:animate={visible['voti']}
          ></div>
        </div>
      </div>
    {/each}
  </div>
</section>

<style>
  .page-hero {
    position: relative;
    padding: 6rem 2rem 4rem;
    text-align: center;
    overflow: hidden;
  }

  .hero-decor { position: absolute; inset: 0; pointer-events: none; }

  .decor-orb {
    position: absolute;
    border-radius: 50%;
    filter: blur(80px);
  }

  .d1 {
    width: 400px; height: 400px;
    background: radial-gradient(circle, rgba(56,189,248,0.1), transparent 70%);
    top: -100px; right: 10%;
  }

  .d2 {
    width: 300px; height: 300px;
    background: radial-gradient(circle, rgba(129,140,248,0.08), transparent 70%);
    bottom: -50px; left: 5%;
  }

  .page-hero-inner { position: relative; z-index: 1; }

  .page-hero-inner .tag { display: inline-flex; margin-bottom: 1rem; }

  .page-title {
    font-family: var(--f-display);
    font-size: clamp(2.5rem, 6vw, 4.5rem);
    font-weight: 900;
    letter-spacing: 0.04em;
    margin-bottom: 1rem;
  }

  .page-sub {
    font-size: 1rem;
    color: var(--c-text-2);
  }

  /* Profilo */
  .profilo-grid {
    display: grid;
    grid-template-columns: 300px 1fr;
    gap: 4rem;
    align-items: start;
    opacity: 0;
    transform: translateY(20px);
    transition: all 0.6s ease;
  }

  .profilo-grid.anim-in {
    opacity: 1;
    transform: translateY(0);
  }

  .avatar-wrap {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;
  }

  .avatar-placeholder {
    width: 220px;
    height: 220px;
    background: var(--c-surface);
    border: 2px dashed rgba(56,189,248,0.3);
    border-radius: 50%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;
    transition: border-color var(--transition);
  }

  .avatar-placeholder:hover {
    border-color: var(--c-accent);
  }

  .avatar-icon { font-size: 4rem; line-height: 1; }

  .avatar-label {
    font-family: var(--f-mono);
    font-size: 0.7rem;
    color: var(--c-text-3);
  }

  .avatar-badges {
    display: flex;
    flex-wrap: wrap;
    gap: 0.4rem;
    justify-content: center;
  }

  .a-badge {
    padding: 0.2rem 0.7rem;
    background: rgba(255,255,255,0.03);
    border: 1px solid var(--bc);
    border-radius: var(--radius-full);
    font-family: var(--f-mono);
    font-size: 0.7rem;
    color: var(--bc);
  }

  .profilo-text {
    color: var(--c-text-2);
    font-size: 0.925rem;
    line-height: 1.8;
    margin-bottom: 0.75rem;
  }

  .info-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 0.75rem;
    margin-top: 1.5rem;
    padding: 1.5rem;
    background: var(--c-surface);
    border: 1px solid var(--c-border);
    border-radius: var(--radius-lg);
  }

  .info-item {
    display: flex;
    flex-direction: column;
    gap: 0.15rem;
  }

  .info-label {
    font-family: var(--f-mono);
    font-size: 0.68rem;
    color: var(--c-text-3);
    letter-spacing: 0.08em;
    text-transform: uppercase;
  }

  .info-val {
    font-size: 0.875rem;
    color: var(--c-text);
    font-weight: 500;
  }

  /* Interessi */
  .interests-wrap {
    background: var(--c-bg-2);
    border-top: 1px solid var(--c-border);
    border-bottom: 1px solid var(--c-border);
  }

  .section-head {
    margin-bottom: 2.5rem;
    opacity: 0;
    transform: translateY(20px);
    transition: all 0.6s ease;
  }

  .section-head.anim-in { opacity: 1; transform: translateY(0); }
  .section-head .tag { display: inline-flex; margin-bottom: 0.8rem; }

  .interessi-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
    gap: 1rem;
    opacity: 0;
    transition: opacity 0.4s ease 0.2s;
  }

  .interessi-grid.anim-in { opacity: 1; }
  .interessi-grid.anim-in .int-card {
    animation: fadeInUp 0.5s ease forwards;
  }

  .int-card {
    opacity: 0;
    background: var(--c-surface);
    border: 1px solid var(--c-border);
    border-radius: var(--radius-lg);
    padding: 1.5rem;
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    transition: all var(--transition);
  }

  .int-card:hover {
    border-color: rgba(56,189,248,0.3);
    transform: translateY(-4px);
    background: var(--c-surface-2);
  }

  .int-icon { font-size: 1.8rem; line-height: 1; }
  .int-label { font-size: 0.9rem; font-weight: 600; color: var(--c-text); }
  .int-desc { font-size: 0.8rem; color: var(--c-text-2); line-height: 1.55; }

  /* Voti */
  .voti-section { }

  .voti-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
    gap: 1rem;
    opacity: 0;
    transition: opacity 0.4s ease 0.2s;
  }

  .voti-grid.anim-in { opacity: 1; }
  .voti-grid.anim-in .voto-card {
    animation: fadeInUp 0.5s ease forwards;
  }

  .voto-card {
    opacity: 0;
    background: var(--c-surface);
    border: 1px solid var(--c-border);
    border-radius: var(--radius);
    padding: 1.25rem;
    transition: all var(--transition);
  }

  .voto-card:hover {
    border-color: var(--vc);
    box-shadow: 0 4px 20px rgba(0,0,0,0.15);
  }

  .voto-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 0.75rem;
  }

  .voto-nome {
    font-size: 0.9rem;
    font-weight: 600;
    color: var(--c-text);
  }

  .voto-num {
    font-family: var(--f-display);
    font-size: 1rem;
    font-weight: 700;
    color: var(--vc);
  }

  .voto-bar {
    height: 5px;
    background: var(--c-surface-2);
    border-radius: 99px;
    overflow: hidden;
  }

  .voto-fill {
    height: 100%;
    width: 0;
    background: linear-gradient(90deg, var(--vc), color-mix(in srgb, var(--vc) 70%, #fff));
    border-radius: 99px;
    box-shadow: 0 0 8px var(--vc);
  }

  .voto-fill.animate {
    animation: growBar 1s cubic-bezier(0.4,0,0.2,1) forwards;
  }

  @keyframes growBar {
    to { width: var(--w); }
  }

  @keyframes fadeInUp {
    from { opacity: 0; transform: translateY(18px); }
    to { opacity: 1; transform: translateY(0); }
  }

  @media (max-width: 900px) {
    .profilo-grid {
      grid-template-columns: 1fr;
    }

    .avatar-wrap {
      flex-direction: row;
      align-items: center;
    }
  }

  @media (max-width: 480px) {
    .avatar-wrap { flex-direction: column; }
    .info-grid { grid-template-columns: 1fr; }
  }
</style>