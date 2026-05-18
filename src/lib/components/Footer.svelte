<script>
  const socials = [
    {
      name: 'GitHub',
      href: 'https://github.com/Andruetto-Lorenzo',
      icon: `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/></svg>`
    }
      // },
    // {
    //   name: 'LinkedIn',
    //   href: 'https://linkedin.com',
    //   icon: `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>`
    // },
  ];

  const year = new Date().getFullYear();
</script>

<footer class="footer">
  <div class="footer-glow"></div>
  <div class="footer-inner">
    <div class="footer-grid">
      <!-- Brand -->
      <div class="footer-brand">
        <div class="footer-logo">
          <span class="logo-bracket">[</span>
          <span>PORTFOLIO</span>
          <span class="logo-bracket">]</span>
        </div>
        <p class="footer-desc">
          Un percorso di crescita, curiosità e passione per la tecnologia. Dalla terza superiore alla maturità.
        </p>
      </div>

      <!-- Nav links -->
      <div class="footer-nav">
        <h4 class="footer-nav-title">Sezioni</h4>
        <ul>
          <li><a href="/">Home</a></li>
          <li><a href="/chi-sono">Chi Sono</a></li>
          <li><a href="/educazione-civica">Ed. Civica</a></li>
          <li><a href="/percorso">Percorso</a></li>
          <li><a href="/progetti">Progetti</a></li>
          <li><a href="/contatti">Contatti</a></li>
        </ul>
      </div>

      <!-- Contact -->
      <div class="footer-contact">
        <h4 class="footer-nav-title">Contatti</h4>
        <p class="footer-email">lorenzo.andruetto@istitutoagnelli.it</p>
        <div class="socials">
          {#each socials as social}
            <a
              href={social.href}
              class="social-link"
              title={social.name}
              target="_blank"
              rel="noopener noreferrer"
            >
              {@html social.icon}
            </a>
          {/each}
        </div>
      </div>
    </div>

    <!-- Motivational quote -->
    <div class="footer-quote">
      <div class="quote-line"></div>
      <blockquote>
        "Il codice che scrivi oggi è la fondamenta del mondo di domani."
      </blockquote>
      <div class="quote-line"></div>
    </div>

    <!-- Bottom bar -->
    <div class="footer-bottom">
      <span class="footer-copy">© {year} Portfolio Studente — Tutti i diritti riservati</span>
      <span class="footer-made">
        <span class="footer-mono">crafted with</span>
        <span class="footer-heart">♥</span>
        <span class="footer-mono">SvelteKit</span>
      </span>
    </div>
  </div>

  <!-- Animated particles -->
  <div class="footer-particles">
    {#each Array(8) as _, i}
      <span class="particle" style="--i:{i}"></span>
    {/each}
  </div>
</footer>

<style>
  .footer {
    position: relative;
    background: var(--c-bg-2);
    border-top: 1px solid var(--c-border);
    overflow: hidden;
    margin-top: 4rem;
  }

  .footer-glow {
    position: absolute;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    width: 600px;
    height: 1px;
    background: linear-gradient(90deg, transparent, var(--c-accent), var(--c-accent-2), transparent);
    filter: blur(1px);
  }

  .footer-inner {
    max-width: 1200px;
    margin: 0 auto;
    padding: 4rem 2rem 2rem;
    position: relative;
    z-index: 1;
  }

  .footer-grid {
    display: grid;
    grid-template-columns: 2fr 1fr 1fr;
    gap: 3rem;
    padding-bottom: 3rem;
    border-bottom: 1px solid var(--c-border);
  }

  .footer-logo {
    font-family: var(--f-display);
    font-size: 1.1rem;
    font-weight: 700;
    letter-spacing: 0.1em;
    margin-bottom: 1rem;
  }

  .logo-bracket {
    color: var(--c-accent);
  }

  .footer-desc {
    color: var(--c-text-2);
    font-size: 0.9rem;
    line-height: 1.7;
    max-width: 280px;
  }

  .footer-nav-title {
    font-family: var(--f-mono);
    font-size: 0.75rem;
    color: var(--c-accent);
    letter-spacing: 0.12em;
    text-transform: uppercase;
    margin-bottom: 1.2rem;
  }

  .footer-nav ul {
    list-style: none;
    display: flex;
    flex-direction: column;
    gap: 0.6rem;
  }

  .footer-nav a {
    font-size: 0.9rem;
    color: var(--c-text-2);
    transition: color var(--transition), padding-left var(--transition);
    display: inline-block;
  }

  .footer-nav a:hover {
    color: var(--c-accent);
    padding-left: 0.4rem;
  }

  .footer-email {
    font-family: var(--f-mono);
    font-size: 0.85rem;
    color: var(--c-text-2);
    margin-bottom: 1.2rem;
  }

  .socials {
    display: flex;
    gap: 0.75rem;
  }

  .social-link {
    width: 38px;
    height: 38px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: var(--c-surface);
    border: 1px solid var(--c-border);
    border-radius: var(--radius);
    color: var(--c-text-2);
    transition: all var(--transition);
  }

  .social-link :global(svg) {
    width: 16px;
    height: 16px;
  }

  .social-link:hover {
    background: rgba(56, 189, 248, 0.1);
    border-color: var(--c-accent);
    color: var(--c-accent);
    transform: translateY(-3px);
    box-shadow: 0 8px 16px rgba(56, 189, 248, 0.2);
  }

  /* Quote */
  .footer-quote {
    display: flex;
    align-items: center;
    gap: 1.5rem;
    padding: 2.5rem 0;
    border-bottom: 1px solid var(--c-border);
  }

  .quote-line {
    flex: 1;
    height: 1px;
    background: linear-gradient(90deg, transparent, var(--c-border));
  }

  .quote-line:last-child {
    background: linear-gradient(90deg, var(--c-border), transparent);
  }

  blockquote {
    font-family: var(--f-mono);
    font-size: 0.85rem;
    color: var(--c-text-3);
    letter-spacing: 0.02em;
    text-align: center;
    white-space: nowrap;
    font-style: italic;
  }

  /* Bottom */
  .footer-bottom {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-top: 1.5rem;
    flex-wrap: wrap;
    gap: 0.75rem;
  }

  .footer-copy {
    font-size: 0.8rem;
    color: var(--c-text-3);
  }

  .footer-made {
    display: flex;
    align-items: center;
    gap: 0.4rem;
    font-size: 0.8rem;
  }

  .footer-mono {
    font-family: var(--f-mono);
    color: var(--c-text-3);
  }

  .footer-heart {
    color: var(--c-accent-4);
    animation: pulse 2s ease-in-out infinite;
  }

  @keyframes pulse {
    0%, 100% { transform: scale(1); }
    50% { transform: scale(1.3); }
  }

  /* Particles */
  .footer-particles {
    position: absolute;
    inset: 0;
    pointer-events: none;
    overflow: hidden;
  }

  .particle {
    position: absolute;
    bottom: -10px;
    left: calc(var(--i) * 14% + 3%);
    width: 2px;
    height: 2px;
    background: var(--c-accent);
    border-radius: 50%;
    opacity: 0;
    animation: floatUp 4s ease-in-out infinite;
    animation-delay: calc(var(--i) * 0.5s);
  }

  @keyframes floatUp {
    0% { bottom: 0; opacity: 0; }
    30% { opacity: 0.6; }
    100% { bottom: 120px; opacity: 0; }
  }

  @media (max-width: 768px) {
    .footer-grid {
      grid-template-columns: 1fr;
      gap: 2rem;
    }

    .footer-quote {
      display: none;
    }

    blockquote {
      white-space: normal;
    }

    .footer-bottom {
      flex-direction: column;
      align-items: center;
      text-align: center;
    }
  }
</style>