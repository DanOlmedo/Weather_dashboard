
var input = document.querySelector('#location');

var button = document.querySelector('#locationbtn');

var temperatureValue;
var humidityValue;
var weatherValue;
var windValue;
var cityName;

function forecast() {

    fetch ('https://api.openweathermap.org/data/2.5/forecast/daily?lat='+input.value+'&appid=ae90054c5cfbcc338314940f67ed4e1e')
    .then(response => response.json())
    .then(data => console.log(data))
    // .then(
    //     data => {

    // })
        
    }

function informationfunction() {

fetch ('https://api.openweathermap.org/data/2.5/weather?q='+input.value+'&appid=ae90054c5cfbcc338314940f67ed4e1e&units=metric')
.then(response => response.json())
// .then(data => console.log(data))
.then(
    data => {
    cityName = data['name'];
    temperatureValue = data['main']['temp'];
    humidityValue = data ['main']['humidity'];
    weatherValue = data['weather']["0"]["main"];
    windValue = data['wind']['speed'];
    console.log(cityName);
    console.log(temperatureValue);
    console.log(humidityValue);
    console.log(weatherValue);
    console.log(windValue);
    renderFetch();
})
    
}

button.addEventListener('click', informationfunction);

var curCity = document.querySelector("#currentCity");
var listWeather = document.querySelector("#weath");
var listTemp = document.querySelector("#temp");
var listHum = document.querySelector("#hum");
var listWind = document.querySelector("#wind");

var recent1;
var recent2;
var recent3;

function renderFetch(){
    
    $('#currentCity').html(cityName);
    $('#weath').html(weatherValue);
    $('#temp').html(temperatureValue + " ºC");
    $('#hum').html(humidityValue + " (%)");
    $('#wind').html(windValue + " (m/s)");
    
}

function recentStorage(){
    localStorage.setItem("recent1", cityName)
}