const targetText = "MUTALE";
const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+-=[]{}|;:,.<>?";
let currentIteration = 0;

function randomChar() {
    return characters[Math.floor(Math.random() * characters.length)];
}

function animateText() {
    const glitchText = document.getElementById('glitchText');
            
    const interval = setInterval(() => {
        let displayText = '';
                
        for (let i = 0; i < targetText.length; i++) {
            if (i < currentIteration) {
                // Letter is finalized
                displayText += `<span class="letter final">${targetText[i]}</span>`;
            } else {
                // Letter is still scrambling
                displayText += `<span class="letter">${randomChar()}</span>`;
            }
        }
                
        glitchText.innerHTML = displayText;
                
        if (currentIteration >= targetText.length) {
            clearInterval(interval);
            // Add final glow effect
            setTimeout(() => {
                glitchText.style.textShadow = '0 0 20px #ff0000, 0 0 40px #ff0000';
            }, 500);
        }
                
        // Progress to next letter with some randomness
        if (Math.random() > 0.8) {
            currentIteration += 1/3;
        }
    }, 50);
}

// Create matrix rain effect
function createMatrixRain() {
    const matrixRain = document.getElementById('matrixRain');
            
    for (let i = 0; i < 50; i++) {
        const char = document.createElement('div');
        char.className = 'matrix-char';
        char.textContent = randomChar();
        char.style.left = Math.random() * 100 + 'vw';
        char.style.animationDelay = Math.random() * 2 + 's';
        char.style.animationDuration = (Math.random() * 3 + 2) + 's';
        matrixRain.appendChild(char);
    }
}

function skipIntro() {
    const introScreen = document.getElementById('introScreen');
    const mainContent = document.querySelector('.main-content');
            
    // Immediately hide intro and show main content
    introScreen.style.animation = 'none';
    introScreen.style.opacity = '0';
    introScreen.style.visibility = 'hidden';
            
    mainContent.style.animation = 'none';
    mainContent.style.opacity = '1';
            
    // Trigger the portfolio content animations
    const h1 = document.querySelector('.portfolio-container h1');
    const p = document.querySelector('.portfolio-container p');
    const button = document.querySelector('.view-more');
            
    h1.style.animation = 'fadeInUp 0.8s ease-out forwards';
    p.style.animation = 'fadeInUp 0.8s ease-out 0.3s forwards';
    button.style.animation = 'fadeInUp 0.8s ease-out 0.4s forwards';
}

// Start animations when page loads
window.addEventListener('load', () => {
    createMatrixRain();
    setTimeout(animateText, 500);
});

// Auto-hide intro after animation completes
setTimeout(() => {
    const introScreen = document.getElementById('introScreen');
    if (introScreen.style.visibility !== 'hidden') {
        console.log('Intro animation completed');
    }
}, 6000);