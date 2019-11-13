const request = require("request");
var readline = require("readline-sync");
var city_name = readline.question("What is your city name?");
request("https://api.openweathermap.org/data/2.5/weather?q="+city_name+"&appid=3a20d3800e1540e8a3f6fb331e91f796",function(userData,bodyData,weather){
    // console.log(weather);
    var url = JSON.parse(weather);
    // console.log(url);

var dict = {} 
var weather = url;
for (var index = 0; index < weather["weather"].length; index ++){
    weather_id = weather["weather"][index]["id"]
    weather_main = weather["weather"][index]["main"]
    weather_description = weather["weather"][index]["description"]
    weather_icon = weather["weather"][index]["icon"]
}

    var data = new Date();
    var Data = data.toDateString();
    // console.log(Data)
    name = weather.name
    cityId = weather.id
    visibility = weather.visibility
    wind = weather.wind
    coord = weather.coord
    dict["Data"] = Data
    dict["city_name"] = name
    dict["city_id"] = cityId
    dict["weather_main"] = weather_main
    dict["weather_id"]= weather_id
    dict["weather_description"]= weather_description
    dict["weather_icon"] = weather_icon
    dict["visibility"] = visibility
    dict["wind"] = wind
    dict["coord"] = coord
    console.log(dict);
});