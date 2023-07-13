// global variables that need to be stored and reference in multiple functions
var cityInputEl = document.querySelector("#city-search");
var searchBtn = document.querySelector("#search-btn");
var weatherResultEl = document.getElementById('current-weather');
var temperature = document.getElementById('current-temp');

var APIkey = "c85ff8dc69a078677f515dbab813d971"


function fetchWeatherData() {
    var cityName = cityInputEl.value;
    var currentWeatherUrl = 'https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${APIkey}&units=metric';
    // var forcastUrl = 'https://api.openweathermap.org/data/2.5/forecast?q=${cityName}&appid=${APIkey}&units=metric';

    // Fetching the weather data
    fetch(currentWeatherUrl)
        .then(response => response.json())
        .then(data => {
            console.log(data)
            // storing the weather data in a variable //
            // var weatherData = data;
            var currentTemp = data.main.temp;
            var currentHumidity = data.main.humidity
            var currentWind = data.wind.speed
            var currentWeatherIcon = data.weather[0];
            document.getElementById('city-search').innerText = cityName;
            document.getElementById('current-temp').innerText = 'City Name: ${temperature} °C';
            document.getElementById('current-humidity').innerText = currentTemp;
            document.getElementById('current-wind')
            // var currentTemp = data.main.temp;
            // var currentWind = data.wind.speed;
            // var currentHumidity = data.main.humidity;
            // // Access the info from the weather data //
            // var tempurature = weatherData.main.temp;
            // var weatherDescription = weatherData.weather[0].description;

            // Show the weather result container
            weatherResultEl.style.display = 'block';
            fetch(forcastUrl)
            .then(response => response.json())
            .then(forcastData => {
                function fiveDayForcast() {
                
            }})

        })
        .catch(error => {
            console.log('Error fetching weather data:', error);
        });

}


// 5 day forcat
// Map forcast

// event listener //
searchBtn.addEventListener("click", fetchWeatherData)


// document.getElementById('tempurature').innerText = tempurature;
            // document.getElementById('description').innerText = weatherDescription;

//   .then(function (response) {
//     return response.json();
//   })
//   .then(function (data) {
//     console.log('Fetch Response \n-------------');
//     console.log(data);
//     for (var i = 0; i < data.length; i++) {
//       console.log(data[i].name);
//     }
//     console.log("********");