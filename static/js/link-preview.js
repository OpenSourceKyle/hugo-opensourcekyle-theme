document.addEventListener("DOMContentLoaded", function() {
    // Target all content links except header and footer
    const contentLinks = document.querySelectorAll(`
        .page-text a, 
        .lightbox-caption a, 
        .featured-image a, 
        .card-content a, 
        #TableOfContents a, 
        .toc-content a, 
        .toc-container a,
        .collapsible-content a,
        article a,
        .page-content a
    `);
    
    // Create preview element
    const preview = document.createElement('div');
    preview.className = 'link-preview';
    preview.innerHTML = `
        <div class="link-preview-content">
            <div class="link-preview-title"></div>
            <div class="link-preview-url"></div>
        </div>
    `;
    document.body.appendChild(preview);

    let hideTimeout;

    contentLinks.forEach(link => {
        // Skip if we shouldn't show preview for this link
        if (!shouldShowPreview(link)) {
            return;
        }

        // Skip if the link is in header, footer, or navigation areas
        if (link.closest('header') || 
            link.closest('footer') || 
            link.closest('nav') || 
            link.closest('.navbar-links')) {
            return;
        }

        // For TOC and section navigation links, only show preview for external links
        if ((link.closest('.toc-container') || 
             link.closest('#TableOfContents') || 
             link.closest('.collapsible-button')) && 
            link.href.startsWith(window.location.origin)) {
            return;
        }

        link.addEventListener('mouseenter', async (e) => {
            clearTimeout(hideTimeout);
            
            const rect = link.getBoundingClientRect();
            const url = new URL(link.href);
            
            // Find the content container
            const contentContainer = document.querySelector('.content-container');
            const containerRect = contentContainer.getBoundingClientRect();
            
            // Position preview in the left margin area
            const previewWidth = 250; // Same as CSS width
            let leftPos = Math.max(20, containerRect.left - previewWidth - 40);
            
            preview.style.left = `${leftPos}px`;
            preview.style.top = `${rect.top + window.scrollY}px`;
            
            // Show basic info immediately
            preview.querySelector('.link-preview-title').textContent = url.hostname;
            
            // For internal links, show the page title or path
            if (url.origin === window.location.origin) {
                const path = url.pathname.replace(/\/$/, '').split('/').pop() || 'Home';
                preview.querySelector('.link-preview-title').textContent = 'Internal Link';
                preview.querySelector('.link-preview-url').textContent = decodeURIComponent(path);
            } else {
                preview.querySelector('.link-preview-title').textContent = url.hostname;
                preview.querySelector('.link-preview-url').textContent = url.pathname;
            }
            
            preview.classList.add('visible');
        });

        link.addEventListener('mouseleave', () => {
            hideTimeout = setTimeout(() => {
                preview.classList.remove('visible');
            }, 200);
        });

        preview.addEventListener('mouseenter', () => {
            clearTimeout(hideTimeout);
        });

        preview.addEventListener('mouseleave', () => {
            preview.classList.remove('visible');
        });
    });
});

function shouldShowPreview(link) {
    // Skip mailto and tel links
    if (link.href && (link.href.startsWith('mailto:') || link.href.startsWith('tel:'))) {
        return false;
    }

    // Don't show previews for lightbox images
    if (link.closest('.lightbox')) {
        return false;
    }

    const href = link.getAttribute('href');
    // Don't show previews for javascript:void(0) or empty links
    if (!href || href === '#' || href === 'javascript:void(0)' || href.startsWith('javascript:')) {
        return false;
    }

    return true;
} 