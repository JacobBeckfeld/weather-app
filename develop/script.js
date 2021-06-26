function startPage(){
var userInput = document.getElementById("user-input");
var searchBtn = document.getElementById("search-btn");
var city = document.getElementById("city");
var weatherIcon = document.getElementById("icon");
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
        var todayDate = new Date(response.data.dt*1000);
        console.log(todayDate);
        var day = todayDate.getData();
        var month = todayDate.getMonth() + 1;
        var year = todayDate.getFullYear();
        city.innerHTML = response.data.cityName + "(" + month + "/" + day + "/" + year + ") ";
        var picture = response.data.weather[0].icon;
        weatherIcon.setAttribute("src", "https://openweathermap.org/img/wn/" + picture + "@2x.png");
        weatherIcon.setAttribute("alt", response.data.weather[0].description);
        temp.innerHTML = "Temperature: " + k2f(response.data.main.temp) + "&#176F";
        humidity.innerHTML = "Humidity: " + response.data.main.humidity + "%";
        windSpeed.innerHTML = "Wind Speed:" + response.data.wind.speed + " MPH";
        var latatude = response.data.coord.lat;
        var longitude = response.data.coord.lon;
        var UVURL = "https://api.openweathermap.org/data/2.5/uvi/forecast?lat=" + latatude + "&lon=" + longitude + "&appid+" + APIKey + "&cnt=1";

    })
    
    
}
    currentWeather("seattle");
}

