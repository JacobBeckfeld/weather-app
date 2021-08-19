var userInput = document.getElementById("user-input");
var searchBtn = document.getElementById("search-btn");
var city = document.getElementById("city");
var weatherIcon = document.getElementById("icon");
var temp = document.getElementById("temp");
var humidity = document.getElementById("humidity");
var windSpeed = document.getElementById("windspeed");
var uv = document.getElementById("uv")
var url = "https://api.openweathermap.org/data/2.5/weather?q=";
var appid = "&units=imperial&cnt=65&appid=";
var APIKey = "a2198b8b1a95c35dfd7fa87eadfe55b1";
var fiveDayURL = "https://api.openweathermap.org/data/2.5/forecast?q="

let day1 = document.getElementById("day1");
let tempOne = document.getElementById("tempOne");
let humOne = document.getElementById("humOne")
let windOne = document.getElementById("speedOne")

let day2 = document.getElementById("day2");
let tempTwo = document.getElementById("tempTwo");
let humTwo = document.getElementById("humTwo")
let windTwo = document.getElementById("speedTwo")

let day3 = document.getElementById("day3");
let tempThree = document.getElementById("tempThree");
let humThree = document.getElementById("humThree")
let windThree = document.getElementById("speedThree")

let day4 = document.getElementById("day4");
let tempFour = document.getElementById("tempFour");
let humFour = document.getElementById("humFour")
let windFour = document.getElementById("speedFour")

let day5 = document.getElementById("day5");
let tempFive = document.getElementById("tempFive");
let humFive = document.getElementById("humFive")
let windFive = document.getElementById("speedFive")



function currentWeather() {

    let cityName = userInput.value
    var forcast1 = url + cityName + appid + APIKey;

    console.log(forcast1)
    fetch(forcast1)
    .then(function(response){
        if (!response.ok) {
            return console.log(response);
        }
        return response.json()
    })
    .then(function (data) {
        console.log(data)
        
        let todayTemp = data.main.temp
        let todayWind = data.wind.speed
        let todayHum = data.main.humidity
        let searchedCity = cityName
        
        // console.log(todayTemp, todayWind, todayHum)
        
        temp.textContent = "Temp:" + todayTemp
        windSpeed.textContent = "Windspeed:" + todayWind
        humidity.textContent = "Humidity:" + todayHum + "%"
        city.textContent = searchedCity
        
    })
    
    
    
}

function forcast(){
    let cityForcast = userInput.value
    let fiveDayForcast = fiveDayURL + cityForcast +appid + APIKey;
    console.log(fiveDayForcast)
    fetch(fiveDayForcast)
    .then(function(response){
        if (!response.ok) {
            return console.log(response)
        }
        return response.json()
    })
    .then(function(data){
        console.log(data)
    })
    let temp1 = data.list[0].main.temp
    let hum1 = data.list[0].main.humidity
    let wind1 = data.list[0].wind.speed

    let temp2 = data.list[0].main.temp
    let hum2 = data.list[0].main.humidity
    let wind2 = data.list[0].wind.speed
    
    let temp3 = data.list[0].main.temp
    let hum3 = data.list[0].main.humidity
    let wind3 = data.list[0].wind.speed
    
    let temp4 = data.list[0].main.temp
    let hum4 = data.list[0].main.humidity
    let wind4 = data.list[0].wind.speed
    
    let temp5 = data.list[0].main.temp
    let hum5 = data.list[0].main.humidity
    let wind5 = data.list[0].wind.speed



}



function startPage(){
    currentWeather("seattle")
    forcast("Seattle")
}
startPage()
searchBtn.addEventListener("click", startPage)
