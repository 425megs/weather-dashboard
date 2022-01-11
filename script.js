function getApi() {
    var requestUrl = "https://api.openweathermap.org/data/2.5/onecall?lat={lat}&lon={lon}&exclude={part}&appid={e303b99a14d016cc77ae6aaf2d42686e}"

    fetch(requestUrl)
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {

        })
}

// think I will need multiple fetch requests, one for the current weather, one for (each?) the 5 day forecast