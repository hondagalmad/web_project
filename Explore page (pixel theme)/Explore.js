const numberOfStars = 200;

for (let i = 0; i < numberOfStars; i++) {
  const star = document.createElement('div');
  star.classList.add('star');

  star.style.top = Math.random() * window.innerHeight + 'px';
  star.style.left = Math.random() * window.innerWidth + 'px';

  const size = Math.random() * 3 + 1;
  star.style.width = size + 'px';
  star.style.height = size + 'px';

  document.body.appendChild(star);

  // CHANGED: Reduced time from 1000 to 10 so stars appear immediately
  setTimeout(() => {
    star.style.opacity = 1; 
    star.style.animation = `twinkle ${2 + Math.random()*2}s infinite`; 
  }, 10); 
}

document.addEventListener('DOMContentLoaded', function() {
    const audio = document.getElementById("bg-music");
    const audioBtn = document.getElementById("audio-control");
    const iconSpan = document.getElementById("icon");

    // Helper function to change the icon
    function updateUI(isPlaying) {
        iconSpan.innerText = isPlaying ? "🔊" : "🔇";
    }

    function toggleMusic() {
        if (audio.paused) {
            // Play music
            audio.play().catch(e => console.log("Audio play error:", e));
            updateUI(true); // Update icon to Speaker
        } else {
            // Pause music
            audio.pause();
            updateUI(false); // Update icon to Mute
        }
    }

    audioBtn.addEventListener('click', toggleMusic);
});