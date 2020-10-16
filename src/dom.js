const searchbox = document.querySelector('.search-box');
const city = document.querySelector('.city');
const temp = document.querySelector('.temp');
const btns = document.querySelector('.btn-group');
const description = document.querySelector('.description');
const date = document.querySelector('.date');

const domElements = (() => {
  const showCity = (res) => {
    city.innerText = `${res.name}, ${res.sys.country}`;
  };

  const showTempC = (res) => {
    temp.innerHTML = `${Math.round(res.main.temp)}<span>°C</span>`;
  };

  const showTempF = (res) => {
    temp.innerHTML = `${Math.round((res.main.temp * 1.8) + 32)}<span>°F</span>`;
  };

  const showDescription = (res) => {
    description.innerText = `${res.weather[0].description}`;
  };

  const showDate = (res) => {
    date.innerText = `${res}`;
  };

  return {
    showCity,
    showTempC,
    showTempF,
    showDescription,
    showDate,
  };
})();

export {
  searchbox,
  domElements,
  btns,
};
