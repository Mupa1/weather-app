import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import searchbox from './dom';

const key = 'e0fbc2a16f333c42771b462f6a2ea420';
const baseUrl = 'https://api.openweathermap.org/data/2.5/';

const displayResults = (weather) => {
  console.log(`${weather.name}, ${Math.round(weather.main.temp)}`);
};

const fetchResults = (city) => {
  fetch(`${baseUrl}weather?q=${city}&units=metric&APPID=${key}`)
    .then(weather => weather.json())
    .then(displayResults);
};

const setQuery = (e) => {
  if (e.keyCode === 13) {
    fetchResults(searchbox.value);
  }
};

searchbox.addEventListener('keypress', setQuery);