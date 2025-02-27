function toggleDescription(toggle) {
    toggle.classList.toggle('active');
    const content = toggle.nextElementSibling;
    content.classList.toggle('active');
}

// Initialize description state on load
function initDescription() {
    if (window.innerWidth <= 768) {  // Mobile view
        const toggles = document.querySelectorAll('.description-toggle');
        const contents = document.querySelectorAll('.description-content');
        
        toggles.forEach(toggle => {
            toggle.classList.remove('active');
        });
        
        contents.forEach(content => {
            content.classList.remove('active');
        });
    }
}

// Run on page load
document.addEventListener('DOMContentLoaded', initDescription);

// Run on window resize
window.addEventListener('resize', initDescription); 