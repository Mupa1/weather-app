const searchbox = document.querySelector('.search-box');
const city = document.querySelector('.city');
const temp = document.querySelector('.temp');
const btns = document.querySelector('.btn-group');

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

  return {
    showCity,
    showTempC,
    showTempF,
  };
})();

export {
  searchbox,
  domElements,
  btns,
};
