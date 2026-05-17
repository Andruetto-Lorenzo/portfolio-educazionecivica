<script>
  import ProjectCard from '$lib/components/ProjectCard.svelte';
  import TimelineItem from '$lib/components/TimelineItem.svelte';
  import { onMount } from 'svelte';

  let visible = {};

  onMount(() => {
    const obs = new IntersectionObserver(
      entries => entries.forEach(e => { if (e.isIntersecting) visible[e.target.dataset.obs] = true; }),
      { threshold: 0.1 }
    );
    document.querySelectorAll('[data-obs]').forEach(el => obs.observe(el));
    return () => obs.disconnect();
  });

  const temi = [
    {
      id: 1,
      titolo: 'Cittadinanza Digitale',
      anno: 'Terza Superiore',
      icon: '🌐',
      color: '#38bdf8',
      sottotitolo: 'Diritti e responsabilità online',
      descrizione: `In questo modulo abbiamo esplorato cosa significa essere cittadini nell'era digitale. 
      Abbiamo analizzato i diritti fondamentali online, il contrasto alle fake news, 
      l'identità digitale e il comportamento responsabile in rete.`,
      contenuti: [
        'Identità digitale e reputazione online',
        'Fake news: riconoscerle e contrastarle',
        'Netiquette e comportamento in rete',
        'Cyberbullismo: prevenzione e difesa',
        'Diritto all\'oblio e privacy digitale'
      ],
      risorse: ['AGCOM', 'Safer Internet Day', 'Digital Compass EU']
    },
    {
      id: 2,
      titolo: 'Privacy & GDPR',
      anno: 'Terza Superiore',
      icon: '🔐',
      color: '#fb7185',
      sottotitolo: 'Protezione dei dati nell\'era digitale',
      descrizione: `Studio del Regolamento Europeo sulla protezione dei dati (GDPR 2016/679). 
      Analisi dei diritti degli utenti, obblighi dei titolari del trattamento e 
      implicazioni pratiche per le aziende tech.`,
      contenuti: [
        'Principi fondamentali del GDPR',
        'Diritti dell\'interessato (accesso, rettifica, cancellazione)',
        'Consenso informato e cookie policy',
        'Data breach: notifica e conseguenze',
        'Il ruolo del Garante Privacy italiano'
      ],
      risorse: ['Garante Privacy.it', 'GDPR.eu', 'Regolamento 2016/679']
    },
    {
      id: 3,
      titolo: 'Sviluppo Sostenibile',
      anno: 'Quarta Superiore',
      icon: '♻️',
      color: '#34d399',
      sottotitolo: 'Agenda 2030 e tecnologia verde',
      descrizione: `Approfondimento degli Obiettivi di Sviluppo Sostenibile dell'ONU (SDGs). 
      Focus sul ruolo della tecnologia informatica nel contrasto al cambiamento climatico 
      e nella promozione di un futuro sostenibile.`,
      contenuti: [
        'I 17 Obiettivi dell\'Agenda 2030',
        'Green IT: cloud sostenibile ed efficienza energetica',
        'Smart city e mobilità intelligente',
        'Economia circolare e riciclo tecnologico',
        'Carbon footprint digitale'
      ],
      risorse: ['UN SDGs', 'Green Digital Europe', 'Climate Trace']
    },
    {
      id: 4,
      titolo: 'Costituzione & Democrazia',
      anno: 'Quarta Superiore',
      icon: '⚖️',
      color: '#818cf8',
      sottotitolo: 'I fondamenti dello Stato italiano',
      descrizione: `Studio della Costituzione della Repubblica Italiana: i principi fondamentali,
      i diritti e doveri dei cittadini, l'organizzazione dello Stato e il funzionamento 
      delle istituzioni democratiche.`,
      contenuti: [
        'Principi fondamentali (art. 1-12)',
        'Diritti e libertà fondamentali',
        'Organi costituzionali: Parlamento, Governo, Presidente',
        'La magistratura e il sistema giudiziario',
        'Referendum e partecipazione democratica'
      ],
      risorse: ['Costituzione.it', 'Parlamento.it', 'Quirinale.it']
    },
    {
      id: 5,
      titolo: 'Etica dell\'Intelligenza Artificiale',
      anno: 'Quinta Superiore',
      icon: '🤖',
      color: '#fbbf24',
      sottotitolo: 'IA: opportunità, rischi e responsabilità',
      descrizione: `Esplorazione delle implicazioni etiche, sociali ed economiche dell'Intelligenza 
      Artificiale. Analisi dell'AI Act europeo, dei bias algoritmici e del futuro 
      del lavoro nell'era dell'automazione.`,
      contenuti: [
        'Cos\'è l\'IA: machine learning e reti neurali',
        'AI Act Europeo: categorie di rischio',
        'Bias algoritmici e discriminazione automatizzata',
        'Il futuro del lavoro: automazione e nuove professioni',
        'IA generativa: opportunità e rischi'
      ],
      risorse: ['AI Act EU', 'Alan Turing Institute', 'Partnership on AI']
    },
    {
      id: 6,
      titolo: 'Unione Europea & Istituzioni',
      anno: 'Quinta Superiore',
      icon: '🏛️',
      color: '#a78bfa',
      sottotitolo: 'Il progetto europeo e le sue sfide',
      descrizione: `Studio dell'Unione Europea: storia, valori fondanti, istituzioni e funzionamento.
      Analisi delle politiche digitali europee e del ruolo dell'Italia nel contesto comunitario.`,
      contenuti: [
        'Storia e valori fondanti dell\'UE',
        'Parlamento Europeo, Commissione e Consiglio',
        'Mercato unico digitale (DSA, DMA)',
        'Politica estera e difesa comune',
        'Euro e governance economica europea'
      ],
      risorse: ['Europa.eu', 'Europarl.europa.eu', 'Consilium.europa.eu']
    }
  ];

  const timelineItems = [
    {
      year: '2022/23',
      grade: 'Terza',
      title: 'Fondamenta della Cittadinanza',
      description: 'Primo approccio all\'Educazione Civica: diritti fondamentali, cittadinanza digitale e basi della Costituzione italiana.',
      highlights: ['Cittadinanza Digitale', 'Privacy & GDPR', 'Fake News & Media Literacy'],
      accent: '#38bdf8'
    },
    {
      year: '2023/24',
      grade: 'Quarta',
      title: 'Sostenibilità e Democrazia',
      description: 'Approfondimento degli obiettivi globali e delle istituzioni democratiche. Focus sull\'Agenda 2030 e la Costituzione.',
      highlights: ['Sviluppo Sostenibile', 'Costituzione Italiana', 'Diritti Umani Internazionali'],
      accent: '#34d399'
    },
    {
      year: '2024/25',
      grade: 'Quinta',
      title: 'Tecnologia, Etica e Europa',
      description: 'Anno conclusivo: grandi temi contemporanei come l\'Intelligenza Artificiale, l\'etica digitale e le istituzioni europee.',
      highlights: ['Etica dell\'Intelligenza Artificiale', 'AI Act Europeo', 'Unione Europea'],
      accent: '#818cf8',
      isLast: true
    }
  ];

  const progetti = [
    {
      title: 'Presentazione: Fake News nell\'era social',
      description: 'Ricerca e presentazione approfondita sui meccanismi di diffusione delle fake news sui social media e le strategie di contrasto.',
      tags: ['Media Literacy', 'Social Media', 'Ricerca'],
      icon: '📢',
      color: '#38bdf8',
      year: '2023',
      status: 'Completato',
      link: '#'
    },
    {
      title: 'Elaborato: Agenda 2030 e Green IT',
      description: 'Analisi del contributo del settore informatico agli SDGs, con focus su cloud computing sostenibile e riduzione dell\'impronta carbonica digitale.',
      tags: ['Sostenibilità', 'Green IT', 'SDGs'],
      icon: '🌱',
      color: '#34d399',
      year: '2024',
      status: 'Completato',
      link: '#'
    },
    {
      title: 'Debate: Pro e Contro dell\'IA',
      description: 'Attività di debate strutturato sui benefici e rischi dell\'intelligenza artificiale nella società contemporanea.',
      tags: ['IA', 'Etica', 'Debate'],
      icon: '🤖',
      color: '#fbbf24',
      year: '2025',
      status: 'In corso',
      link: '#'
    }
  ];

  let activeTema = null;
</script>

<svelte:head>
  <title>Educazione Civica | Portfolio</title>
</svelte:head>

<!-- PAGE HERO -->
<div class="page-hero">
  <div class="page-hero-bg">
    <div class="hero-orb h-orb-1"></div>
    <div class="hero-orb h-orb-2"></div>
    <div class="grid-pattern"></div>
  </div>
  <div class="page-hero-content">
    <span class="tag fade-in" style="animation-delay:0.1s">// materia principale del triennio</span>
    <h1 class="page-title fade-in" style="animation-delay:0.2s">
      Educazione <span class="accent">Civica</span>
    </h1>
    <p class="page-subtitle fade-in" style="animation-delay:0.35s">
      Un percorso triennale tra cittadinanza, democrazia, sostenibilità e tecnologia.
      Sei grandi temi per diventare cittadini consapevoli del mondo digitale.
    </p>
    <div class="page-hero-stats fade-in" style="animation-delay:0.5s">
      <div class="hs"><span class="hs-n">6</span><span class="hs-l">Temi trattati</span></div>
      <div class="hs-sep"></div>
      <div class="hs"><span class="hs-n">3</span><span class="hs-l">Anni di studio</span></div>
      <div class="hs-sep"></div>
      <div class="hs"><span class="hs-n">3+</span><span class="hs-l">Elaborati</span></div>
    </div>
  </div>
</div>

<!-- TEMI TRATTATI -->
<section class="section" data-obs="temi">
  <div class="section-head" class:anim-in={visible['temi']}>
    <span class="tag">// argomenti</span>
    <h2 class="section-title">Temi <span class="accent">Trattati</span></h2>
    <p class="section-subtitle">Clicca su un tema per espandere i dettagli</p>
    <div class="glow-line"></div>
  </div>

  <div class="temi-grid" class:anim-in={visible['temi']}>
    {#each temi as tema, i}
      <div
        class="tema-card"
        class:expanded={activeTema === tema.id}
        style="--tc: {tema.color}; animation-delay: {i * 0.08}s"
        on:click={() => activeTema = activeTema === tema.id ? null : tema.id}
        on:keypress={e => e.key === 'Enter' && (activeTema = activeTema === tema.id ? null : tema.id)}
        role="button"
        tabindex="0"
        aria-expanded={activeTema === tema.id}
      >
        <div class="tema-header">
          <div class="tema-icon-wrap">
            <span class="tema-icon">{tema.icon}</span>
          </div>
          <div class="tema-title-group">
            <span class="tema-anno">{tema.anno}</span>
            <h3 class="tema-title">{tema.titolo}</h3>
            <p class="tema-sotto">{tema.sottotitolo}</p>
          </div>
          <div class="tema-chevron" class:rotated={activeTema === tema.id}>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M6 9l6 6 6-6"/>
            </svg>
          </div>
        </div>

        {#if activeTema === tema.id}
          <div class="tema-body">
            <p class="tema-desc">{tema.descrizione}</p>

            <div class="tema-contenuti">
              <h4 class="tema-section-title">Contenuti affrontati</h4>
              <ul>
                {#each tema.contenuti as c}
                  <li>
                    <span class="c-bullet" style="background: {tema.color}"></span>
                    {c}
                  </li>
                {/each}
              </ul>
            </div>

            <div class="tema-risorse">
              <h4 class="tema-section-title">Fonti & risorse</h4>
              <div class="risorse-tags">
                {#each tema.risorse as r}
                  <span class="risorsa-tag" style="color: {tema.color}; border-color: {tema.color}40; background: {tema.color}10">{r}</span>
                {/each}
              </div>
            </div>
          </div>
        {/if}
      </div>
    {/each}
  </div>
</section>

<!-- TIMELINE -->
<section class="section timeline-section" data-obs="timeline">
  <div class="section-head" class:anim-in={visible['timeline']}>
    <span class="tag">// percorso triennale</span>
    <h2 class="section-title">Timeline del <span class="accent">Percorso</span></h2>
    <p class="section-subtitle">Anno per anno, il cammino in Educazione Civica</p>
    <div class="glow-line"></div>
  </div>

  <div class="timeline-wrap" class:anim-in={visible['timeline']}>
    {#each timelineItems as item, i}
      <TimelineItem {...item} isLast={i === timelineItems.length - 1} />
    {/each}
  </div>
</section>

<!-- ELABORATI & PROGETTI -->
<section class="section" data-obs="elaborati">
  <div class="section-head" class:anim-in={visible['elaborati']}>
    <span class="tag">// lavori prodotti</span>
    <h2 class="section-title">Elaborati & <span class="accent">Presentazioni</span></h2>
    <p class="section-subtitle">I prodotti realizzati durante il percorso di Ed. Civica</p>
    <div class="glow-line"></div>
  </div>

  <div class="projects-grid" class:anim-in={visible['elaborati']}>
    {#each progetti as p, i}
      <div style="animation-delay: {i * 0.1}s; opacity: 0; animation: fadeInUp 0.6s ease {i*0.1}s forwards"
           class:run={visible['elaborati']}>
        <ProjectCard {...p} />
      </div>
    {/each}
  </div>
</section>

<!-- PLACEHOLDER SECTION -->
<section class="placeholder-section" data-obs="placeholder">
  <div class="section" class:anim-in={visible['placeholder']}>
    <div class="placeholder-card">
      <div class="ph-icon">📝</div>
      <h3 class="ph-title">Sezione Personalizzabile</h3>
      <p class="ph-desc">
        Questo spazio è riservato per ulteriori contenuti, riflessioni personali, 
        immagini del percorso o approfondimenti specifici da aggiungere.
      </p>
      <div class="ph-grid">
        {#each ['Riflessioni personali', 'Foto e materiali', 'Video e risorse', 'Note aggiuntive'] as item}
          <div class="ph-item">
            <span class="ph-dot"></span>
            <span>{item}</span>
          </div>
        {/each}
      </div>
      <span class="ph-badge">// placeholder — da modificare</span>
    </div>
  </div>
</section>

<style>
  /* Page hero */
  .page-hero {
    position: relative;
    padding: 6rem 2rem 4rem;
    text-align: center;
    overflow: hidden;
  }

  .page-hero-bg {
    position: absolute;
    inset: 0;
    pointer-events: none;
  }

  .hero-orb {
    position: absolute;
    border-radius: 50%;
    filter: blur(80px);
  }

  .h-orb-1 {
    width: 500px;
    height: 500px;
    background: radial-gradient(circle, rgba(56,189,248,0.1), transparent 70%);
    top: -150px;
    left: 10%;
  }

  .h-orb-2 {
    width: 400px;
    height: 400px;
    background: radial-gradient(circle, rgba(129,140,248,0.08), transparent 70%);
    bottom: -100px;
    right: 10%;
  }

  .grid-pattern {
    position: absolute;
    inset: 0;
    background-image: radial-gradient(circle, rgba(56,189,248,0.05) 1px, transparent 1px);
    background-size: 40px 40px;
    opacity: 0.6;
  }

  .page-hero-content {
    position: relative;
    z-index: 1;
    max-width: 700px;
    margin: 0 auto;
  }

  .page-hero-content .tag {
    display: inline-flex;
    margin-bottom: 1.5rem;
  }

  .page-title {
    font-family: var(--f-display);
    font-size: clamp(2.5rem, 6vw, 4.5rem);
    font-weight: 900;
    letter-spacing: 0.03em;
    margin-bottom: 1.5rem;
    line-height: 1.1;
  }

  .page-subtitle {
    font-size: 1.05rem;
    color: var(--c-text-2);
    line-height: 1.75;
    max-width: 550px;
    margin: 0 auto 2.5rem;
  }

  .page-hero-stats {
    display: inline-flex;
    gap: 2rem;
    align-items: center;
    padding: 1rem 2rem;
    background: rgba(255,255,255,0.02);
    border: 1px solid var(--c-border);
    border-radius: var(--radius-lg);
    backdrop-filter: blur(10px);
  }

  .hs {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0.15rem;
  }

  .hs-n {
    font-family: var(--f-display);
    font-size: 1.5rem;
    font-weight: 700;
    background: linear-gradient(135deg, var(--c-accent), var(--c-accent-2));
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }

  .hs-l {
    font-size: 0.72rem;
    color: var(--c-text-3);
    font-family: var(--f-mono);
  }

  .hs-sep {
    width: 1px;
    height: 35px;
    background: var(--c-border);
  }

  /* Section heads */
  .section-head {
    margin-bottom: 2.5rem;
    opacity: 0;
    transform: translateY(20px);
    transition: all 0.6s ease;
  }

  .section-head.anim-in {
    opacity: 1;
    transform: translateY(0);
  }

  .section-head .tag { display: inline-flex; margin-bottom: 0.8rem; }

  /* Temi grid */
  .temi-grid {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    opacity: 0;
    transition: opacity 0.4s ease 0.2s;
  }

  .temi-grid.anim-in {
    opacity: 1;
  }

  .temi-grid.anim-in .tema-card {
    animation: fadeInUp 0.5s ease forwards;
  }

  .tema-card {
    opacity: 0;
    background: var(--c-surface);
    border: 1px solid var(--c-border);
    border-radius: var(--radius-lg);
    overflow: hidden;
    cursor: pointer;
    transition: border-color var(--transition), box-shadow var(--transition);
  }

  .tema-card:hover,
  .tema-card.expanded {
    border-color: var(--tc);
    box-shadow: 0 0 20px rgba(0,0,0,0.15), 0 0 0 1px var(--tc)20;
  }

  .tema-header {
    display: flex;
    align-items: center;
    gap: 1.25rem;
    padding: 1.25rem 1.5rem;
  }

  .tema-icon-wrap {
    width: 52px;
    height: 52px;
    background: rgba(255,255,255,0.03);
    border: 1px solid var(--c-border);
    border-radius: var(--radius);
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
    transition: background var(--transition), border-color var(--transition);
  }

  .tema-card:hover .tema-icon-wrap,
  .tema-card.expanded .tema-icon-wrap {
    background: rgba(56,189,248,0.05);
    border-color: var(--tc);
  }

  .tema-icon {
    font-size: 1.6rem;
    line-height: 1;
  }

  .tema-title-group {
    flex: 1;
  }

  .tema-anno {
    font-family: var(--f-mono);
    font-size: 0.7rem;
    color: var(--tc);
    letter-spacing: 0.08em;
    display: block;
    margin-bottom: 0.2rem;
  }

  .tema-title {
    font-size: 1rem;
    font-weight: 600;
    color: var(--c-text);
    line-height: 1.2;
    margin-bottom: 0.15rem;
  }

  .tema-sotto {
    font-size: 0.8rem;
    color: var(--c-text-3);
  }

  .tema-chevron {
    color: var(--c-text-3);
    transition: transform 0.3s ease;
    flex-shrink: 0;
  }

  .tema-chevron.rotated {
    transform: rotate(180deg);
    color: var(--tc);
  }

  .tema-body {
    padding: 0 1.5rem 1.5rem;
    display: flex;
    flex-direction: column;
    gap: 1.25rem;
    border-top: 1px solid var(--c-border);
    margin: 0 1.5rem;
  }

  .tema-desc {
    font-size: 0.875rem;
    color: var(--c-text-2);
    line-height: 1.7;
    padding-top: 1.25rem;
  }

  .tema-section-title {
    font-family: var(--f-mono);
    font-size: 0.7rem;
    color: var(--c-text-3);
    letter-spacing: 0.1em;
    text-transform: uppercase;
    margin-bottom: 0.75rem;
  }

  .tema-contenuti ul {
    list-style: none;
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
  }

  .tema-contenuti li {
    display: flex;
    align-items: center;
    gap: 0.6rem;
    font-size: 0.85rem;
    color: var(--c-text-2);
  }

  .c-bullet {
    width: 6px;
    height: 6px;
    border-radius: 50%;
    flex-shrink: 0;
    opacity: 0.8;
  }

  .risorse-tags {
    display: flex;
    flex-wrap: wrap;
    gap: 0.5rem;
  }

  .risorsa-tag {
    font-family: var(--f-mono);
    font-size: 0.72rem;
    padding: 0.25rem 0.75rem;
    border-radius: var(--radius-full);
    border: 1px solid;
    letter-spacing: 0.04em;
  }

  /* Timeline */
  .timeline-section {
    background: transparent;
  }

  .timeline-wrap {
    max-width: 640px;
    opacity: 0;
    transform: translateY(20px);
    transition: all 0.6s ease 0.2s;
  }

  .timeline-wrap.anim-in {
    opacity: 1;
    transform: translateY(0);
  }

  /* Projects */
  .projects-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
    gap: 1.5rem;
  }

  .run {
    animation-play-state: running !important;
  }

  /* Placeholder */
  .placeholder-section {
    background: var(--c-bg-2);
    border-top: 1px solid var(--c-border);
  }

  .anim-in .placeholder-card,
  .placeholder-card {
    border: 2px dashed var(--c-border);
    border-radius: var(--radius-lg);
    padding: 3rem;
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;
    transition: border-color var(--transition);
  }

  .placeholder-card:hover {
    border-color: rgba(56,189,248,0.3);
  }

  .ph-icon {
    font-size: 3rem;
    line-height: 1;
  }

  .ph-title {
    font-family: var(--f-display);
    font-size: 1.3rem;
    font-weight: 700;
    color: var(--c-text);
  }

  .ph-desc {
    font-size: 0.9rem;
    color: var(--c-text-2);
    max-width: 440px;
    line-height: 1.7;
  }

  .ph-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 0.75rem;
    margin-top: 0.5rem;
  }

  .ph-item {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    font-size: 0.82rem;
    color: var(--c-text-3);
    font-family: var(--f-mono);
  }

  .ph-dot {
    width: 6px;
    height: 6px;
    background: var(--c-accent);
    border-radius: 50%;
    opacity: 0.5;
  }

  .ph-badge {
    font-family: var(--f-mono);
    font-size: 0.72rem;
    color: var(--c-text-3);
    padding: 0.3rem 0.8rem;
    border: 1px solid var(--c-border);
    border-radius: var(--radius-full);
    margin-top: 0.5rem;
  }

  @keyframes fadeInUp {
    from { opacity: 0; transform: translateY(20px); }
    to { opacity: 1; transform: translateY(0); }
  }

  @media (max-width: 640px) {
    .page-hero-stats {
      gap: 1rem;
      padding: 0.75rem 1.2rem;
    }

    .ph-grid {
      grid-template-columns: 1fr;
    }
  }
</style>