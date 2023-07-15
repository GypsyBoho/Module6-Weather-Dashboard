// global variables that need to be stored and reference in multiple functions
var cityInputEl = document.querySelector("#city-search");
var searchBtn = document.querySelector("#search-btn");
var searchHistoryEl = document.getElementById("search-history");
var currentWeatherEl = document.getElementById("current-weather")
var forecastCardsEl = document.getElementById("forecast-cards")
var APIkey = "29e127100ac8dc7c64308dca8be27c2f";

function fetchWeatherData(city) {
    var currentWeatherUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${APIkey}&units=metric`;
    var forecastUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${APIkey}&units=metric`;

    // Fetching the currnent weather data for city
    fetch(currentWeatherUrl)
        .then(response => response.json())
        .then(data => {
            console.log(data)
        updateCurrentWeather(data);
        saveToSearchHistory(city);    
        })
        .catch(error => {
            console.log('Error fetching current weather data:', error);
        });

        fetch(forecastUrl)
        .then(response => response.json())
        .then(data => {
            updateForecast(data);
        })
        .catch(error => {
            console.log("Error fetching forecast data:", error);
        });
}

function updateCurrentWeather(data) {
    currentWeatherEl.innerHTML = "";

    var cityName = data.name;
    var temperature = data.main.temp;
    var humidity = data.main.humidity;
    var windSpeed = data.wind.speed;

    var cityNameEl = document.createElement("h1");
    cityNameEl.textContent = cityName;
    var temperatureEl = document.createElement("p");
    temperatureEl.textContent = "Temperature: " + temperature + " °C";
    var humidityEl = document.createElement("p");
    humidityEl.textContent = "Humidity: " + humidity + "%";
    var windEl = document.createElement("p");
    windEl.textContent = "Wind Speed: " + windSpeed + " m/s";

    currentWeatherEl.appendChild(cityNameEl);
    currentWeatherEl.appendChild(temperatureEl);
    currentWeatherEl.appendChild(humidityEl);
    currentWeatherEl.appendChild(windEl);
}

function updateForecast(data) {
    forecastCardsEl.innerHTML = "";

var forecastList = data.list;
if (forecastList) {
    forecastList.slice(0, 5).forEach((forecast) => {
            var date = forecast.dt_txt.split(" ")[0];
            var temperature = forecast.main.temp;
            var weatherIcon = forecast.weather[0].icon;
            var windSpeed = forecast.wind.speed;
            var humidity = forecast.main.humidity;
    
            var card = document.createElement("div");
            card.classList.add("card");
    
            // create DOM elements and update content //
            var dateEl = document.createElement("h4");
            dateEl.textContent = date;
            var weatherIconEl = document.createElement("img");
            weatherIconEl.src = `https://openweathermap.org/img/wn/${weatherIcon}@2x.png`;
            var temperatureEl = document.createElement("p");
            temperatureEl.textContent = "Temperature: " + temperature + " °C";
            var windEl = document.createElement("p");
            windEl.textContent = "Wind Speed: " + windSpeed + " m/s";
            var humidityEl = document.createElement("p");
            humidityEl.textContent = "Humidity: " + humidity + "%";
        
            // Append elements to the forecast card
            card.appendChild(dateEl);
            card.appendChild(weatherIconEl);
            card.appendChild(temperatureEl);
            card.appendChild(windEl);
            card.appendChild(humidityEl);
        
            // Append forecast cards to the forecast cards container
            forecastCardsEl.appendChild(card);
        });
    } else {
        console.log("Forecast data is undefined");
    }
}

    // Function to save the city to search history and localStorage
    function saveToSearchHistory(city) {
      // Create a new search history item element
      var item = document.createElement("button");
      item.textContent = city;
      item.classList.add("search-history-button")
    
      // Add click event listener to perform a new search when clicked
      item.addEventListener("click", function() {
        fetchWeatherData(city);
      });

      // Checks to see if the city name already existis in the search history //
      var searchHistory = getSearchHistory();
      if(!searchHistory.includes(city)) {
        // Append the item to the search history container
      searchHistoryEl.appendChild(item);

      searchHistory.push(city);
      saveSearchHistory(searchHistory);
      }
    }
      
      function getSearchHistory() {
        var searchHistory = localStorage.getItem("searchHistory");
      }

      // Save the search history to localStorage
      var searchHistory = localStorage.getItem("searchHistory");
      if (searchHistory) {
        searchHistory = JSON.parse(searchHistory);
      } else {
        return [];
      }

      function saveSearchHistory(searchHistory) {
        if (searchHistory.length >= 8) {
          searchHistory.shift();
        }

        localStorage.setItem("searchHistory", JSON.stringify(searchHistory));

      }
      // Cashed my page so adding a clear out of existing search history //
      searchHistoryEl.innerHTML = "";
      localStorage.removeItem("searchHistory")

      // Limit the searches to the last 8 //
      
      searchHistory.push(city);
      localStorage.setItem("searchHistory", JSON.stringify(searchHistory));
    }
    
    // // Function to load search history from localStorage
    // function loadSearchHistory() {
      var searchHistory = localStorage.getItem("searchHistory");
      if (searchHistory) {
        searchHistory = JSON.parse(searchHistory);
        searchHistory.forEach(city => {
          saveToSearchHistory(city);
        });
      }
    }
    
    // Event listener for the search button click
    searchBtn.addEventListener("click", function() {
      var city = cityInputEl.value;
      if (city) {
        fetchWeatherData(city);
        cityInputEl.value = ""; 
      }
    });
    
    // Load search history when the page is loaded
    window.addEventListener("load", loadSearchHistory);
    
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

            // var currentTemp = data.main.temp;
            // var currentWind = data.wind.speed;
            // var currentHumidity = data.main.humidity;
            // // Access the info from the weather data //
            // var tempurature = weatherData.main.temp;
            // var weatherDescription = weatherData.weather[0].description;

            // var cityName = cityInputEl.value;
    // var currentWeatherUrl = 'https://api.openweathermap.org/data/2.5/forecast?q=${cityName}&appid=${29e127100ac8dc7c64308dca8be27c2f}&units=metric';
    // var forecastUrl = 'https://api.openweathermap.org/data/2.5/forecast?q=${cityName}&appid=${APIkey}&units=metric';
    // storing the weather data in a variable //
            // var weatherData = data;
            // var currentTemp = data.main.temp;
            // var currentHumidity = data.main.humidity
            // var currentWind = data.wind.speed
            // var currentWeatherIcon = data.weather[0];
            // document.getElementById('city-search').innerText = cityName;
            // document.getElementById('current-temp').innerText = 'City Name: ${temperature} °C';
            // document.getElementById('current-humidity').innerText = currentTemp;
            // document.getElementById('current-wind')


            // // Show the weather result container
            // weatherResultEl.style.display = 'block';
            // var forecastUrl = 'https://api.openweathermap.org/data/2.5/forecast?q={cityName}&appid={APIkey}&units=metric';
            // // var forecastUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${cityName}&appid=${APIkey}&units=metric`;
            // fetch(forecastUrl)
            //     .then(response => response.json())
            //     .then(forecastData => {
            //         function fiveDayForecast(forecastData) {
            //             var forecastContainer = document.getElementById('five-forecast');
            //             // clears content in string if any
            //             forecastContainer.innerHTML = '';
            //             for (var i = 0; i < forecastData.list.length; ++i) {
            //                 var forecast = forecastData.list[i];
            //                 var date = forecast.dt_txt;
            //                 var temperature = forecast.main.temp;
            //                 var weatherDescription = forcast.weather[0].description;
            //                 // var forecastElement.classList.add('forecast-day');
            //                 var forecastElement = document.createElement('div');
            //                 forecastElements.classList.add('forcast-day');
            //                 var weatherDescriptionElement = document.createElement('div')
            //                 var dateElement = document.createElement('h4');
            //                 dateElement.textContent = date;
            //                 forecastElement.appendChild(dateElement); 
                            
            //             }
            //         }
            //     })
            //     .catch(error => {
            //         console.log('Error fetching forcast data', error);
            //     })