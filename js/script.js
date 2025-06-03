// Lightbox functionality
document.addEventListener('DOMContentLoaded', function() {
    // Lightbox setup
    const galleryItems = document.querySelectorAll('.gallery-item');
    const lightbox = document.createElement('div');
    lightbox.className = 'lightbox';
    lightbox.innerHTML = `
        <span class="lightbox-close">&times;</span>
        <div class="lightbox-content"></div>
    `;
    document.body.appendChild(lightbox);
    
    const lightboxContent = lightbox.querySelector('.lightbox-content');
    const lightboxClose = lightbox.querySelector('.lightbox-close');
    
    galleryItems.forEach(item => {
        item.addEventListener('click', function(e) {
            e.preventDefault();
            const media = this.querySelector('img, video');
            if (media) {
                if (media.tagName === 'IMG') {
                    lightboxContent.innerHTML = `<img src="${media.src}" alt="${media.alt}">`;
                } else {
                    lightboxContent.innerHTML = `
                        <video controls autoplay>
                            <source src="${media.querySelector('source').src}" type="video/mp4">
                        </video>
                    `;
                }
                lightbox.style.display = 'flex';
            }
        });
    });
    
    lightboxClose.addEventListener('click', function() {
        lightbox.style.display = 'none';
    });
    
    lightbox.addEventListener('click', function(e) {
        if (e.target === lightbox) {
            lightbox.style.display = 'none';
        }
    });
});