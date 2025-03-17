// Hide content initially
document.documentElement.style.visibility = 'hidden';

// Function to check if this is a new session
const isNewSession = () => {
    // Check if this is a new browser session
    return !sessionStorage.getItem('hasSeenAnimation');
};

// Function to mark animation as seen
const markAnimationAsSeen = () => {
    sessionStorage.setItem('hasSeenAnimation', 'true');
};

// Wait for all resources to load
window.addEventListener('load', () => {
    const loader = document.querySelector('.netflix-loader');
    const content = document.querySelector('.netflix-background');
    const audio = document.getElementById('netflix-sound');

    // Function to show content without animation
    const showContentDirectly = () => {
        loader.style.display = 'none';
        document.documentElement.style.visibility = 'visible';
        content.classList.add('fade-in');
    };

    // Function to start the animation sequence
    const startAnimation = async () => {
        // Show loader
        loader.style.visibility = 'visible';
        
        // Set up audio
        audio.volume = 1.0;
        audio.currentTime = 0;
        audio.muted = false;
        
        // Try to play the audio immediately
        try {
            console.log('Attempting to play audio...');
            const playPromise = audio.play();
            if (playPromise !== undefined) {
                playPromise
                    .then(() => {
                        console.log('Audio playing successfully');
                    })
                    .catch(error => {
                        console.error('Audio playback failed:', error);
                    });
            }
        } catch (error) {
            console.error('Audio setup failed:', error);
        }

        // After animation completes
        setTimeout(() => {
            loader.classList.add('fade-out');
            setTimeout(() => {
                loader.classList.add('hidden');
                document.documentElement.style.visibility = 'visible';
                content.classList.add('fade-in');
                markAnimationAsSeen(); // Mark animation as seen after it completes
            }, 300);
        }, 2125); // 85% of 2.5s = 2125ms, when logo starts fading
    };

    // Check if we should show the animation
    if (isNewSession()) {
        startAnimation();
    } else {
        showContentDirectly();
    }
});

// Handle page visibility changes
document.addEventListener('visibilitychange', () => {
    const audio = document.getElementById('netflix-sound');
    if (document.hidden) {
        audio.pause();
    }
});
