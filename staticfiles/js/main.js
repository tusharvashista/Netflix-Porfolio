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

    // Handle CV button behavior for mobile devices
    const cvButton = document.getElementById('cv-button');
    if (cvButton) {
        if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
            cvButton.setAttribute('download', 'Tushar_Vashista_CV.pdf');
            cvButton.removeAttribute('target');
        }
    }
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
