import { fetchGames } from './store.js';
import { renderLayout } from './components/Layout.js';
import { initRouter } from './router.js';

// Initialize the application
async function init() {
  const app = document.getElementById('app');

  // Check for static content
  if (app.children.length > 0) {
    console.log("Static content detected. Hydrating...");

    // Hydrate Home Search if present
    const searchInput = document.querySelector('.search-bar input');
    if (searchInput) {
      console.log("Attaching search listener...");
      const grid = document.querySelector('.games-grid');

      searchInput.addEventListener('input', (e) => {
        const query = e.target.value.toLowerCase();
        const cards = grid.querySelectorAll('.game-card');
        let hasResults = false;

        cards.forEach(card => {
          const name = card.querySelector('h3').textContent.toLowerCase();
          if (name.includes(query)) {
            card.style.display = 'flex'; // Ensure flex since it was a link-card
            card.style.animation = 'fadeIn 0.3s ease';
            hasResults = true;
          } else {
            card.style.display = 'none';
          }
        });

        const noResultsMsg = grid.querySelector('.no-results');
        if (!hasResults) {
          if (!noResultsMsg) {
            const msg = document.createElement('div');
            msg.className = 'no-results';
            msg.style.gridColumn = '1 / -1';
            msg.style.textAlign = 'center';
            msg.style.padding = '2rem';
            msg.style.color = 'var(--color-text-dim)';
            msg.innerHTML = `<h3>No games found matching "${e.target.value}"</h3>`;
            grid.appendChild(msg);
          } else {
            noResultsMsg.querySelector('h3').textContent = `No games found matching "${e.target.value}"`;
            noResultsMsg.style.display = 'block';
          }
        } else if (noResultsMsg) {
          noResultsMsg.style.display = 'none';
        }
      });
    }
    return;
  }

  // Show loading state
  app.innerHTML = '<div style="display:flex;justify-content:center;align-items:center;width:100%;height:100vh;">Loading assets...</div>';

  try {
    // 1. Fetch Data
    await fetchGames();

    // 2. Render Layout (Sidebar + Main Content Area)
    app.innerHTML = '';
    renderLayout(app);

    // 3. Initialize Router (Handles rendering the correct page into Main Content)
    initRouter();

  } catch (error) {
    console.error("Failed to init app:", error);
    app.innerHTML = `<div style="padding:2rem;color:red;">Error loading application: ${error.message}</div>`;
  }
}

init();
