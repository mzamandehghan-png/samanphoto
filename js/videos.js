document.addEventListener("DOMContentLoaded", function() {
  const list = document.getElementById('video-list');
  if (!window.VIDEOS) return;
  window.VIDEOS.forEach(video => {
    const div = document.createElement('div');
    div.className = 'video-item';
    div.innerHTML = `
      <div class="video-title">${video.title}</div>
      <div class="video-embed" style="aspect-ratio:16/9;position:relative;width:100%;">
        <div class="video-placeholder" style="width:100%;height:100%;background:#181818;display:flex;align-items:center;justify-content:center;cursor:pointer;">
          <span style="color:#FFD700;font-size:2rem;">▶</span>
        </div>
      </div>
    `;
    const embedDiv = div.querySelector('.video-embed');
    const placeholder = div.querySelector('.video-placeholder');
    placeholder.addEventListener('click', function() {
      embedDiv.innerHTML = video.iframe;
    }, { once: true });
    list.appendChild(div);
  });
}); 