const numberOfStars = 200;

for (let i = 0; i < numberOfStars; i++) {
  const star = document.createElement('div');
  star.classList.add('star');

  star.style.top = Math.random() * 100 + '%';
  star.style.left = Math.random() * 100 + '%';

  const size = Math.random() * 3 + 1;
  star.style.width = size + 'px';
  star.style.height = size + 'px';

  document.body.appendChild(star);

  setTimeout(() => {
    star.style.opacity = 1; 
    star.style.animation = `twinkle ${2 + Math.random()*2}s infinite`; 
  }, 10); 
}

document.addEventListener('DOMContentLoaded', function() {
    const audio = document.getElementById("bg-music");
    const audioBtn = document.getElementById("audio-control");
    const iconSpan = document.getElementById("icon");

    function updateUI(isPlaying) {
        iconSpan.innerText = isPlaying ? "🔊" : "🔇";
    }

    function toggleMusic() {
        if (audio.paused) {
            audio.play().catch(e => console.log("Audio play error:", e));
            updateUI(true);
        } else {
            audio.pause();
            updateUI(false);
        }
    }

    audioBtn.addEventListener('click', toggleMusic);
});