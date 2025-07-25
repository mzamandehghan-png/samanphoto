document.addEventListener("DOMContentLoaded", function() {
  const grid = document.getElementById('gallery-grid');
  if (!window.GALLERY) return;
  let loaded = 0;
  const batch = 12;
  function renderBatch() {
    const items = window.GALLERY.slice(loaded, loaded + batch);
    items.forEach(item => {
      const div = document.createElement('div');
      div.className = 'gallery-item';
      div.innerHTML = `
        <img src="${item.jpg}" alt="${item.caption}" loading="lazy" tabindex="0"/>
        <div class="caption">${item.caption}</div>
        <div class="downloads">
          ${item.png ? `<a href="${item.png}" download>دانلود PNG</a>` : ''}
          ${item.raw ? `<a href="${item.raw}" download>دانلود RAW</a>` : ''}
        </div>
      `;
      div.querySelector('img').addEventListener('click', () => openLightbox(item));
      div.querySelector('img').addEventListener('keydown', e => {
        if (e.key === 'Enter' || e.key === ' ') openLightbox(item);
      });
      grid.appendChild(div);
    });
    loaded += items.length;
  }
  renderBatch();
  // Infinite scroll
  window.addEventListener('scroll', function() {
    if (loaded >= window.GALLERY.length) return;
    if (window.innerHeight + window.scrollY >= document.body.offsetHeight - 400) {
      renderBatch();
    }
  });
}); 