document.addEventListener("DOMContentLoaded", function () {
  const lightboxLinks = document.querySelectorAll("a.lightbox");
  
  if (lightboxLinks.length > 0) {
    // Create the overlay element if it doesn't exist
    let overlay = document.querySelector('.lightbox-overlay');
    if (!overlay) {
      overlay = document.createElement("div");
      overlay.classList.add("lightbox-overlay");
      overlay.innerHTML = `
        <span class="close">&times;</span>
        <div class="lightbox-content">
          <img src="" alt="Lightbox Image">
          <div class="lightbox-caption"></div>
        </div>
      `;
      document.body.appendChild(overlay);
    }
    
    const overlayImage = overlay.querySelector("img");
    const overlayCaption = overlay.querySelector(".lightbox-caption");
    const closeButton = overlay.querySelector(".close");

    // Prevent scrolling when lightbox is open
    function toggleScrollLock(lock) {
      document.body.style.overflow = lock ? 'hidden' : '';
    }

    // Handle image loading
    function showImage(src, caption, link) {
      if (!src) return;
      
      overlay.classList.add('loading');
      overlayImage.src = src;
      if (link) {
        overlayCaption.innerHTML = `<a href="${link}" target="_blank">${caption || ''}</a>`;
      } else {
        overlayCaption.textContent = caption || '';
      }
      overlayCaption.style.display = caption ? 'block' : 'none';
      overlay.classList.add('visible');
      toggleScrollLock(true);

      overlayImage.onload = () => {
        overlay.classList.remove('loading');
      };
    }

    function hideOverlay() {
      overlay.classList.remove('visible');
      toggleScrollLock(false);
    }

    // Handle keyboard events
    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape") {
        hideOverlay();
      }
    });

    lightboxLinks.forEach(link => {
      link.addEventListener("click", function (event) {
        event.preventDefault();
        const imageSrc = this.getAttribute('data-src');
        const imageCaption = this.getAttribute('data-caption');
        const imageLink = this.getAttribute('data-link');
        showImage(imageSrc, imageCaption, imageLink);
      });
    });

    // Remove the click handler for the image that was toggling the caption
    overlayImage.addEventListener("click", (event) => {
      event.stopPropagation(); // Just prevent overlay from closing
    });

    closeButton.addEventListener("click", () => {
      hideOverlay();
    });

    overlay.addEventListener("click", (event) => {
      if (event.target === overlay) {
        hideOverlay();
      }
    });
  }
}); 