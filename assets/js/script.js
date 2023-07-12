// global variables that need to be stored and reference in multiple functions
var cityInputEl = document.querySelector("#city-search");
var searchBtn = document.querySelector("#search-btn");

var APIkey = "c85ff8dc69a078677f515dbab813d971"


function fetchWeatherData() {
    var cityName = cityInputEl.value;
    var requestUrl = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${APIkey}&units=metric` 
    // Fetching the weather data
    fetch(requestUrl)
        .then(response => response.json())
        .then(data => {
            console.log(data)
            // storing the weather data in a variable //
            // var weatherData = data;

            // // Access the info from the weather data //
            // var tempurature = weatherData.main.temp;
            // var weatherDescription = weatherData.weather[0].description;

            // document.getElementById('tempurature').innerText = tempurature;
            // document.getElementById('description').innerText = weatherDescription;
        })
        .catch(error => {
            console.log('Error fetching weather data:', error);
        });

}


// 5 day forcat
// Map forcast
function fiveDayForcast() {

}


// event listener //
searchBtn.addEventListener("click", fetchWeatherData)


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