document.addEventListener('DOMContentLoaded', function() {
    const audio = document.getElementById('bgMusic');
    const audioControl = document.getElementById('audioControl');
    const icon = audioControl.querySelector('i');
    
 
    audio.volume = 0.5; 
    
    audioControl.addEventListener('click', function() {
        if (audio.paused) {
            audio.play();
            icon.classList.remove('fa-volume-mute');
            icon.classList.add('fa-volume-up');
        } else {
            audio.pause();
            icon.classList.remove('fa-volume-up');
            icon.classList.add('fa-volume-mute');
        }
    });
    
    
    document.body.addEventListener('click', function firstInteraction() {
        
        audio.play().then(() => {
            
        }).catch(error => {
            
            console.log('Audio playback blocked:', error);
        });
        
        
        document.body.removeEventListener('click', firstInteraction);
    }, { once: true });
});