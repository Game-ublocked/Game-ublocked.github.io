export function renderHeader() {
  const header = document.createElement('header');
  header.className = 'nav-header';

  const template = `
    <div class="header-content">
      <div class="logo-area">
        <h1>unblocked</h1>
      </div>
      <nav class="nav-menu">
        <a href="#/" class="nav-item">
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
        <a href="./about.html" class="nav-item">
          <span class="icon">ℹ️</span>
          <span>About</span>
        </a>
        <a href="./contact.html" class="nav-item">
          <span class="icon">📧</span>
          <span>Contact</span>
        </a>
      </nav>
    </div>
  `;

  header.innerHTML = template;

  // Active State Logic
  const updateActiveState = () => {
    const hash = window.location.hash || '#/';
    const navItems = header.querySelectorAll('.nav-item');

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

  return header;
}
