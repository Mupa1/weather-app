import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import {
  searchbox,
  domElements,
  btns,
} from './dom';

const key = 'e0fbc2a16f333c42771b462f6a2ea420';
const baseUrl = 'https://api.openweathermap.org/data/2.5/';

const switchTemps = (res) => {
  btns.addEventListener('click', event => {
    if (event.target.classList.contains('celcius')) {
      domElements.showTempC(res);
    } else if (event.target.classList.contains('fahrenheit')) {
      domElements.showTempF(res);
    }
  });
};

const displayResults = (weather) => {
  domElements.showCity(weather);
  domElements.showTempC(weather);
  switchTemps(weather);
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
