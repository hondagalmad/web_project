document.addEventListener('DOMContentLoaded', function() {
    const audio = document.getElementById("bg-music");
    const typing = document.getElementById("type");

    const audioBtn = document.getElementById("audio-control");
    const iconSpan = document.getElementById("icon");

    let typingPlayed = false;

    function updateUI(isPlaying) {
        iconSpan.innerText = isPlaying ? "🔊" : "🔇";
    }

    function toggleMusic() {
        if (audio.paused) {
            audio.play().catch(e => console.log(e));

            if (!typingPlayed) {
                typing.play().catch(e => console.log(e));
                typingPlayed = true;
            }

            updateUI(true);
        } else {
            audio.pause();
            updateUI(false);
        }
    }

    audioBtn.addEventListener('click', toggleMusic);
});