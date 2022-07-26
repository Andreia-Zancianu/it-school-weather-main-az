const bucharest = document.querySelector(".dropdown-menu .bucharest");
const timisoara = document.querySelector(".dropdown-menu .timisoara");
const oradea = document.querySelector(".dropdown-menu .oradea");
const iasi = document.querySelector(".dropdown-menu .iasi");
const sibiu = document.querySelector(".dropdown-menu .sibiu");

function updateCurrentCity(city) {
  const currentCity = document.querySelector(".current-city");
  currentCity.innerHTML = city;
}

function updateWeather(city) {
  // Actualizam orasul din localStorage.
  localStorage.setItem("city", city);
  // Actualizam orasul afisat pe ecran.
  updateCurrentCity(city);
  // Reafisam vremea curenta, pentru noul oras.
  displayCurrentWeather(city);
  // Reafisam prognoza pe 5 zile, pentru noul oras.
  displayWeatherForecast(city);
}

// Adauagam event listenerii pe butoanele din dropdown.
bucharest.addEventListener("click", function () {
  updateWeather("București");
});
timisoara.addEventListener("click", function () {
  updateWeather("Timișoara");
});
oradea.addEventListener("click", function () {
  updateWeather("Oradea");
});
iasi.addEventListener("click", function () {
  updateWeather("Iași");
});
sibiu.addEventListener("click", function () {
  updateWeather("Sibiu");
});
