// Simple function to open the contact form
function openContactForm() {
    window.open('https://docs.google.com/forms/d/e/1FAIpQLScu57PmCzf_a-sIPTbe8D7Uzpey_U59rejiR1oNhmuSIbq6ng/viewform?usp=dialog', '_blank');
}

// Generate waveform bars dynamically
document.addEventListener('DOMContentLoaded', function() {
    const waveformBars = document.querySelector('.waveform-bars');
    
    if (waveformBars) {
        waveformBars.innerHTML = '';
        
        for (let i = 0; i < 50; i++) {
            const bar = document.createElement('div');
            bar.className = 'waveform-bar';
            
            if ((i > 12 && i < 16) || (i > 28 && i < 33) || (i > 40 && i < 44)) {
                bar.classList.add('watermarked');
            }
            
            waveformBars.appendChild(bar);
        }
    }
});

// Toggle audio play/pause with icon change
function toggleAudio(audioId) {
    const audio = document.getElementById(audioId);
    const button = document.querySelector(`[onclick="toggleAudio('${audioId}')"]`);
    const icon = button.querySelector('i');
    
    // Pause all other audio elements first
    document.querySelectorAll('audio').forEach(a => {
        if (a.id !== audioId && !a.paused) {
            a.pause();
            const otherButton = document.querySelector(`[onclick="toggleAudio('${a.id}')"]`);
            if (otherButton) {
                const otherIcon = otherButton.querySelector('i');
                otherIcon.classList.remove('fa-pause');
                otherIcon.classList.add('fa-play');
            }
        }
    });
    
    // Toggle play/pause for this audio
    if (audio.paused) {
        audio.play();
        icon.classList.remove('fa-play');
        icon.classList.add('fa-pause');
        
        // Reset icon when audio ends
        audio.onended = function() {
            icon.classList.remove('fa-pause');
            icon.classList.add('fa-play');
        };
    } else {
        audio.pause();
        icon.classList.remove('fa-pause');
        icon.classList.add('fa-play');
    }
} 