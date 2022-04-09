const quote = document.querySelector('.quote'),
      author = document.querySelector('.author'),
      changeQuote = document.querySelector('.change-quote');

async function getQuotes() {
  const quotes = 'data.json';
  const res = await fetch(quotes);
  const data = await res.json();

  let randomNumber = getRandomInt(0, data.length + 1);
  quote.textContent = data[randomNumber].text;
  author.textContent = data[randomNumber].author;
}

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
}

changeQuote.addEventListener('click', getQuotes);

export default getQuotes;