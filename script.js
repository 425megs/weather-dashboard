var fetchButton = document.querySelector('.submitBtn')
var apiKey = "e303b99a14d016cc77ae6aaf2d42686e"

//not working.. I think it needs long/lat data?
function getApi() {
    var date = moment().format("MMM Do YY")
    var cityName = document.querySelector('#userInput').value
    var requestUrl = "https://api.openweathermap.org/data/2.5/weather?units=imperial&q=" + cityName + "&appid=" + apiKey;

    //below needs to be hidden until city is searched for    

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


        //5 day forecast, design html first
            var lon = data.coord.lon
            var lat = data.coord.lat
            var oneCallUrl = "https://api.openweathermap.org/data/2.5/onecall?lat=" + lat +"&lon=" + lon + "&appid=" + apiKey
                    fetch(oneCallUrl)
                        .then(function (response) {
                            return response.json();
                        })
                        .then(function (stuff) {
                            console.log(stuff);
                        })
        })
    }
fetchButton.addEventListener('click', getApi);

// think I will need multiple fetch requests, one for the current weather, one for (each?) the 5 day forecast

// localStorage aspect >:( to display previously searched cities