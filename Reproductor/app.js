const player = document.getElementById('player')
console.log(player);

function play() {
    if (player.paused) {
        toggleButton();
        return (
            player.play(),
            updateProgress()
        );
    } else {
        toggleButton();
        return (
            player.pause(),
            clearInterval(interval)
        )

    }
}

function toggleButton() {
    const playIcon = document.getElementById('icon-play');
    playIcon.classList.toggle('fa-pause');
    playIcon.classList.toggle('fa-play');
}

function VolumenUp() {
    if (player.volume <= 0.9) {
        return (
            player.volume += 0.1,
            volumen.value = player.volume,
            textVol = volumen.value * 100 + '%'
        ),
            document.getElementById('vol-text').innerText = textVol;
    } else {
        return alert('El volumen esta al maximo.');
    }
}

function VolumenDown() {
    if (player.volume >= 0.1) {
        return (
            player.volume -= 0.1,
            volumen.value = player.volume,
            textVol = volumen.value * 100 + '%'
        ),
            document.getElementById('vol-text').innerText = textVol;
    } else {
        return alert('El volumen esta al minimo.');
    }
}

const volumen = document.getElementById('volumen')
volumen.oninput = (e) => {
    vol = e.target.value;
    player.volume = vol
    textVol = vol * 100 + '%';
    // document.getElementById('vol-text').innerText = textVol;
}

player.preload = 'metadata';

let bar = document.getElementById('progress');

const updateProgress = () => {
    console.log(player.currentTime)
    if (player.currentTime + 1 > 0) {
        interval = setInterval(function () {
            bar.value = ((player.currentTime / player.duration) * 100)
            let duracionSegundos = player.duration.toFixed(0);
            dura = secondsToString(duracionSegundos);
            let actualSegundos = player.currentTime.toFixed(0)
            actual = secondsToString(actualSegundos);

            duracion = actual + ' / ' + dura

            document.getElementById('timer').innerText = duracion
        }, 1000)
    }
    if (player.ended) {
        nextMusic();//Reproducir la siguiente pista
    }
}

console.log(player.firstElementChild.title)

bar.addEventListener('click', adelantar);
function adelantar(e) {
    const scrubTime = (e.offsetX / progress.offsetWidth) * player.duration;
    player.currentTime = scrubTime;
    bar.value = (player.currentTime / player.duration) * 100;

}

function secondsToString(seconds) {
    var hour = "";
    if (seconds > 3600) {
        hour = Math.floor(seconds / 3600);
        hour = (hour < 10) ? '0' + hour : hour;
        hour += ":"
    }
    var minute = Math.floor((seconds / 60) % 60);
    minute = (minute < 10) ? '0' + minute : minute;
    var second = seconds % 60;
    second = (second < 10) ? '0' + second : second;
    return hour + minute + ':' + second;
};