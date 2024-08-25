document.addEventListener('DOMContentLoaded', function () {
    const hackingText = document.getElementById('hacking-text');
    const body = document.body;
    const jumpscare1 = document.getElementById('jumpscare1');
    const jumpscare2 = document.getElementById('jumpscare2');
    const screamSound1 = document.getElementById('scream-sound1');
    const screamSound2 = document.getElementById('scream-sound2');
    const whisperSound = document.getElementById('whisper-sound');
    const glitchSound = document.getElementById('glitch-sound');
    const joinTeamContainer = document.getElementById('join-team-container');
    const joinTeamButton = document.getElementById('join-team-button');

    // Play background music
    const music = document.getElementById('background-music');
    music.play();

    // Trigger fullscreen mode automatically after 1 second
    setTimeout(() => {
        enterFullscreen();
    }, 1000);

    // Prevent exiting fullscreen for 5 seconds
    let preventExit = true;
    setTimeout(() => {
        preventExit = false;
    }, 6000);

    document.addEventListener('fullscreenchange', function () {
        if (!document.fullscreenElement && preventExit) {
            enterFullscreen();
        }
    });

    // Hijack cursor
    document.body.style.cursor = 'url("crosshair.png"), auto';

    // Flash the screen red for a brief moment
    setTimeout(() => {
        flashScreen();
    }, 2000);

    // Automatically start the hack simulation after fullscreen is enabled
    setTimeout(() => {
        simulateTyping('لقد تم اختراقك شكرا لثقتك ودخولك الرابط... ████ █████████ ████ ██ ███ █ ████ █████', hackingText, 25);
        flashScreen();

        // Random glitch sound effect
        setTimeout(() => {
            glitchSound.play();
        }, 2500);

        // Whisper sound effect before the first jump scare
        setTimeout(() => {
            whisperSound.play();
        }, 3000);

        // First jump scare
        setTimeout(() => {
            displayJumpScare(jumpscare1, screamSound1);
        }, 5000);

        // Show the "Join Our Team" button after the first jump scare
        setTimeout(() => {
            jumpscare1.classList.add('hidden');
            joinTeamContainer.classList.remove('hidden');
        }, 7000);
    }, 2000); // Start the sequence 2 seconds after fullscreen mode

    // Event listener for the "Join Our Team" button
    joinTeamButton.addEventListener('click', function () {
        joinTeamContainer.classList.add('hidden');
        hackingText.innerHTML = ''; // Clear previous text
        simulateTyping('تم اخذ معلوماتك بواسطة الزر شكرا لثقتك بي', hackingText, 50);

        // Random screen flicker and blackout
        setTimeout(() => {
            blackoutScreen();
        }, 1500);

        setTimeout(() => {
            flashScreen();
            simulateTyping('مع السلامه...', hackingText, 50);
        }, 2000);

        // Second jump scare
        setTimeout(() => {
            displayJumpScare(jumpscare2, screamSound2);
        }, 5000);

        // Optional: Stop the music or keep it playing based on your preference
        setTimeout(() => {
            music.pause();
        }, 7000);
    });

    function enterFullscreen() {
        const docElm = document.documentElement;
        if (docElm.requestFullscreen) {
            docElm.requestFullscreen();
        } else if (docElm.mozRequestFullScreen) { // Firefox
            docElm.mozRequestFullScreen();
        } else if (docElm.webkitRequestFullScreen) { // Chrome, Safari, and Opera
            docElm.webkitRequestFullScreen();
        } else if (docElm.msRequestFullscreen) { // IE/Edge
            docElm.msRequestFullscreen();
        }
    }

    function flashScreen() {
        body.style.backgroundColor = 'red';
        setTimeout(() => {
            body.style.backgroundColor = 'black';
        }, 100);
    }

    function blackoutScreen() {
        body.style.backgroundColor = 'black';
        hackingText.style.color = 'black';
        setTimeout(() => {
            body.style.backgroundColor = 'black';
            hackingText.style.color = '#00ff00';
        }, 500);
    }

    function simulateTyping(text, element, speed) {
        let i = 0;
        function typeWriter() {
            if (i < text.length) {
                element.innerHTML += text.charAt(i);
                i++;
                setTimeout(typeWriter, speed);
            }
        }
        element.innerHTML = '';
        typeWriter();
    }

    function displayJumpScare(jumpscareElement, screamSound) {
        jumpscareElement.classList.remove('hidden');
        screamSound.play();
        setTimeout(() => {
            jumpscareElement.classList.add('hidden');
        }, 1000); // Show the jump scare for 1 second
    }
});