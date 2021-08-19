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

let today = moment()
$("#day1").text(today.format("dddd MMMM Do"))
$("#day2").text(today.add(1, "days").format("dddd MMMM Do"));
$("#day3").text(today.add(2, "days").format("dddd MMMM Do"));
$("#day4").text(today.add(3, "days").format("dddd MMMM Do"));
$("#day5").text(today.add(4, "days").format("dddd MMMM Do"));


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
    
    let temp1 = data.list[0].main.temp
    let hum1 = data.list[0].main.humidity
    let wind1 = data.list[0].wind.speed

    let temp2 = data.list[8].main.temp
    let hum2 = data.list[8].main.humidity
    let wind2 = data.list[8].wind.speed
    
    let temp3 = data.list[16].main.temp
    let hum3 = data.list[16].main.humidity
    let wind3 = data.list[16].wind.speed
    
    let temp4 = data.list[24].main.temp
    let hum4 = data.list[24].main.humidity
    let wind4 = data.list[24].wind.speed
    
    let temp5 = data.list[32].main.temp
    let hum5 = data.list[32].main.humidity
    let wind5 = data.list[32].wind.speed

    tempOne.textContent = "Temp: " + temp1
    humOne.textContent = "Humidity: " + hum1
    windOne.textContent = "Windspeed: " + wind1

    tempTwo.textContent = "Temp: " + temp2
    humTwo.textContent = "Humidity: " + hum2
    windTwo.textContent = "Windspeed: " + wind2

    tempThree.textContent = "Temp: " + temp3
    humThree.textContent = "Humidity: " + hum3
    windThree.textContent = "Windspeed: " + wind3

    tempFour.textContent = "Temp: " + temp4
    humFour.textContent = "Humidity: " + hum4
    windFour.textContent = "Windspeed: " + wind4

    tempFive.textContent = "Temp: " + temp5
    humFive.textContent = "Humidity: " + hum5
    windFive.textContent = "Windspeed: " + wind5

    })
}



function startPage(){
    currentWeather("seattle")
    forcast("Seattle")
}
searchBtn.addEventListener("click", startPage)
startPage()
