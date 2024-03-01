// JavaScript

const thumbnail = document.getElementById('thumbnail');
const lightbox = document.getElementById('lightbox');
const closeBtn = document.getElementById('close-btn');
const videoEmbed = document.getElementById('video-embed');

thumbnail.addEventListener('click', function() {
    lightbox.classList.remove('hidden');
});

closeBtn.addEventListener('click', function() {
    closeLightbox();
});

lightbox.addEventListener('click', function(e) {
    if (e.target === lightbox) {
        closeLightbox();
    }
});

function closeLightbox() {
    lightbox.classList.add('hidden');
    videoEmbed.contentWindow.postMessage('{"event":"command","func":"pauseVideo","args":""}', '*');
}