function toggleRareTags() {
    const rareTags = document.querySelector('.rare-tags');
    const button = document.querySelector('.show-more-tags');
    if (rareTags.style.display === 'none') {
        rareTags.style.display = 'inline-flex';
        button.textContent = 'Hide less used tags';
    } else {
        rareTags.style.display = 'none';
        button.textContent = `Show less used tags (${rareTags.children.length})`;
    }
}

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    const rareTags = document.querySelector('.rare-tags');
    if (rareTags) {
        rareTags.style.display = 'none';
    }
}); 