// Typewriter effect with position tracking
const fullText = "Now Loading...";
const typedTextElement = document.getElementById('typedText');
const positionCounter = document.getElementById('positionCounter');
const loadingBar = document.getElementById('loadingBar');
        
let currentPosition = 0;
        
// Typewriter animation
const typewriterInterval = setInterval(() => {
    if (currentPosition < fullText.length) {
        typedTextElement.textContent = fullText.substring(0, currentPosition + 1);
        currentPosition++;
        positionCounter.textContent = currentPosition;
    } else {
        clearInterval(typewriterInterval);
    }
}, 140); // Approximately 2 seconds for 14 characters
        
// Animate the loading bar
let progress = 0;
const progressInterval = setInterval(() => {
    progress += 2;
    loadingBar.style.width = progress + '%';
            
    if (progress >= 100) {
        clearInterval(progressInterval);
    }
}, 60); // Updates every 60ms for smooth animation

// Wait for the typing animation to complete, then fade out intro and show main content
setTimeout(() => {
    const introScreen = document.getElementById('introScreen');
    const mainContent = document.getElementById('mainContent');
            
    // Fade out intro screen
    introScreen.style.transition = 'opacity 0.5s ease-out';
    introScreen.style.opacity = '0';
            
    setTimeout(() => {
        introScreen.style.display = 'none';
        mainContent.style.display = 'flex';
                
        // Fade in main content
        mainContent.style.opacity = '0';
        mainContent.style.transition = 'opacity 0.5s ease-in';
        setTimeout(() => {
            mainContent.style.opacity = '1';
        }, 50);
    }, 500);
}, 3000); // Wait 3 seconds (2s typing + 1s pause)