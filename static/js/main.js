document.addEventListener('DOMContentLoaded', function() {
    // Set background image
    document.body.style.backgroundImage = `url('${document.body.dataset.backgroundImage}')`;
    document.body.style.backgroundRepeat = "no-repeat";
    document.body.style.backgroundPosition = "center center";
    document.body.style.backgroundAttachment = "fixed";
    document.body.style.backgroundSize = "cover";

    // Hamburger menu functionality
    const hamburgerMenu = document.querySelector('.hamburger-menu');
    if (hamburgerMenu) {
        hamburgerMenu.addEventListener('click', function() {
            this.classList.toggle('active');
            const navbarLinks = document.querySelector('.navbar-links');
            if (navbarLinks) {
                navbarLinks.classList.toggle('active');
            }
        });
    }

    // Header height functionality
    function setHeaderHeight() {
        const header = document.querySelector('header');
        if (header) {
            const headerHeight = header.offsetHeight;
            document.documentElement.style.setProperty('--header-height', `${headerHeight}px`);
        }
    }

    // Set the header height on load
    window.addEventListener('load', setHeaderHeight);
    window.addEventListener('resize', setHeaderHeight);

    // Touch events for mobile
    const logoLink = document.querySelector('.logo-link');
    const navbarTitle = document.querySelector('.navbar-title');

    logoLink.addEventListener('touchstart', function() {
        navbarTitle.classList.add('hover');
    });

    logoLink.addEventListener('touchend', function() {
        setTimeout(() => {
            navbarTitle.classList.remove('hover');
        }, 300);
    });

    // Linktree popup functionality
    const linktreeButton = document.getElementById('linktree-button');
    const linktreePopup = document.getElementById('linktree-popup');
    const closePopup = document.querySelector('.close-popup');

    if (linktreeButton && linktreePopup && closePopup) {
        linktreeButton.addEventListener('click', function(e) {
            e.stopPropagation();
            linktreePopup.classList.toggle('active');
        });

        closePopup.addEventListener('click', function() {
            linktreePopup.classList.remove('active');
        });

        // Close popup when clicking outside
        document.addEventListener('click', function(e) {
            if (!linktreePopup.contains(e.target) && e.target !== linktreeButton) {
                linktreePopup.classList.remove('active');
            }
        });
    }
}); 