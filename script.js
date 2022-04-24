
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
    recentStorage();
})
    
}

button.addEventListener('click', informationfunction);

var curCity = document.querySelector("#currentCity");
var listWeather = document.querySelector("#weath");
var listTemp = document.querySelector("#temp");
var listHum = document.querySelector("#hum");
var listWind = document.querySelector("#wind");

function renderFetch(){
    
    $('#currentCity').html(cityName);
    $('#weath').html(weatherValue);
    $('#temp').html(temperatureValue + " ºC");
    $('#hum').html(humidityValue + " (%)");
    $('#wind').html(windValue + " (m/s)");
    
}

var recentC;
var recent1 = document.querySelector("#rc1");
var recent2 = document.querySelector("#rc2");
var recent3 = document.querySelector("#rc2");

function recentStorage(){
    recentC = cityName;
    localStorage.setItem("recent1", recentC);
    var lastC1 = (localStorage.getItem("recent1"));
    recent1.textContent = lastC1;

    var lastC2 = (localStorage.getItem("recent1"));
    localStorage.setItem("recent2",lastC2);
        
}