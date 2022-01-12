var fetchButton = document.querySelector('.submitBtn')
var apiKey = "e303b99a14d016cc77ae6aaf2d42686e"

function getApi() {
    var date = moment().format("MMM Do YY")
    var cityName = document.querySelector('#userInput').value
    var requestUrl = "https://api.openweathermap.org/data/2.5/weather?units=imperial&q=" + cityName + "&appid=" + apiKey;   

    fetch(requestUrl)
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            console.log(data);

            var cityHeader = document.querySelector('#cityDeets');
            var temp = document.querySelector('#temp');
            var wind = document.querySelector('#wind');
            var humidity = document.querySelector('#hum');
            cityHeader.textContent = data.name + " " + date
            temp.textContent = "Temp: " + data.main.temp
            wind.textContent = "Wind: " + data.wind.speed
            humidity.textContent = "Humidity: " + data.main.humidity
        })
    }
fetchButton.addEventListener('click', getApi);