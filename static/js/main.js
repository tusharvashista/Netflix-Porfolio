// Intersection Observer for animations
document.addEventListener('DOMContentLoaded', () => {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, { threshold: 0.1 });

    // Observe all Netflix category headers
    document.querySelectorAll('.netflix-category').forEach(category => {
        observer.observe(category);
    });

    // Initialize progress bars
    document.querySelectorAll('.progress').forEach(progress => {
        observer.observe(progress);
    });
});

// Smooth scroll function for play button
function scrollToContent() {
    const featuredSection = document.querySelector('.featured-section');
    if (featuredSection) {
        featuredSection.scrollIntoView({ 
            behavior: 'smooth',
            block: 'start'
        });
    }
}

// Netflix-style preloader
window.addEventListener('load', () => {
    const loader = document.createElement('div');
    loader.className = 'netflix-loader';
    document.body.appendChild(loader);

    setTimeout(() => {
        loader.style.display = 'none';
    }, 2000);
});
