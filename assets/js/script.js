

function fetchWeatherData() {
    var requestUrl = 'https://openweathermap.org/forecast5';
}

// 5 day forcat
// Map forcast

// Fetching the weather data
fetch(requestUrl) {
.then(response => response.json())
        .then(data => {
            // storing the weather data in a variable //
            var weatherData = data;

            // Access the info from the weather data //
            var tempurature = weatherData.main.temp;
            var weatherDescription = weatherData.weather[0].description;

            document.getElementById('tempurature').innerText = tempurature;
            document.getElementById('description').innerText = weatherDescription;
        })
        .cath(error => {
            console.log('Error fetching weather data:', error);
        });
}




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