<script>
  import { onMount } from 'svelte';
  import { page } from '$app/stores';

  let scrolled = $state(false);
  let menuOpen = $state(false);

  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/educazione-civica', label: 'Ed. Civica' },
  ];

  onMount(() => {
    const handleScroll = () => {
      scrolled = window.scrollY > 20;
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  });

  function toggleMenu() {
    menuOpen = !menuOpen;
  }

  function closeMenu() {
    menuOpen = false;
  }

  let currentPath = $derived($page.url.pathname);
  // $: currentPath = $page.url.pathname;
</script>

<nav class="navbar" class:scrolled class:menu-open={menuOpen}>
  <div class="nav-inner">
    <!-- Logo -->
    <a href="/" class="logo" on:click={closeMenu}>
      <span class="logo-bracket">[</span>
      <span class="logo-text">PORTFOLIO</span>
      <span class="logo-bracket">]</span>
      <span class="logo-cursor">_</span>
    </a>

    <!-- Desktop links -->
    <ul class="nav-links">
      {#each navLinks as link}
        <li>
          <a
            href={link.href}
            class="nav-link"
            class:active={currentPath === link.href}
          >
            {link.label}
            {#if currentPath === link.href}
              <span class="active-dot"></span>
            {/if}
          </a>
        </li>
      {/each}
    </ul>

    <!-- Hamburger -->
    <button
      class="hamburger"
      class:open={menuOpen}
      on:click={toggleMenu}
      aria-label="Toggle menu"
      aria-expanded={menuOpen}
    >
      <span></span>
      <span></span>
      <span></span>
    </button>
  </div>

  <!-- Mobile menu -->
  <div class="mobile-menu" class:open={menuOpen}>
    <ul class="mobile-links">
      {#each navLinks as link, i}
        <li style="animation-delay: {i * 0.07}s">
          <a
            href={link.href}
            class="mobile-link"
            class:active={currentPath === link.href}
            on:click={closeMenu}
          >
            <span class="mobile-link-num">0{i + 1}</span>
            {link.label}
          </a>
        </li>
      {/each}
    </ul>
    <div class="mobile-footer">
      <span class="mobile-tagline">// studente di informatica</span>
    </div>
  </div>
</nav>

<style>
  .navbar {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 1000;
    height: var(--nav-h);
    transition: background var(--transition), backdrop-filter var(--transition), box-shadow var(--transition);
  }

  .navbar.scrolled {
    background: rgba(5, 8, 16, 0.7);
    backdrop-filter: blur(20px) saturate(180%);
    -webkit-backdrop-filter: blur(20px) saturate(180%);
    box-shadow: 0 1px 0 var(--c-border), 0 8px 32px rgba(0,0,0,0.4);
  }

  .nav-inner {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 2rem;
    height: 100%;
    display: flex;
    align-items: center;
    gap: 2rem;
  }

  /* Logo */
  .logo {
    font-family: var(--f-display);
    font-size: 1rem;
    font-weight: 700;
    letter-spacing: 0.1em;
    color: var(--c-text);
    display: flex;
    align-items: center;
    gap: 2px;
    flex-shrink: 0;
    transition: color var(--transition);
  }

  .logo:hover {
    color: var(--c-accent);
  }

  .logo-bracket {
    color: var(--c-accent);
  }

  .logo-cursor {
    color: var(--c-accent);
    animation: blink 1.2s step-end infinite;
    margin-left: 2px;
  }

  @keyframes blink {
    0%, 100% { opacity: 1; }
    50% { opacity: 0; }
  }

  /* Desktop nav */
  .nav-links {
    display: flex;
    list-style: none;
    gap: 0.25rem;
    margin-left: auto;
  }

  .nav-link {
    position: relative;
    padding: 0.5rem 0.85rem;
    font-size: 0.875rem;
    font-weight: 500;
    color: var(--c-text-2);
    letter-spacing: 0.02em;
    transition: color var(--transition);
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 4px;
  }

  .nav-link::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    width: 0;
    height: 2px;
    background: linear-gradient(90deg, var(--c-accent), var(--c-accent-2));
    border-radius: 99px;
    transition: width var(--transition);
  }

  .nav-link:hover {
    color: var(--c-text);
  }

  .nav-link:hover::after,
  .nav-link.active::after {
    width: 60%;
  }

  .nav-link.active {
    color: var(--c-accent);
  }

  .active-dot {
    display: none;
  }

  /* CTA button */
  .nav-cta {
    display: flex;
    align-items: center;
    gap: 0.4rem;
    padding: 0.5rem 1.2rem;
    background: linear-gradient(135deg, var(--c-accent), var(--c-accent-2));
    color: var(--c-bg);
    font-size: 0.85rem;
    font-weight: 600;
    border-radius: var(--radius-full);
    transition: transform var(--transition), box-shadow var(--transition), opacity var(--transition);
    flex-shrink: 0;
    letter-spacing: 0.02em;
  }

  .nav-cta:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 24px rgba(56, 189, 248, 0.4);
    opacity: 0.95;
  }

  .nav-cta svg {
    transition: transform var(--transition);
  }

  .nav-cta:hover svg {
    transform: translate(2px, -2px);
  }

  /* Hamburger */
  .hamburger {
    display: none;
    flex-direction: column;
    justify-content: center;
    gap: 5px;
    background: none;
    border: none;
    cursor: pointer;
    padding: 0.5rem;
    margin-left: auto;
  }

  .hamburger span {
    display: block;
    width: 24px;
    height: 2px;
    background: var(--c-text);
    border-radius: 99px;
    transition: transform 0.4s cubic-bezier(0.4, 0, 0.2, 1), opacity 0.3s ease, width 0.3s ease;
    transform-origin: center;
  }

  .hamburger.open span:nth-child(1) {
    transform: translateY(7px) rotate(45deg);
  }

  .hamburger.open span:nth-child(2) {
    opacity: 0;
    transform: scaleX(0);
  }

  .hamburger.open span:nth-child(3) {
    transform: translateY(-7px) rotate(-45deg);
  }

  /* Mobile menu */
  .mobile-menu {
    display: none;
    position: fixed;
    top: var(--nav-h);
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(5, 8, 16, 0.97);
    backdrop-filter: blur(24px);
    -webkit-backdrop-filter: blur(24px);
    flex-direction: column;
    padding: 2rem;
    transform: translateX(100%);
    transition: transform 0.5s cubic-bezier(0.4, 0, 0.2, 1);
    overflow-y: auto;
  }

  .mobile-menu.open {
    transform: translateX(0);
  }

  .mobile-links {
    list-style: none;
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    margin-top: 2rem;
  }

  .mobile-links li {
    opacity: 0;
    transform: translateX(30px);
  }

  .mobile-menu.open .mobile-links li {
    animation: slideIn 0.4s ease forwards;
  }

  @keyframes slideIn {
    to { opacity: 1; transform: translateX(0); }
  }

  .mobile-link {
    display: flex;
    align-items: center;
    gap: 1rem;
    padding: 1.2rem 0;
    font-family: var(--f-display);
    font-size: 1.6rem;
    font-weight: 700;
    color: var(--c-text-2);
    border-bottom: 1px solid var(--c-border);
    transition: color var(--transition);
    letter-spacing: 0.05em;
  }

  .mobile-link:hover,
  .mobile-link.active {
    color: var(--c-accent);
  }

  .mobile-link-num {
    font-size: 0.75rem;
    font-family: var(--f-mono);
    color: var(--c-accent);
    opacity: 0.6;
  }

  .mobile-footer {
    margin-top: auto;
    padding-top: 2rem;
  }

  .mobile-tagline {
    font-family: var(--f-mono);
    font-size: 0.8rem;
    color: var(--c-text-3);
  }

  /* Responsive */
  @media (max-width: 900px) {
    .nav-links, .nav-cta {
      display: none;
    }

    .hamburger {
      display: flex;
    }

    .mobile-menu {
      display: flex;
    }
  }
</style>