const time = document.querySelector('.time'),
      dateDiv = document.querySelector('.date'),
      greeting = document.querySelector('.greeting'),
      name = document.querySelector('.name');

const showTime = () => {
  const date = new Date();
  const currentTime = date.toLocaleTimeString()
  time.textContent = currentTime;

  showDate();

  getTimeOfDay();

  setTimeout(showTime, 1000);


  function showDate() {
    const date = new Date();
    const options = {month: 'long', day: 'numeric', timeZone: 'UTC'};
    const currentDate = date.toLocaleDateString('en-US', options);
    const dayOfWeek = getWeekDay(date);
    dateDiv.textContent = `${dayOfWeek}, ${currentDate}`;
  }

  function getTimeOfDay() {
    const date = new Date();
    const hours = date.getHours();
    let result;

    if (Math.floor(hours / 6) === 1) {
      result = 'Good morning'
    } else if (Math.floor(hours / 6) === 2) {
      result = 'Good afternoon'
    } else if (Math.floor(hours / 6) === 3) {
      result = 'Good evening'
    } else {
      result = 'Good night'
    }

    greeting.textContent = result;
  }

  function getWeekDay(date) {
    let days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

    return days[date.getDay()];
  }

  function setLocalStorage() {
    localStorage.setItem('name', name.value);
  }
  window.addEventListener('beforeunload', setLocalStorage)

  function getLocalStorage() {
    if(localStorage.getItem('name')) {
      name.value = localStorage.getItem('name');
    }
  }
  window.addEventListener('load', getLocalStorage)
}

export default showTime;







