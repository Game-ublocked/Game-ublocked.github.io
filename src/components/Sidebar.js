export function renderSidebar() {
  const aside = document.createElement('aside');
  aside.className = 'sidebar';

  // Basic styles inline for now, ideally in CSS
  // Using utility classes from style.css once added

  const template = `
    <div class="logo-area">
      <h1>unblocked</h1>
    </div>
    
    <nav class="nav-menu">
      <a href="#/" class="nav-item active">
        <span class="icon">🏠</span>
        <span>Home</span>
      </a>
      <a href="#/popular" class="nav-item">
        <span class="icon">🔥</span>
        <span>Popular</span>
      </a>
      <a href="#/new" class="nav-item">
        <span class="icon">✨</span>
        <span>New</span>
      </a>
    </nav>
    
    <div style="margin-top: 1rem; border-top: 1px solid var(--glass-border); padding-top: 1rem;">
      <a href="./about.html" class="nav-item">
        <span class="icon">ℹ️</span>
        <span>About</span>
      </a>
      <a href="./contact.html" class="nav-item">
        <span class="icon">📧</span>
        <span>Contact</span>
      </a>
      <a href="./privacy.html" class="nav-item" style="font-size: 0.9em; opacity: 0.8;">
        <span class="icon">🔒</span>
        <span>Privacy</span>
      </a>
      <a href="./terms.html" class="nav-item" style="font-size: 0.9em; opacity: 0.8;">
        <span class="icon">📜</span>
        <span>Terms</span>
      </a>
    </div>
    
    <div class="nav-footer">
      <span class="version">v2.0</span>
    </div>
  `;

  aside.innerHTML = template;

  // Active State Logic
  const updateActiveState = () => {
    const hash = window.location.hash || '#/';
    const navItems = aside.querySelectorAll('.nav-item');

    navItems.forEach(item => {
      const href = item.getAttribute('href');
      if (href === hash) {
        item.classList.add('active');
      } else {
        item.classList.remove('active');
      }
    });
  };

  window.addEventListener('hashchange', updateActiveState);
  window.addEventListener('popstate', updateActiveState);

  // Initial check
  setTimeout(updateActiveState, 0);

  return aside;
}
