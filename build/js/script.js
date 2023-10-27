const wrapper = document.querySelector('.wrapper'),
    musicImg = document.querySelector('img'),
    musicName = document.querySelector('.name'),
    musicArtist = document.querySelector('.artist'),
    playPauseBtn = document.querySelector('.play-pause'),
    prevBtn = document.querySelector('#prev'),
    nextBtn = document.querySelector('#next'),
    randomBtn = document.querySelector('#random');
    repeatBtn = document.querySelector('#repeat');
    mainAudio = document.querySelector('#main-audio'),
    progressArea = document.querySelector('.progress-area'),
    progressBar = document.querySelector('.progress-bar'),
    wave = document.querySelector('#wave');

    let allMusic = [
        {
            name: 'Amapiano',
            artist: 'Asake Ft Olamide',
            img: 'Amapiano',
            src: 'Amapiano'
        },
        {
            name: 'Anabella',
            artist: 'Khaid',
            img: 'Anabella',
            src: 'Anabella'
        },
        {
            name: 'Aquafina',
            artist: 'Young John',
            img: 'Aquafina',
            src: 'Aquafina'
        },
        {
            name: 'Bad Boy',
            artist: 'Lasmid',
            img: 'BadBoy',
            src: 'BadBoy'
        },
        {
            name: 'Calm Down(Remix)',
            artist: 'Rema Ft Selena Gomez',
            img: 'CalmDown(Remix)',
            src: 'CalmDown(Remix)'
        },
        {
            name: 'Compromise',
            artist: 'Fireboy Ft Rema',
            img: 'Compromise',
            src: 'Compromise'
        },
        {
            name: 'Efejoku',
            artist: 'Lil Kesh',
            img: 'Efejoku',
            src: 'Efejoku'
        },
        {
            name: 'Elon Musk(Remix)',
            artist: 'Shallipopi Ft Zlatan Ft Fireboy',
            img: 'ElonMusk(Remix)',
            src: 'ElonMusk(Remix)'
        },
        {
            name: 'Joha',
            artist: 'Asake',
            img: 'Joha',
            src: 'Joha'
        },
        {
            name: 'Kristy',
            artist: 'Ruger',
            img: 'Kristy',
            src: 'Kristy'
        },
        {
            name: 'Last Last',
            artist: 'Burna Boy',
            img: 'LastLast',
            src: 'LastLast'
        },
        {
            name: 'Lokation',
            artist: 'Tekno',
            img: 'Lokation',
            src: 'Lokation'
        },
        {
            name: 'Money Over Love',
            artist: 'Berri Tiga',
            img: 'MoneyOverLove',
            src: 'MoneyOverLove'
        },
        {
            name: 'Ojapiano',
            artist: 'Kcee',
            img: 'Ojapiano',
            src: 'Ojapiano'
        },
        {
            name: 'Papilo',
            artist: 'Smada Ft Odumodublack',
            img: 'Papilo',
            src: 'Papilo'
        },
        {
            name: 'Rush',
            artist: 'Ayra Star',
            img: 'Rush',
            src: 'Rush'
        },
        {
            name: 'Single Again(Remix)',
            artist: 'Harmonize Ft Ruger',
            img: 'SingleAgain(Remix)',
            src: 'SingleAgain(Remix)'
        },
        {
            name: 'Shu-Peru',
            artist: 'Kizz Daniel',
            img: 'ShuPeru',
            src: 'ShuPeru'
        },
        {
            name: 'Terminator',
            artist: 'King Promise',
            img: 'Terminator',
            src: 'Terminator'
        },
        {
            name: 'Yawa',
            artist: 'Fireboy',
            img: 'Yawa',
            src: 'Yawa'
        }
    ];

let musicIndex = Math.floor((Math.random() * allMusic.length) + 1); 
isMusicPaused = true;

window.addEventListener('load', () => {
    loadMusic(musicIndex);
});

function loadMusic(indexNumb) {
    musicName.innerText = allMusic[indexNumb - 1].name;
    musicArtist.innerText = allMusic[indexNumb - 1].artist;
    musicImg.src = `images/${allMusic[indexNumb - 1].src}.jpg`;
    mainAudio.src = `music/${allMusic[indexNumb - 1].src}.mp3`;
}

function playMusic() {
    wrapper.classList.add('paused');
    musicImg.classList.add('animate-rotation');
    wave.classList.add('loader');
    playPauseBtn.innerHTML = '<i class="fa fa-pause" aria-hidden="true"></i>';
    mainAudio.play();
}

function pauseMusic() {
    wrapper.classList.remove('paused');
    musicImg.classList.remove('animate-rotation');
    wave.classList.remove('loader');
    playPauseBtn.innerHTML = '<i class="fa fa-play" aria-hidden="true"></i>';
    mainAudio.pause();
}

function prevMusic() {
    musicIndex--;
    musicIndex < 1 ? musicIndex = allMusic.length : musicIndex = musicIndex;
    loadMusic(musicIndex);
    playMusic();
}

function nextMusic() {
    musicIndex++;
    musicIndex > allMusic.length ? musicIndex = 1 : musicIndex = musicIndex;
    loadMusic(musicIndex);
    playMusic();
}

function replayMusic() {
    loadMusic(musicIndex);
    playMusic();
}

function shuffleMusic() {
    let arr = allMusic;

    for(let i = arr.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));

        let temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
    }
    musicIndex === arr
    loadMusic(musicIndex);
    playMusic()
}

playPauseBtn.addEventListener("click", () => {
    const isMusicPlay = wrapper.classList.contains("paused");
    isMusicPlay ? pauseMusic() : playMusic();
});

prevBtn.addEventListener("click", () => {
    prevMusic();
})

nextBtn.addEventListener("click", () => {
    nextMusic();
})

randomBtn.addEventListener('click', () => {
    shuffleMusic();
})

repeatBtn.addEventListener('click', () => {
    replayMusic();
})

mainAudio.addEventListener("timeupdate", (e) => {
    const currentTime = e.target.currentTime;
    const duration = e.target.duration;
    let progressWidth = (currentTime / duration) * 100;
    progressBar.style.width = `${progressWidth}%`;
    
    let musicCurrentTime = wrapper.querySelector('.current-time'),
        musicDuration = wrapper.querySelector(".max-duration");
    
    mainAudio.addEventListener("loadeddata", () => {
        let mainAdDuration = mainAudio.duration;
        let totalMin = Math.floor(mainAdDuration / 60);
        let totalSec = Math.floor(mainAdDuration % 60);

        if(totalSec < 10) {
            totalSec = `0${totalSec}`;
        }

        musicDuration.innerText = `${totalMin}:${totalSec}`;
    });
    
    let currentMin = Math.floor(currentTime / 60);
    let currentSec = Math.floor(currentTime % 60);

    if(currentSec < 10) {
        currentSec = `0${currentSec}`;
    }

    musicCurrentTime.innerText = `${currentMin}:${currentSec}`; 
});

progressArea.addEventListener("click", (e) => {
    let progressWidth = progressArea.clientWidth;
    let clickedOffsetX = e.offsetX;
    let songDuration = mainAudio.duration;

    mainAudio.currentTime = (clickedOffsetX / progressWidth) * songDuration;
    playMusic();
});

mainAudio.addEventListener("ended", () => {
    nextMusic();
}) 