import playList from "./playList";

const audio = document.querySelector('audio'),
      play = document.querySelector('.play'),
      playNext = document.querySelector('.play-next'),
      playPrev = document.querySelector('.play-prev'),
      ul = document.querySelector('.play-list');

playList.forEach(song => {
  const li = document.createElement('li');
  li.classList.add('play-item');
  li.textContent = song.title;
  ul.append(li);
})

let isPlay = false;
let i = 0

function getAudio() {
  function playAudio() {
    audio.src = playList[i].src;
    audio.currentTime = 0;
  }

  function togglePlay() {
    playAudio();

    if (!isPlay) {
      audio.play();
      isPlay = true;
      play.classList.add('pause');
    } else {
      audio.pause();
      isPlay = false;
      play.classList.remove('pause');
    }
  }

  function nextSong() {
    if (i >= playList.length - 1) {
      i = 0;
    } else {
      i++;
    }

    playAudio();
    audio.play()

    if (!isPlay) {
      play.classList.add('pause')
    }

    isPlay = true;
  }

  function prevSong() {
    if (i <= 0) {
      i = playList.length - 1;
    } else {
      i--;
    }

    playAudio();
    audio.play();

    if (!isPlay) {
      play.classList.add('pause')
    }

    isPlay = true;
  }

  if (audio.currentTime > audio.duration) {
    nextSong();
  }

  play.addEventListener('click', togglePlay);
  playNext.addEventListener('click', nextSong);
  playPrev.addEventListener('click', prevSong);
}

export default getAudio;



