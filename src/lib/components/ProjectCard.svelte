<script>
  let { 
    title = 'Titolo Progetto', 
    description = 'Descrizione del progetto placeholder.', 
    tags = ['Tag1', 'Tag2'],
    color = '#38bdf8',
    icon = '🖥️',
    link = '#',
    year = '2024',
    status = 'Completato'
  } = $props();
  // export let description = 'Descrizione del progetto placeholder.';
  // export let tags = ['Tag1', 'Tag2'];
  // export let color = '#38bdf8';
  // export let icon = '🖥️';
  // export let link = '#';
  // export let year = '2024';
  // export let status = 'Completato'; // 'In corso', 'Completato', 'Bozza'
</script>

<article class="card" style="--card-color: {color}">
  <div class="card-header">
    <span class="card-icon">{icon}</span>
    <div class="card-meta">
      <span class="card-year">{year}</span>
      <span class="card-status" data-status={status}>{status}</span>
    </div>
  </div>

  <div class="card-glow"></div>

  <h3 class="card-title">{title}</h3>
  <p class="card-desc">{description}</p>

  <div class="card-tags">
    {#each tags as tag}
      <span class="card-tag">{tag}</span>
    {/each}
  </div>

  <a href={link} class="card-link">
    <span>Esplora</span>
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
      <path d="M7 17L17 7M17 7H7M17 7v10"/>
    </svg>
  </a>
</article>

<style>
  .card {
    position: relative;
    background: var(--c-surface);
    border: 1px solid var(--c-border);
    border-radius: var(--radius-lg);
    padding: 1.75rem;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    overflow: hidden;
    transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
    cursor: pointer;
  }

  .card::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 2px;
    background: linear-gradient(90deg, transparent, var(--card-color), transparent);
    opacity: 1;
    transition: opacity var(--transition);
  }

  .card:hover {
    border-color: rgba(56, 189, 248, 0.3);
    transform: translateY(-6px);
    box-shadow: 0 20px 40px rgba(0,0,0,0.3), 0 0 30px rgba(56, 189, 248, 0.05);
  }

  .card:hover::before {
    opacity: 1;
  }

  .card-glow {
    position: absolute;
    top: -60px;
    right: -60px;
    width: 180px;
    height: 180px;
    background: radial-gradient(circle, var(--card-color) 0%, transparent 70%);
    opacity: 0;
    filter: blur(30px);
    transition: opacity 0.4s ease;
    pointer-events: none;
  }

  .card:hover .card-glow {
    opacity: 0.07;
  }

  .card-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .card-icon {
    font-size: 1.8rem;
    display: block;
    line-height: 1;
  }

  .card-meta {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    gap: 0.3rem;
  }

  .card-year {
    font-family: var(--f-mono);
    font-size: 0.7rem;
    color: var(--c-text-3);
    letter-spacing: 0.08em;
  }

  .card-status {
    font-family: var(--f-mono);
    font-size: 0.65rem;
    padding: 0.15rem 0.6rem;
    border-radius: var(--radius-full);
    letter-spacing: 0.06em;
  }

  .card-status[data-status="Completato"] {
    background: rgba(52, 211, 153, 0.1);
    color: var(--c-accent-3);
    border: 1px solid rgba(52, 211, 153, 0.25);
  }

  .card-status[data-status="In corso"] {
    background: rgba(251, 191, 36, 0.1);
    color: #fbbf24;
    border: 1px solid rgba(251, 191, 36, 0.25);
  }

  .card-status[data-status="Bozza"] {
    background: rgba(148, 163, 184, 0.1);
    color: var(--c-text-3);
    border: 1px solid rgba(148, 163, 184, 0.2);
  }

  .card-title {
    font-family: var(--f-display);
    font-size: 1rem;
    font-weight: 700;
    color: var(--c-text);
    letter-spacing: 0.04em;
    line-height: 1.3;
  }

  .card-desc {
    font-size: 0.875rem;
    color: var(--c-text-2);
    line-height: 1.65;
    flex: 1;
  }

  .card-tags {
    display: flex;
    flex-wrap: wrap;
    gap: 0.4rem;
  }

  .card-tag {
    font-family: var(--f-mono);
    font-size: 0.68rem;
    padding: 0.2rem 0.6rem;
    background: rgba(56, 189, 248, 0.07);
    border: 1px solid rgba(56, 189, 248, 0.15);
    border-radius: var(--radius-full);
    color: var(--c-text-3);
    letter-spacing: 0.05em;
  }

  .card-link {
    display: inline-flex;
    align-items: center;
    gap: 0.4rem;
    font-size: 0.82rem;
    font-weight: 600;
    color: var(--card-color);
    transition: gap var(--transition);
    margin-top: auto;
    letter-spacing: 0.03em;
  }

  .card-link:hover {
    gap: 0.7rem;
  }
</style>