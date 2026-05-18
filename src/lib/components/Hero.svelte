<script>
  import { onMount } from 'svelte';
  import { base } from '$app/paths';

  let visible = false;
  let canvas;

  onMount(() => {
    visible = true;
    initParticles();
  });

  function initParticles() {
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let particles = [];
    let animId;

    function resize() {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    }

    class Particle {
      constructor() {
        this.reset();
      }
      reset() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.vx = (Math.random() - 0.5) * 0.3;
        this.vy = (Math.random() - 0.5) * 0.3;
        this.r = Math.random() * 1.5 + 0.5;
        this.alpha = Math.random() * 0.5 + 0.1;
      }
      update() {
        this.x += this.vx;
        this.y += this.vy;
        if (this.x < 0 || this.x > canvas.width || this.y < 0 || this.y > canvas.height) this.reset();
      }
      draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(56, 189, 248, ${this.alpha})`;
        ctx.fill();
      }
    }

    function connect() {
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const d = Math.sqrt(dx * dx + dy * dy);
          if (d < 120) {
            ctx.beginPath();
            ctx.strokeStyle = `rgba(56, 189, 248, ${0.07 * (1 - d / 120)})`;
            ctx.lineWidth = 0.5;
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.stroke();
          }
        }
      }
    }

    function init() {
      resize();
      particles = Array.from({ length: 60 }, () => new Particle());
    }

    function animate() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach(p => { p.update(); p.draw(); });
      connect();
      animId = requestAnimationFrame(animate);
    }

    init();
    animate();
    window.addEventListener('resize', init);

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener('resize', init);
    };
  }

  const techStack = ['HTML/CSS', 'JavaScript', 'Python', 'SQL', 'Linux', 'Git'];
</script>

<section class="hero">
  <canvas bind:this={canvas} class="hero-canvas"></canvas>

  <!-- Decorative orbs -->
  <div class="orb orb-1"></div>
  <div class="orb orb-2"></div>
  <div class="orb orb-3"></div>

  <div class="hero-content" class:visible>

    <!-- Name -->
    <h1 class="hero-title fade-in" style="animation-delay:0.2s">
      <br />
      <span class="title-name">Lorenzo Andruetto</span>
      <span class="title-cursor">|</span>
    </h1>

    <!-- Subtitle -->
    <p class="hero-subtitle fade-in" style="animation-delay:0.35s">
      Studente di <span class="hero-accent">Informatica</span> appassionato di tecnologia, coding e innovazione digitale.
      Dalla terza alla quinta superiore, un percorso di crescita verso la <span class="hero-accent-2">maturità</span>.
    </p>

    <!-- Tech stack -->
    <div class="tech-stack fade-in" style="animation-delay:0.5s">
      <span class="tech-label">// stack tecnologico</span>
      <div class="tech-tags">
        {#each techStack as tech, i}
          <span class="tech-tag" style="animation-delay: {0.55 + i * 0.07}s">{tech}</span>
        {/each}
      </div>
    </div>

    <!-- CTA buttons -->
    <div class="hero-ctas fade-in" style="animation-delay:0.7s">
      <a href={`${base}/educazione-civica`} class="btn-primary">
        <span>Educazione Civica</span>
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
          <path d="M5 12h14M12 5l7 7-7 7"/>
        </svg>
      </a>
    </div>

    <!-- Stats -->
    <!-- <div class="hero-stats fade-in" style="animation-delay:0.85s">
      <div class="stat">
        <span class="stat-num">3</span>
        <span class="stat-label">Anni di percorso</span>
      </div>
      <div class="stat-divider"></div>
      <div class="stat">
        <span class="stat-num">12+</span>
        <span class="stat-label">Materie studiate</span>
      </div>
      <div class="stat-divider"></div>
      <div class="stat">
        <span class="stat-num">∞</span>
        <span class="stat-label">Passione per il codice</span>
      </div>
    </div>
  </div> -->

  <!-- Scroll hint -->
  <div class="scroll-hint" class:visible>
    <span class="scroll-text">scroll</span>
    <span class="scroll-line"></span>
  </div>
</section>

<style>
  .hero {
    position: relative;
    min-height: calc(100vh - var(--nav-h));
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    padding: 4rem 2rem;
  }

  .hero-canvas {
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
    opacity: 0.6;
  }

  /* Orbs */
  .orb {
    position: absolute;
    border-radius: 50%;
    filter: blur(80px);
    pointer-events: none;
    animation: orbFloat 8s ease-in-out infinite;
  }

  .orb-1 {
    width: 500px;
    height: 500px;
    background: radial-gradient(circle, rgba(56, 189, 248, 0.12), transparent 70%);
    top: -150px;
    left: -100px;
    animation-delay: 0s;
  }

  .orb-2 {
    width: 400px;
    height: 400px;
    background: radial-gradient(circle, rgba(129, 140, 248, 0.1), transparent 70%);
    bottom: -100px;
    right: -50px;
    animation-delay: -3s;
  }

  .orb-3 {
    width: 300px;
    height: 300px;
    background: radial-gradient(circle, rgba(52, 211, 153, 0.08), transparent 70%);
    top: 40%;
    right: 20%;
    animation-delay: -5s;
  }

  @keyframes orbFloat {
    0%, 100% { transform: translateY(0) scale(1); }
    33% { transform: translateY(-20px) scale(1.05); }
    66% { transform: translateY(10px) scale(0.97); }
  }

  /* Content */
  .hero-content {
    position: relative;
    z-index: 1;
    max-width: 800px;
    text-align: center;
  }

  .hero-content .fade-in {
    opacity: 0;
  }

  .hero-content.visible .fade-in {
    animation: fadeInUp 0.8s cubic-bezier(0.4, 0, 0.2, 1) forwards;
  }

  /* Badge */
  .hero-badge {
    display: inline-flex;
    align-items: center;
    gap: 0.6rem;
    padding: 0.5rem 1.2rem;
    background: rgba(56, 189, 248, 0.07);
    border: 1px solid rgba(56, 189, 248, 0.2);
    border-radius: var(--radius-full);
    font-family: var(--f-mono);
    font-size: 0.78rem;
    color: var(--c-accent);
    letter-spacing: 0.05em;
    margin-bottom: 1.8rem;
  }

  .badge-dot {
    width: 7px;
    height: 7px;
    background: var(--c-accent-3);
    border-radius: 50%;
    animation: blink 2s ease-in-out infinite;
    flex-shrink: 0;
  }

  @keyframes blink {
    0%, 100% { opacity: 1; box-shadow: 0 0 6px var(--c-accent-3); }
    50% { opacity: 0.4; box-shadow: none; }
  }

  /* Title */
  .hero-title {
    font-family: var(--f-display);
    font-size: clamp(2.4rem, 7vw, 5rem);
    font-weight: 900;
    line-height: 1.1;
    letter-spacing: 0.02em;
    margin-bottom: 1.5rem;
  }

  .title-hello {
    font-size: 0.45em;
    font-weight: 400;
    color: var(--c-text-2);
    font-family: var(--f-body);
    letter-spacing: 0.05em;
    display: block;
    margin-bottom: 0.2em;
  }

  .title-name {
    background: linear-gradient(135deg, #fff 0%, var(--c-accent) 50%, var(--c-accent-2) 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }

  .title-cursor {
    color: var(--c-accent);
    animation: blink 1.2s step-end infinite;
    font-weight: 200;
  }

  /* Subtitle */
  .hero-subtitle {
    font-size: clamp(1rem, 2vw, 1.15rem);
    color: var(--c-text-2);
    line-height: 1.75;
    max-width: 580px;
    margin: 0 auto 2rem;
  }

  .hero-accent {
    color: var(--c-accent);
    font-weight: 500;
  }

  .hero-accent-2 {
    color: var(--c-accent-2);
    font-weight: 500;
  }

  /* Tech stack */
  .tech-stack {
    margin-bottom: 2.5rem;
  }

  .tech-label {
    display: block;
    font-family: var(--f-mono);
    font-size: 0.75rem;
    color: var(--c-text-3);
    margin-bottom: 0.75rem;
    letter-spacing: 0.08em;
  }

  .tech-tags {
    display: flex;
    flex-wrap: wrap;
    gap: 0.5rem;
    justify-content: center;
  }

  .tech-tag {
    padding: 0.3rem 0.85rem;
    background: var(--c-surface);
    border: 1px solid var(--c-border);
    border-radius: var(--radius-full);
    font-family: var(--f-mono);
    font-size: 0.75rem;
    color: var(--c-text-2);
    transition: all var(--transition);
    opacity: 0;
    animation: fadeInUp 0.5s ease forwards;
  }

  .tech-tag:hover {
    border-color: var(--c-accent);
    color: var(--c-accent);
    background: rgba(56, 189, 248, 0.05);
    transform: translateY(-2px);
  }

  /* CTAs */
  .hero-ctas {
    display: flex;
    gap: 1rem;
    justify-content: center;
    flex-wrap: wrap;
    margin-bottom: 3rem;
  }

  .btn-primary {
    display: inline-flex;
    align-items: center;
    gap: 0.6rem;
    padding: 0.8rem 1.8rem;
    background: linear-gradient(135deg, var(--c-accent), var(--c-accent-2));
    color: var(--c-bg);
    font-weight: 600;
    font-size: 0.95rem;
    border-radius: var(--radius-full);
    transition: all var(--transition);
    letter-spacing: 0.02em;
    position: relative;
    overflow: hidden;
  }

  .btn-primary::before {
    content: '';
    position: absolute;
    inset: 0;
    background: linear-gradient(135deg, var(--c-accent-2), var(--c-accent));
    opacity: 0;
    transition: opacity var(--transition);
  }

  .btn-primary:hover {
    transform: translateY(-3px);
    box-shadow: 0 12px 32px rgba(56, 189, 248, 0.4);
  }

  .btn-primary:hover::before {
    opacity: 1;
  }

  .btn-primary span, .btn-primary svg {
    position: relative;
    z-index: 1;
  }

  .btn-primary:hover svg {
    transform: translateX(3px);
  }

  .btn-primary svg {
    transition: transform var(--transition);
  }

  .btn-secondary {
    display: inline-flex;
    align-items: center;
    padding: 0.8rem 1.8rem;
    background: transparent;
    color: var(--c-text);
    font-weight: 500;
    font-size: 0.95rem;
    border-radius: var(--radius-full);
    border: 1px solid var(--c-border);
    transition: all var(--transition);
  }

  .btn-secondary:hover {
    border-color: var(--c-accent);
    color: var(--c-accent);
    background: rgba(56, 189, 248, 0.05);
    transform: translateY(-3px);
  }

  /* Stats */
  .hero-stats {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 2rem;
    padding: 1.5rem 2rem;
    background: rgba(255,255,255,0.02);
    border: 1px solid var(--c-border);
    border-radius: var(--radius-lg);
    backdrop-filter: blur(10px);
    flex-wrap: wrap;
  }

  .stat {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0.2rem;
  }

  .stat-num {
    font-family: var(--f-display);
    font-size: 1.8rem;
    font-weight: 700;
    background: linear-gradient(135deg, var(--c-accent), var(--c-accent-2));
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }

  .stat-label {
    font-size: 0.75rem;
    color: var(--c-text-3);
    font-family: var(--f-mono);
  }

  .stat-divider {
    width: 1px;
    height: 40px;
    background: var(--c-border);
  }

  /* Scroll hint */
  .scroll-hint {
    position: absolute;
    bottom: 2rem;
    left: 50%;
    transform: translateX(-50%);
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0.5rem;
    opacity: 0;
    transition: opacity 1s ease 1.5s;
    z-index: 1;
  }

  .scroll-hint.visible {
    opacity: 1;
  }

  .scroll-text {
    font-family: var(--f-mono);
    font-size: 0.65rem;
    color: var(--c-text-3);
    letter-spacing: 0.15em;
    text-transform: uppercase;
  }

  .scroll-line {
    width: 1px;
    height: 40px;
    background: linear-gradient(to bottom, var(--c-accent), transparent);
    animation: scrollPulse 2s ease-in-out infinite;
  }

  @keyframes scrollPulse {
    0%, 100% { transform: scaleY(1); opacity: 1; }
    50% { transform: scaleY(0.5); opacity: 0.5; }
  }

  @media (max-width: 640px) {
    .stat-divider { display: none; }
    .hero-stats { gap: 1.5rem; }
  }
</style>