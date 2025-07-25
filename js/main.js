// Hamburger menu toggle
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');
hamburger.addEventListener('click', () => {
  navLinks.classList.toggle('open');
  hamburger.classList.toggle('open');
});
// Close nav on link click (mobile)
document.querySelectorAll('.nav-links a').forEach(link => {
  link.addEventListener('click', () => {
    navLinks.classList.remove('open');
    hamburger.classList.remove('open');
  });
});
// Parallax effect for hero
window.addEventListener('scroll', () => {
  const hero = document.querySelector('.parallax');
  if (hero) {
    let offset = window.scrollY * 0.3;
    hero.style.backgroundPosition = `center ${offset}px`;
  }
});
// Lightbox logic (global, used by gallery.js)
window.openLightbox = function(item) {
  let lightbox = document.getElementById('lightbox');
  if (!lightbox) {
    lightbox = document.createElement('div');
    lightbox.id = 'lightbox';
    lightbox.innerHTML = `
      <button class="close-btn" aria-label="بستن">&times;</button>
      <img src="" alt="" />
    `;
    document.body.appendChild(lightbox);
    lightbox.querySelector('.close-btn').onclick = closeLightbox;
    lightbox.addEventListener('click', e => {
      if (e.target === lightbox) closeLightbox();
    });
    document.addEventListener('keydown', e => {
      if (e.key === 'Escape') closeLightbox();
    });
  }
  const img = lightbox.querySelector('img');
  img.src = item.jpg;
  img.alt = item.caption;
  lightbox.classList.add('open');
};
window.closeLightbox = function() {
  const lightbox = document.getElementById('lightbox');
  if (lightbox) lightbox.classList.remove('open');
};
// Lazy load images (fallback for browsers without native lazy)
document.addEventListener('DOMContentLoaded', function() {
  if ('loading' in HTMLImageElement.prototype) return;
  document.querySelectorAll('img[loading="lazy"]').forEach(img => {
    if (img.dataset.src) img.src = img.dataset.src;
  });
}); 