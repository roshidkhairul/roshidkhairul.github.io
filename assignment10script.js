const key = "3046d3b7ffbce27ad9bb7e2cd6d82238";
function getNewWorkWeather(city) {
  fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${key}`
  )
    .then((response) => response.json())
    .then((data) => {
      console.log(data);

      let showNewWorkCity = (document.getElementById("temp").innerText =
        data.main.temp);
    });
}
function getLosWeather(city) {
  fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${key}`
  )
    .then((response) => response.json())
    .then((data) => {
      console.log(data);

      let showNewWorkCity = (document.getElementById("tempLos").innerText =
        data.main.temp);
    });
}
