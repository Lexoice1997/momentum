function backgroundImages(x = 'github') {
  const body = document.querySelector('body'),
        slidePrev = document.querySelector('.slide-prev'),
        slideNext = document.querySelector('.slide-next');

  let rndNum = getRandomInt(1, 21);

  function setBgGithub() {
    let randomNumber = String(rndNum).padStart(2, '0');
    let season = getTimeOfDay();

    const img = new Image();
    img.src = `https://raw.githubusercontent.com/rolling-scopes-school/stage1-tasks/assets/images/${season}/${randomNumber}.jpg`;
    img.onload = () => {
      body.style.backgroundImage = `url('https://raw.githubusercontent.com/rolling-scopes-school/stage1-tasks/assets/images/${season}/${randomNumber}.jpg')`;
    };

    function getTimeOfDay(){
      const date = new Date();
      const hours = date.getHours();

      if (Math.floor(hours / 6) === 1) {
        return 'morning'
      } else if (Math.floor(hours / 6) === 2) {
        return  'afternoon'
      } else if (Math.floor(hours / 6) === 3) {
        return 'evening'
      } else {
        return 'night'
      }
    }

    console.log('github')
  }

  async function getImageByUnsplash() {
    const url = 'https://api.unsplash.com/photos/random?query=morning&client_id=aZUdfJJrHuffX78kw0Mpa7gdT6qEpSne5jUQ0i_d8wA';
    const res = await fetch(url);
    const data = await res.json();

    let imgUrl = data.urls.regular;

    const img = new Image();
    img.src = imgUrl;
    img.onload = () => {
      body.style.backgroundImage = `url(${imgUrl})`;
    }

    console.log('unsplash')
  }

  async function getImageByFlickr() {
    const url = 'https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=857ab81b3acbdba9c2cc9d138cc6ea76&tags=nature&extras=url_l&format=json&nojsoncallback=1';
    const res = await fetch(url);
    const data = await res.json();

    let rndNumber = getRandomInt(0, 100);

    let imgUrl = data.photos.photo[rndNumber].url_l;

    const img = new Image();
    img.src = imgUrl;
    img.onload = () => {
      body.style.backgroundImage = `url(${imgUrl})`;
    }

    console.log('flickr')
  }

  function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min; //Максимум не включается, минимум включается
  }

  if (x == 'github') {
    setBgGithub();

    slideNext.removeEventListener('click', getImageByUnsplash)
    slidePrev.removeEventListener('click', getImageByUnsplash)

    slideNext.removeEventListener('click', getImageByFlickr)
    slidePrev.removeEventListener('click', getImageByFlickr)

    slideNext.addEventListener('click', getSlideNext);
    slidePrev.addEventListener('click', getSlidePrev);
  } else if (x == 'unsplash') {
    getImageByUnsplash()

    slideNext.removeEventListener('click', getSlideNext)
    slidePrev.removeEventListener('click', getSlideNext)

    slideNext.removeEventListener('click', getImageByFlickr)
    slidePrev.removeEventListener('click', getImageByFlickr)

    slideNext.addEventListener('click', getImageByUnsplash);
    slidePrev.addEventListener('click', getImageByUnsplash);
  } else if (x == 'flickr'){
    getImageByFlickr()

    slideNext.removeEventListener('click', getSlideNext)
    slidePrev.removeEventListener('click', getSlideNext)

    slideNext.removeEventListener('click', getImageByUnsplash)
    slidePrev.removeEventListener('click', getImageByUnsplash)

    slideNext.addEventListener('click', getImageByFlickr);
    slidePrev.addEventListener('click', getImageByFlickr);
  }

  function getSlideNext() {
    if (rndNum > 20) {
      rndNum = 1;
    } else {
      rndNum += 1;
    }

    setBgGithub();
  }

  function getSlidePrev() {
    if (rndNum < 1) {
      rndNum = 20;
    } else {
      rndNum -= 1;
    }

    setBgGithub();
  }
}

export default backgroundImages;


