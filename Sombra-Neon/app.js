const player = document.getElementById('player')
console.log(player);
//Funcion para darle play a la music
function play() {
    if (player.paused) {
        toggleIcon();
        return player.play();
    } else {
        toggleIcon();
        return player.pause();
    }
}

function toggleIcon() {
    const iconPlay = document.getElementById('iconPlay');
    iconPlay.classList.toggle('fa-pause');
    iconPlay.classList.toggle('fa-play');
}

//Funcion para cambiar de icono cuando termine cambie de cancion

function classIconPlay() {
    const iconPlay = document.getElementById('iconPlay');
    iconPlay.classList.remove('fa-solid fa-play')
    iconPlay.classList.add('fa-solid fa-pause')
}









