var input = document.querySelector('#location');
var button = document.querySelector('#locationbtn');

var currentCity = document.querySelector('#currentCity');
var currentWeather = document.querySelector('#currentWeather');
var currentTemperature = document.querySelector('#currentTemperature');
var currentHumidity = document.querySelector('#currentHumidity');
var currentWind = document.querySelector('#currentWind');

function informationfunction() {

    fetch ('https://api.openweathermap.org/data/2.5/weather?q='+input.value+'&appid=ae90054c5cfbcc338314940f67ed4e1e&units=metric')
    .then(response => response.json())
    //.then(data => console.log(data))
    .then(
        data => {
         cityName = data['name'];
         temperatureValue = data['main']['temp'];
         humidityValue = data ['main']['humidity'];
         weatherValue = data['weather']["0"]["main"];
         windValue = data['wind']['speed'];
         currentCity.innerHTML = "Current city: " + cityName;
         currentWeather.innerHTML = "Current weather: " + weatherValue;
         currentTemperature.innerHTML = "Current temperature (ºC): " + temperatureValue;
         currentHumidity.innerHTML = "Current humidity (%): " + humidityValue;
         currentWind.innerHTML = "Current wind speed (m/s): " + windValue;
        
});

}

button.addEventListener('click', informationfunction);