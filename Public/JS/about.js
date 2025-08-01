// Typewriter effect with position tracking
const fullText = "Now Loading...";
const typedTextElement = document.getElementById('typedText');
const loadingBar = document.getElementById('loadingBar');
                
let currentPosition = 0;
                
// Typewriter animation
const typewriterInterval = setInterval(() => {
    if (currentPosition < fullText.length) {
        typedTextElement.textContent = fullText.substring(0, currentPosition + 1);
        currentPosition++;
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
    const portfolioContainers = document.querySelectorAll('.portfolio-container1, .portfolio-container2, .portfolio-form');
                   
    // Fade out intro screen
    introScreen.style.transition = 'opacity 0.5s ease-out';
    introScreen.style.opacity = '0';
                    
    setTimeout(() => {
        introScreen.style.display = 'none';
        mainContent.style.display = 'flex';
                        
        // Fade in content containers only (not the background)
        portfolioContainers.forEach(container => {
            container.style.opacity = '0';
            container.style.transition = 'opacity 0.5s ease-in';
        });
                
        setTimeout(() => {
            portfolioContainers.forEach(container => {
                container.style.opacity = '1';
            });
        }, 50);
    }, 500);
}, 3000); // Wait 3 seconds (2s typing + 1s pause)

// Navigation Menu Functionality
const burgerMenu = document.getElementById('burgerMenu');
const navMenu = document.getElementById('navMenu');
const navOverlay = document.getElementById('navOverlay');
const navLinks = document.querySelectorAll('.nav-link');

// Toggle navigation menu
function toggleNav() {
    burgerMenu.classList.toggle('active');
    navMenu.classList.toggle('active');
    navOverlay.classList.toggle('active');
}

// Close navigation menu
function closeNav() {
    burgerMenu.classList.remove('active');
    navMenu.classList.remove('active');
    navOverlay.classList.remove('active');
}

// Event listeners
burgerMenu.addEventListener('click', toggleNav);
navOverlay.addEventListener('click', closeNav);

// Smooth scrolling for navigation links
navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const targetId = link.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);
                
        if (targetElement) {
            targetElement.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
            closeNav();
        }
    });
});

// Close menu when clicking outside on mobile
document.addEventListener('click', (e) => {
    if (!navMenu.contains(e.target) && !burgerMenu.contains(e.target)) {
        closeNav();
    }
});

// Close menu on escape key
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        closeNav();
    }
});