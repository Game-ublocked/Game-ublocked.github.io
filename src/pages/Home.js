import { getAllGames } from '../store.js';
import { renderGameCard } from '../components/GameCard.js';

export function renderHome(container) {
  const games = getAllGames();
  console.log("RenderHome: Games to render:", games);

  const section = document.createElement('section');
  section.className = 'home-page';

  const header = document.createElement('header');
  header.className = 'page-header';
  header.innerHTML = `
    <h2>All Games</h2>
    <div class="search-bar">
      <input type="text" placeholder="Search games..." />
    </div>
  `;

  const grid = document.createElement('div');
  grid.className = 'games-grid';

  games.forEach(game => {
    const card = renderGameCard(game);
    grid.appendChild(card);
  });

  section.appendChild(header);
  section.appendChild(grid);

  /* Search Logic */
  const searchInput = section.querySelector('input');
  searchInput.addEventListener('input', (e) => {
    const query = e.target.value.toLowerCase();
    const cards = grid.querySelectorAll('.game-card');

    cards.forEach(card => {
      const name = card.querySelector('h3').textContent.toLowerCase();
      if (name.includes(query)) {
        card.style.display = 'block';
        card.style.animation = 'fadeIn 0.3s ease';
      } else {
        card.style.display = 'none';
      }
    });
  });

  container.appendChild(section);
}
