import { renderHeader } from './Header.js';

export function renderLayout(parentElement) {
    // Container
    const container = document.createElement('div');
    container.className = 'layout-container';

    // Header (Top Navigation)
    const header = renderHeader();
    container.appendChild(header);

    // Main Content
    const main = document.createElement('main');
    main.id = 'main-content';
    main.className = 'main-content';
    container.appendChild(main);

    // Mount to #app (Note: Footer is part of specific page templates or appended later)
    parentElement.appendChild(container);
}


parentElement.appendChild(container); // Mount to #app
}
