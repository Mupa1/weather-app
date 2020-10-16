const searchbox = document.querySelector('.search-box');
const city = document.querySelector('.city');
const temp = document.querySelector('.temp');

const domElements = (() => {
  const showCity = (res) => {
    city.innerText = `${res.name}, ${res.sys.country}`;
  };

  const showTempC = (res) => {
    temp.innerHTML = `${Math.round(res.main.temp)}<span>°C</span>`;
  };

  return {
    showCity,
    showTempC,
  };
})();

export {
  searchbox,
  domElements,
};
