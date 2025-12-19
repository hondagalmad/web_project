// call items from html and images
const soundButton = document.getElementById('soundButton');
const gameMusic = document.getElementById('gameMusic'); 
const soundOnImage = 'sound_on_icon.png';  
const soundOffImage = 'sound_off_icon.png'; 

let isSoundOn = false; 

// playing music
function playGameSound() 
{
    gameMusic.play(); 
}

// mutemusic
function muteGameSound()
{
    gameMusic.pause(); 
}

// swapping 
function toggleSound() {
    if (isSoundOn) 
    {
        
        isSoundOn = false;
        soundButton.src = soundOffImage; 
        muteGameSound();                  
        
    } 
    else 
    {
        isSoundOn = true;
        soundButton.src = soundOnImage;   
        playGameSound();                 
    }
}

// mouse matching
soundButton.addEventListener('click', toggleSound);