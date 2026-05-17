<script>
    let {
        year = '2022/23',
        grade = 'Terza',
        title = 'Anno Scolastico',
        description = 'Descrizione dell\'anno scolastico.',
        highlights = [],
        accent = '#38bdf8',
        isLast = false,
    } = $props();
</script>

<div class="timeline-item">
  <!-- Line -->
  {#if !isLast}
    <div class="timeline-line" style="--accent: {accent}"></div>
  {/if}

  <!-- Dot -->
  <div class="timeline-dot" style="--accent: {accent}">
    <div class="dot-inner"></div>
    <div class="dot-pulse"></div>
  </div>

  <!-- Content -->
  <div class="timeline-card">
    <div class="timeline-header">
      <div class="timeline-grade" style="color: {accent}">{grade}</div>
      <div class="timeline-year">{year}</div>
    </div>

    <h3 class="timeline-title">{title}</h3>
    <p class="timeline-desc">{description}</p>

    {#if highlights.length}
      <ul class="timeline-highlights">
        {#each highlights as item}
          <li>
            <span class="highlight-dot" style="background: {accent}"></span>
            {item}
          </li>
        {/each}
      </ul>
    {/if}
  </div>
</div>

<style>
  .timeline-item {
    position: relative;
    display: grid;
    grid-template-columns: 24px 1fr;
    gap: 1.5rem;
    padding-bottom: 3rem;
  }

  .timeline-line {
    position: absolute;
    left: 11px;
    top: 28px;
    bottom: 0;
    width: 2px;
    background: linear-gradient(to bottom, var(--accent), transparent);
    opacity: 0.3;
  }

  .timeline-dot {
    position: relative;
    width: 24px;
    height: 24px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 0.2rem;
    flex-shrink: 0;
  }

  .dot-inner {
    width: 12px;
    height: 12px;
    background: var(--accent);
    border-radius: 50%;
    position: relative;
    z-index: 2;
    box-shadow: 0 0 12px var(--accent);
  }

  .dot-pulse {
    position: absolute;
    width: 24px;
    height: 24px;
    background: var(--accent);
    border-radius: 50%;
    opacity: 0.15;
    animation: dotPulse 2s ease-in-out infinite;
  }

  @keyframes dotPulse {
    0%, 100% { transform: scale(1); opacity: 0.15; }
    50% { transform: scale(1.5); opacity: 0; }
  }

  .timeline-card {
    background: var(--c-surface);
    border: 1px solid var(--c-border);
    border-radius: var(--radius-lg);
    padding: 1.5rem;
    transition: border-color var(--transition), box-shadow var(--transition), transform var(--transition);
  }

  .timeline-card:hover {
    border-color: rgba(56, 189, 248, 0.3);
    box-shadow: 0 8px 30px rgba(0,0,0,0.2);
    transform: translateX(4px);
  }

  .timeline-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 0.6rem;
  }

  .timeline-grade {
    font-family: var(--f-display);
    font-size: 0.75rem;
    font-weight: 700;
    letter-spacing: 0.1em;
    text-transform: uppercase;
  }

  .timeline-year {
    font-family: var(--f-mono);
    font-size: 0.72rem;
    color: var(--c-text-3);
    padding: 0.15rem 0.5rem;
    background: var(--c-surface-2);
    border-radius: var(--radius-full);
  }

  .timeline-title {
    font-size: 1.05rem;
    font-weight: 600;
    color: var(--c-text);
    margin-bottom: 0.5rem;
    line-height: 1.3;
  }

  .timeline-desc {
    font-size: 0.875rem;
    color: var(--c-text-2);
    line-height: 1.65;
    margin-bottom: 1rem;
  }

  .timeline-highlights {
    list-style: none;
    display: flex;
    flex-direction: column;
    gap: 0.45rem;
  }

  .timeline-highlights li {
    display: flex;
    align-items: center;
    gap: 0.6rem;
    font-size: 0.82rem;
    color: var(--c-text-2);
  }

  .highlight-dot {
    width: 5px;
    height: 5px;
    border-radius: 50%;
    flex-shrink: 0;
    opacity: 0.8;
  }
</style>