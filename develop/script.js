function startPage(){}
var userInput = document.getElementById("user-input");
var searchBtn = document.getElementById("search-btn");
var city = document.getElementById("city");
var icon = document.getElementById("icon");
var temp = document.getElementById("temp");
var humidity = document.getElementById("humidity");
var windSpeed = document.getElementById("windspeed");
var url = "https://api.openweathermap.org/data/2.5/weather?q=";
var appid = "&appid=";
var APIKey = "a2198b8b1a95c35dfd7fa87eadfe55b1";

function currentWeather(cityName) {
    var forcast1 = url + cityName +appid +APIKey;
    console.log(forcast1)
    fetch(forcast1)
    .then(function(response){
        console.log(response);
        return response.json()
        
    }
    
    ).then(function(data){
        console.log(data)
    })
}

currentWeather("Seattle")