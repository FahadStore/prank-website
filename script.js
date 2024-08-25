document.getElementById('prank-button').addEventListener('click', function() {
    // Hide the hero section
    document.querySelector('.hero-section').style.display = 'none';
    
    // Show the hacked message
    const hackedMessage = document.getElementById('hacked-message');
    hackedMessage.style.display = 'block';

    // Play the background sound
    const backgroundSound = document.getElementById('background-sound');
    backgroundSound.play();

    // Play the music
    const music = document.getElementById('music');
    music.play();

    // Trigger the glitch effect
    setTimeout(function() {
        document.getElementById('glitch-overlay').style.opacity = 1;
    }, 500);

    // Display special symbols in a randomized pattern
    const symbols = ['⚠️', '💀', '🔒', '😈', '☠️', '🛑'];
    const specialSymbols = document.getElementById('special-symbols');
    setInterval(function() {
        const randomSymbol = symbols[Math.floor(Math.random() * symbols.length)];
        specialSymbols.textContent = randomSymbol;
    }, 500);

    // Trigger fullscreen mode
    if (document.documentElement.requestFullscreen) {
        document.documentElement.requestFullscreen();
    } else if (document.documentElement.mozRequestFullScreen) { // Firefox
        document.documentElement.mozRequestFullScreen();
    } else if (document.documentElement.webkitRequestFullscreen) { // Chrome, Safari and Opera
        document.documentElement.webkitRequestFullscreen();
    } else if (document.documentElement.msRequestFullscreen) { // IE/Edge
        document.documentElement.msRequestFullscreen();
    }
});