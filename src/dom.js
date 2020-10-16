const searchbox = document.querySelector('.search-box');
const city = document.querySelector('.city');

const domElements = (() => {
  const showCity = (res) => {
    city.innerText = `${res.name}, ${res.sys.country}`;
  };

  return {
    showCity,
  };
})();

export {
  searchbox,
  domElements,
};
