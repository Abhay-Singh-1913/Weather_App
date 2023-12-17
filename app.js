// To use your own OpenWeatherMap API key, replace with your API key.
const apikey = "5234346b67b14107dea9578ad86f7574";
const apiurl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchInput = document.querySelector("#cityName");
const searchBth = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon");

async function checkWeather(city) {
  const respone = await fetch(apiurl + city + `&appid=${apikey}`);

  if (respone.status == 404) {
    document.querySelector(".error").style.display = "block";
    document.querySelector(".error").style.color = "blue";
    document.querySelector(".weather").style.display = "none";
  } else {
    var data = await respone.json();

    console.log(data);

    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML =
      Math.round(data.main.temp) + "°c";
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
    document.querySelector(".wind").innerHTML = data.wind.speed + "km/hr";

    if (data.weather[0].main == "Clouds") {
      weatherIcon.src = "./img/clouds.png";
    } else if (data.weather[0].main == "Clear") {
      weatherIcon.src = "./img/clear.png";
    } else if (data.weather[0].main == "Drizzle") {
      weatherIcon.src = "./img/drizzle.png";
    } else if (data.weather[0].main == "Rain") {
      weatherIcon.src = "./img/rain.png";
    } else if (data.weather[0].main == "Mist") {
      weatherIcon.src = "./img/Mist.png";
    } else if (data.weather[0].main == "Snow") {
      weatherIcon.src = "./img/snow.png";
    } else if (data.weather[0].main == "Smoke") {
      weatherIcon.src = "./img/smoke.png";
    }
    document.querySelector(".error").style.display = "none";
    document.querySelector(".weather").style.display = "block";
  }
}

searchBth.addEventListener("click", () => {
  checkWeather(searchInput.value);
});

