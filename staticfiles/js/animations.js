// Netflix card hover animations
document.addEventListener('DOMContentLoaded', () => {
    const cards = document.querySelectorAll('.netflix-card');
    
    cards.forEach(card => {
        card.addEventListener('mouseenter', () => {
            card.style.transform = 'scale(1.05) translateY(-10px)';
            card.style.zIndex = '1';
        });

        card.addEventListener('mouseleave', () => {
            card.style.transform = 'scale(1) translateY(0)';
            card.style.zIndex = '0';
        });
    });

    // Animate progress bars when they come into view
    const progressBars = document.querySelectorAll('.progress');
    const progressObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate');
            }
        });
    }, { threshold: 0.5 });

    progressBars.forEach(bar => progressObserver.observe(bar));

    // Page transition effect
    document.body.classList.add('page-transition');
});
