document.addEventListener('DOMContentLoaded', function() {
    const button = document.getElementById('back-to-toc');
        
    // Show button when scrolling down
    window.addEventListener('scroll', function() {
        if (window.scrollY > 1000) {
            button.style.display = 'flex';
        } else {
            button.style.display = 'none';
        }
    });
    
    // Handle click event
    button.addEventListener('click', function(event) {
        event.stopPropagation(); // Ensure the event is not blocked
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
    });
});