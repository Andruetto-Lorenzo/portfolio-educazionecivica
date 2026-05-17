<script>
  import TimelineItem from '$lib/components/TimelineItem.svelte';
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

  const anni = [
    {
      year: '2022/23',
      grade: 'Terza',
      title: 'Il Punto di Partenza',
      description: 'L\'inizio del triennio di informatica. Fondamenta solide in programmazione, algoritmi, architettura dei computer e primi passi nel mondo del web development.',
      highlights: [
        'Algoritmi e strutture dati fondamentali',
        'HTML5, CSS3 e prime pagine web',
        'Basi della programmazione in Python',
        'Architettura dei calcolatori',
        'Sistemi operativi: Linux base',
        'Ed. Civica: Cittadinanza Digitale & GDPR'
      ],
      accent: '#38bdf8'
    },
    {
      year: '2023/24',
      grade: 'Quarta',
      title: 'Approfondimento e Specializzazione',
      description: 'Anno di consolidamento: programmazione avanzata, database relazionali, reti di calcolatori e prime esperienze con framework moderni.',
      highlights: [
        'JavaScript avanzato e DOM manipulation',
        'SQL e gestione database relazionali',
        'Reti di calcolatori: TCP/IP, HTTP, DNS',
        'PHP e programmazione lato server',
        'Stage aziendale (alternanza scuola-lavoro)',
        'Ed. Civica: Sostenibilità & Costituzione'
      ],
      accent: '#34d399'
    },
    {
      year: '2024/25',
      grade: 'Quinta',
      title: 'Verso la Maturità',
      description: 'L\'anno conclusivo: tecnologie avanzate, progetto di alternanza, preparazione all\'esame di stato e riflessione sul percorso compiuto.',
      highlights: [
        'Sviluppo full-stack con framework moderni',
        'Progettazione di sistemi distribuiti',
        'Cybersecurity e principi di sicurezza',
        'Intelligenza Artificiale e Machine Learning',
        'Progetto di diploma: [Titolo TBD]',
        'Ed. Civica: Etica IA & Istituzioni EU'
      ],
      accent: '#818cf8',
      isLast: true
    }
  ];

  const materie = [
    { nome: 'Informatica', desc: 'Programmazione, algoritmi, strutture dati, sviluppo software', icon: '💻', color: '#38bdf8' },
    { nome: 'Sistemi & Reti', desc: 'Architetture di rete, protocolli, sicurezza informatica', icon: '🌐', color: '#34d399' },
    { nome: 'Tecnologie Web', desc: 'Frontend, backend, database, API RESTful', icon: '🖥️', color: '#fbbf24' },
    { nome: 'Matematica', desc: 'Analisi, algebra lineare, statistica e matematica discreta', icon: '📐', color: '#818cf8' },
    { nome: 'Inglese', desc: 'Technical English, documentazione tecnica, comunicazione professionale', icon: '🇬🇧', color: '#a78bfa' },
    { nome: 'Educazione Civica', desc: 'Cittadinanza, democrazia, etica digitale e sostenibilità', icon: '⚖️', color: '#fb7185' }
  ];
</script>

<svelte:head>
  <title>Percorso | Portfolio</title>
</svelte:head>

<div class="page-hero">
  <div class="decor-orb d1"></div>
  <div class="decor-orb d2"></div>
  <div class="hero-inner">
    <span class="tag fade-in" style="animation-delay:0.1s">// il mio cammino</span>
    <h1 class="page-title fade-in" style="animation-delay:0.2s">
      Il Mio <span class="accent">Percorso</span>
    </h1>
    <p class="page-sub fade-in" style="animation-delay:0.3s">
      Tre anni di studio, crescita e scoperta nel mondo dell'informatica. Dalla terza alla quinta, ogni anno un passo avanti.
    </p>
  </div>
</div>

<!-- TIMELINE ANNI -->
<section class="section" data-obs="timeline">
  <div class="section-head" class:anim-in={visible['timeline']}>
    <span class="tag">// cronologia</span>
    <h2 class="section-title">Triennio in <span class="accent">Dettaglio</span></h2>
    <p class="section-subtitle">Anno per anno, le tappe fondamentali del percorso</p>
    <div class="glow-line"></div>
  </div>

  <div class="timeline-container" class:anim-in={visible['timeline']}>
    {#each anni as anno, i}
      <TimelineItem {...anno} />
    {/each}
  </div>
</section>

<!-- MATERIE -->
<section class="section materie-section" data-obs="materie">
  <div class="section-head" class:anim-in={visible['materie']}>
    <span class="tag">// curriculum</span>
    <h2 class="section-title">Materie <span class="accent">Studiate</span></h2>
    <p class="section-subtitle">Le discipline del piano di studi</p>
    <div class="glow-line"></div>
  </div>

  <div class="materie-grid" class:anim-in={visible['materie']}>
    {#each materie as m, i}
      <div class="materia-card" style="--mc: {m.color}; animation-delay: {i * 0.08}s">
        <span class="materia-icon">{m.icon}</span>
        <h3 class="materia-nome">{m.nome}</h3>
        <p class="materia-desc">{m.desc}</p>
      </div>
    {/each}
  </div>
</section>

<!-- STAGE / ALTERNANZA -->
<section class="stage-section" data-obs="stage">
  <div class="section" class:anim-in={visible['stage']}>
    <div class="section-head" class:anim-in={visible['stage']}>
      <span class="tag">// esperienza pratica</span>
      <h2 class="section-title">Stage & <span class="accent">PCTO</span></h2>
      <p class="section-subtitle">Percorsi per le Competenze Trasversali e l'Orientamento</p>
      <div class="glow-line"></div>
    </div>

    <div class="stage-cards">
      <div class="stage-card">
        <div class="stage-header">
          <span class="stage-icon">🏢</span>
          <div>
            <h3 class="stage-azienda">[Nome Azienda]</h3>
            <span class="stage-periodo">Giugno — Luglio 2024 · 4ª</span>
          </div>
          <span class="stage-badge">Completato</span>
        </div>
        <p class="stage-desc">
          Descrizione dell'esperienza di stage. Attività svolte, competenze acquisite,
          tecnologie utilizzate e valore aggiunto del percorso in azienda.
        </p>
        <div class="stage-skills">
          <span class="s-skill">JavaScript</span>
          <span class="s-skill">Git</span>
          <span class="s-skill">Team working</span>
          <span class="s-skill">[Tecnologia]</span>
        </div>
      </div>

      <div class="stage-card stage-placeholder">
        <div class="stage-header">
          <span class="stage-icon">📝</span>
          <div>
            <h3 class="stage-azienda">[Altra esperienza]</h3>
            <span class="stage-periodo">Da inserire</span>
          </div>
          <span class="stage-badge stage-badge-todo">Placeholder</span>
        </div>
        <p class="stage-desc">
          Spazio per aggiungere ulteriori esperienze formative, certificazioni,
          corsi online, hackathon o altri percorsi extrascolastici.
        </p>
      </div>
    </div>
  </div>
</section>

<style>
  .page-hero {
    position: relative;
    padding: 6rem 2rem 4rem;
    text-align: center;
    overflow: hidden;
  }

  .decor-orb {
    position: absolute;
    border-radius: 50%;
    filter: blur(80px);
    pointer-events: none;
  }

  .d1 {
    width: 450px; height: 450px;
    background: radial-gradient(circle, rgba(52,211,153,0.08), transparent 70%);
    top: -100px; left: 5%;
  }

  .d2 {
    width: 350px; height: 350px;
    background: radial-gradient(circle, rgba(129,140,248,0.1), transparent 70%);
    bottom: 0; right: 10%;
  }

  .hero-inner { position: relative; z-index: 1; }
  .hero-inner .tag { display: inline-flex; margin-bottom: 1rem; }

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
    max-width: 520px;
    margin: 0 auto;
    line-height: 1.7;
  }

  .section-head {
    margin-bottom: 2.5rem;
    opacity: 0;
    transform: translateY(20px);
    transition: all 0.6s ease;
  }

  .section-head.anim-in { opacity: 1; transform: translateY(0); }
  .section-head .tag { display: inline-flex; margin-bottom: 0.8rem; }

  .timeline-container {
    max-width: 640px;
    opacity: 0;
    transform: translateY(20px);
    transition: all 0.6s ease 0.2s;
  }

  .timeline-container.anim-in {
    opacity: 1;
    transform: translateY(0);
  }

  /* Materie */
  .materie-section {
    background: var(--c-bg-2);
    border-top: 1px solid var(--c-border);
    border-bottom: 1px solid var(--c-border);
  }

  .materie-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));
    gap: 1rem;
    opacity: 0;
    transition: opacity 0.4s ease 0.2s;
  }

  .materie-grid.anim-in { opacity: 1; }
  .materie-grid.anim-in .materia-card {
    animation: fadeInUp 0.5s ease forwards;
  }

  .materia-card {
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

  .materia-card::before {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    height: 2px;
    background: var(--mc);
    opacity: 0;
    transition: opacity var(--transition);
  }

  .materia-card:hover {
    border-color: rgba(255,255,255,0.1);
    transform: translateY(-4px);
    box-shadow: 0 12px 30px rgba(0,0,0,0.2);
  }

  .materia-card:hover::before { opacity: 1; }

  .materia-icon { font-size: 1.8rem; line-height: 1; }
  .materia-nome { font-size: 0.95rem; font-weight: 600; color: var(--c-text); }
  .materia-desc { font-size: 0.8rem; color: var(--c-text-2); line-height: 1.55; }

  /* Stage */
  .stage-section { }

  .stage-cards {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
    gap: 1.5rem;
  }

  .stage-card {
    background: var(--c-surface);
    border: 1px solid var(--c-border);
    border-radius: var(--radius-lg);
    padding: 1.75rem;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    transition: all var(--transition);
  }

  .stage-card:hover {
    border-color: rgba(56,189,248,0.25);
    box-shadow: 0 8px 30px rgba(0,0,0,0.2);
  }

  .stage-placeholder {
    border-style: dashed;
  }

  .stage-header {
    display: flex;
    align-items: center;
    gap: 1rem;
  }

  .stage-icon { font-size: 2rem; line-height: 1; flex-shrink: 0; }

  .stage-azienda {
    font-size: 1rem;
    font-weight: 600;
    color: var(--c-text);
    line-height: 1.2;
  }

  .stage-periodo {
    font-family: var(--f-mono);
    font-size: 0.72rem;
    color: var(--c-text-3);
  }

  .stage-badge {
    margin-left: auto;
    flex-shrink: 0;
    padding: 0.2rem 0.7rem;
    background: rgba(52,211,153,0.1);
    border: 1px solid rgba(52,211,153,0.3);
    border-radius: var(--radius-full);
    font-family: var(--f-mono);
    font-size: 0.68rem;
    color: #34d399;
  }

  .stage-badge-todo {
    background: rgba(148,163,184,0.1);
    border-color: rgba(148,163,184,0.2);
    color: var(--c-text-3);
  }

  .stage-desc {
    font-size: 0.875rem;
    color: var(--c-text-2);
    line-height: 1.7;
  }

  .stage-skills {
    display: flex;
    flex-wrap: wrap;
    gap: 0.4rem;
  }

  .s-skill {
    font-family: var(--f-mono);
    font-size: 0.7rem;
    padding: 0.2rem 0.6rem;
    background: rgba(56,189,248,0.07);
    border: 1px solid rgba(56,189,248,0.15);
    border-radius: var(--radius-full);
    color: var(--c-text-3);
  }

  @keyframes fadeInUp {
    from { opacity: 0; transform: translateY(18px); }
    to { opacity: 1; transform: translateY(0); }
  }
</style>