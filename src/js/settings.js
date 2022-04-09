import backgroundImages from "./background";

// const arrSettings = ['Time', 'Date', 'Welcome', 'Quote', 'Weather', 'Audio'];
// const displayContent = document.querySelector('.display-content');


function displayCont() {
  const timeCheck = document.querySelector('.time-check');
  const timeCont = document.querySelector('.time');

  const dateCheck = document.querySelector('.date-check');
  const dateCont = document.querySelector('.date');

  const welcomeCheck = document.querySelector('.welcome-check');
  const welcomeCont = document.querySelector('.greeting-container');

  const quoteCheck = document.querySelector('.quote-check');
  const quoteCont = document.querySelector('.footer');

  const weatherCheck = document.querySelector('.weather-check');
  const weatherCont = document.querySelector('.weather');

  const audioCheck = document.querySelector('.audio-check');
  const audioCont = document.querySelector('.player');
  // arrSettings.forEach(item => {
  //   displayContent.innerHTML += `<div><span>${item}</span><input class="checkDisplay" type="checkbox"></div>`;
  // });
  //
  // const checkDisplay = document.querySelectorAll('.checkDisplay');

  // checkDisplay.forEach(item => {
  //   item.addEventListener('click',)
  // });
  //
  // function clickCheckbox(e) {
  //   if (event.target === 'checked' ) {
  //
  //   }
  // }

  timeCheck.addEventListener('click', () => {
    if (timeCheck.checked) {
      timeCont.classList.remove('trans-opacity_display');
      timeCont.classList.add('trans-opacity');
    } else {
      timeCont.classList.remove('trans-opacity');
      timeCont.classList.add('trans-opacity_display');
    }
  })

  dateCheck.addEventListener('click', () => {
    if (dateCheck.checked) {
      dateCont.classList.remove('trans-opacity_display');
      dateCont.classList.add('trans-opacity');
    } else {
      dateCont.classList.remove('trans-opacity');
      dateCont.classList.add('trans-opacity_display');
    }
  })

  welcomeCheck.addEventListener('click', () => {
    if (welcomeCheck.checked) {
      welcomeCont.classList.remove('trans-opacity_display');
      welcomeCont.classList.add('trans-opacity');
    } else {
      welcomeCont.classList.remove('trans-opacity');
      welcomeCont.classList.add('trans-opacity_display');
    }
  })

  quoteCheck.addEventListener('click', () => {
    if (quoteCheck.checked) {
      quoteCont.classList.remove('trans-opacity_display');
      quoteCont.classList.add('trans-opacity');
    } else {
      quoteCont.classList.remove('trans-opacity');
      quoteCont.classList.add('trans-opacity_display');
    }
  })

  weatherCheck.addEventListener('click', () => {
    if (weatherCheck.checked) {
      weatherCont.classList.remove('trans-opacity_display');
      weatherCont.classList.add('trans-opacity');
    } else {
      weatherCont.classList.remove('trans-opacity');
      weatherCont.classList.add('trans-opacity_display');
    }
  })

  audioCheck.addEventListener('click', () => {
    if (audioCheck.checked) {
      audioCont.classList.remove('trans-opacity_display');
      audioCont.classList.add('trans-opacity');
    } else {
      audioCont.classList.remove('trans-opacity');
      audioCont.classList.add('trans-opacity_display');
    }
  })

  const bgOption = document.querySelectorAll('.background-option');
  const bgSelect = document.querySelector('.background')

  function checkBg() {
    bgOption.forEach(item => {
      if (item.selected) {
        backgroundImages(item.value)
      }
    })
  }

  bgSelect.addEventListener('change', checkBg);

  backgroundImages()
}

export default displayCont;
