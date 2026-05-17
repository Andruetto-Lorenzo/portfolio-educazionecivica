<script>
  import Navbar from '$lib/components/Navbar.svelte';
  import Footer from '$lib/components/Footer.svelte';
  import { onMount } from 'svelte';

  onMount(() => {
    document.documentElement.setAttribute('data-loaded', 'true');
  });
</script>

<svelte:head>
  <title>Portfolio | Studente Informatico</title>
  <meta name="description" content="Portfolio scolastico di uno studente di informatica - percorso dalla terza alla quinta superiore" />
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="" />
  <link href="https://fonts.googleapis.com/css2?family=Orbitron:wght@400;600;700;900&family=DM+Sans:ital,opsz,wght@0,9..40,300;0,9..40,400;0,9..40,500;1,9..40,300&family=JetBrains+Mono:wght@300;400;500&display=swap" rel="stylesheet" />
</svelte:head>

<div class="app">
  <Navbar />
  <main>
    <slot />
  </main>
  <Footer />
</div>

<style>
  :global(*), :global(*::before), :global(*::after) {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  :global(:root) {
    --c-bg: #050810;
    --c-bg-2: #090d1a;
    --c-bg-3: #0e1428;
    --c-surface: #111827;
    --c-surface-2: #1a2235;
    --c-border: rgba(99, 179, 237, 0.12);
    --c-border-glow: rgba(99, 179, 237, 0.4);

    --c-accent: #38bdf8;
    --c-accent-2: #818cf8;
    --c-accent-3: #34d399;
    --c-accent-4: #fb7185;
    --c-accent-glow: rgba(56, 189, 248, 0.35);

    --c-text: #e2e8f0;
    --c-text-2: #94a3b8;
    --c-text-3: #64748b;

    --f-display: 'Orbitron', monospace;
    --f-body: 'DM Sans', sans-serif;
    --f-mono: 'JetBrains Mono', monospace;

    --nav-h: 72px;
    --radius: 12px;
    --radius-lg: 20px;
    --radius-full: 9999px;

    --transition: 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    --transition-slow: 0.6s cubic-bezier(0.4, 0, 0.2, 1);
  }

  :global(html) {
    scroll-behavior: smooth;
    overflow-x: hidden;
  }

  :global(body) {
    background-color: var(--c-bg);
    color: var(--c-text);
    font-family: var(--f-body);
    font-size: 16px;
    line-height: 1.7;
    overflow-x: hidden;
  }

  :global(a) {
    color: inherit;
    text-decoration: none;
  }

  :global(img) {
    max-width: 100%;
    display: block;
  }

  :global(::-webkit-scrollbar) {
    width: 6px;
  }

  :global(::-webkit-scrollbar-track) {
    background: var(--c-bg);
  }

  :global(::-webkit-scrollbar-thumb) {
    background: var(--c-accent);
    border-radius: 99px;
    opacity: 0.5;
  }

  :global(::selection) {
    background: rgba(56, 189, 248, 0.3);
    color: var(--c-accent);
  }

  .app {
    min-height: 100vh;
    display: flex;
    flex-direction: column;
  }

  main {
    flex: 1;
    padding-top: var(--nav-h);
  }

  /* Global section styles */
  :global(.section) {
    padding: 6rem 2rem;
    max-width: 1200px;
    margin: 0 auto;
  }

  :global(.section-title) {
    font-family: var(--f-display);
    font-size: clamp(1.6rem, 4vw, 2.8rem);
    font-weight: 700;
    color: var(--c-text);
    letter-spacing: 0.05em;
    margin-bottom: 0.5rem;
  }

  :global(.section-subtitle) {
    font-size: 1rem;
    color: var(--c-text-2);
    font-family: var(--f-mono);
    margin-bottom: 3.5rem;
    letter-spacing: 0.02em;
  }

  :global(.accent) {
    color: var(--c-accent);
  }

  :global(.accent-2) {
    color: var(--c-accent-2);
  }

  :global(.tag) {
    display: inline-flex;
    align-items: center;
    gap: 0.4rem;
    padding: 0.3rem 0.85rem;
    background: rgba(56, 189, 248, 0.1);
    border: 1px solid rgba(56, 189, 248, 0.25);
    border-radius: var(--radius-full);
    font-family: var(--f-mono);
    font-size: 0.75rem;
    color: var(--c-accent);
    letter-spacing: 0.05em;
  }

  :global(.glow-line) {
    width: 60px;
    height: 3px;
    background: linear-gradient(90deg, var(--c-accent), var(--c-accent-2));
    border-radius: 99px;
    margin-bottom: 2.5rem;
    box-shadow: 0 0 12px var(--c-accent-glow);
  }

  /* Fade-in animation utility */
  :global(.fade-in) {
    opacity: 0;
    transform: translateY(30px);
    animation: fadeInUp 0.7s ease forwards;
  }

  @keyframes fadeInUp {
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  /* Grid dots background */
  :global(.grid-bg) {
    background-image:
      radial-gradient(circle, rgba(56, 189, 248, 0.08) 1px, transparent 1px);
    background-size: 40px 40px;
  }
</style>