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
    knex.select("*").from("weather").then((data_1)=>{
        res.send(data_1)
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
    knex("weather").insert(weather_data).then((data_1) => {
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
});