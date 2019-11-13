const request = require("request");
var readline = require("readline-sync");
var city_name = readline.question("What is your city name?");
request("https://api.openweathermap.org/data/2.5/weather?q="+city_name+"&appid=3a20d3800e1540e8a3f6fb331e91f796",function(userData,bodyData,weather){
    // console.log(weather);
    var url = JSON.parse(weather);
    // console.log(url);
var cityId = url.id
request("https://openweathermap.org/data/2.5/forecast?id="+cityId+"&appid=b6907d289e10d714a6e88b30761fae22",function(userData,bodyData,weather_data){
    // console.log(weather);
    var weather_url = JSON.parse(weather_data);
    // console.log(weather_url);
var express = require("express");
var mysql = require("mysql");
var bodyParser = require("body-parser");
var app = express();
var knex = require("./connect.js") 

app.use(bodyParser.json())

var mysqlconnection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "navgurukul",
    database: "weather_crud"
});

mysqlconnection.connect((err) => {
    if (!err)
        console.log("db connected");
    else
        console.log("not connected");
});

app.get("/get", function (req,res,){
    knex.select("*").from("weather").then((data)=>{
        res.send(weather_url)
    })
})

app.post('/post', function (req, res) {
    var weather_data = {
        id: req.body.id,
        city_id: req.body.city_id,
        Data: req.body.Data,
        city_name: req.body.city_name,
        weather_main: req.body.weather_main,
        weather_description: req.body.weather_description
    }
    knex("weather").insert(weather_data).then((data) => {
        console.log("post done!");
    });
});

app.put("/put", function (req, res){
    var weather_data = {
        city_id: req.bodycity_id,
        Data: req.body.Data,
        city_name: req.body.city_name,
        weather_main: req.body.weather_main,
        weather_description: req.body.weather_description
    }
    knex("weather")
        .where({ id: req.body.id })
        .update( weather_data).then((data) => {
            console.log("updata done");
    })
})

app.delete("/delete", function (req, res){
    var movie_data = {
        city_id: req.bodycity_id,
        Data: req.body.Data,
        city_name: req.body.city_name,
        weather_main: req.body.weather_main,
        weather_description: req.body.weather_description
    }
    knex("weather")
        .where({ id: req.body.id })
        .del(movie_data).then((data) => {
            console.log("del done");
    })
})

app.listen(5000, () => {
    console.log("5000 port pr shunta hai")
})
})
})