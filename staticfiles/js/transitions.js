document.addEventListener('DOMContentLoaded', () => {
    // Add loading animation
    const addLoader = () => {
        const loader = document.createElement('div');
        loader.className = 'netflix-loader';
        document.body.appendChild(loader);
        return loader;
    };

    // Handle page transitions
    document.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', (e) => {
            // Only handle internal links
            if (link.getAttribute('href').startsWith('/') && !link.getAttribute('href').startsWith('//')) {
                e.preventDefault();
                const loader = addLoader();
                
                setTimeout(() => {
                    window.location.href = link.getAttribute('href');
                }, 500);
            }
        });
    });

    function initializeNavigation() {
        document.querySelector('.nav-links').classList.add('visible');
    }

    initializeNavigation();

    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
});
