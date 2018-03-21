var express = require('express')
var app = express();
var mongoose = require('mongoose');
const bodyParser = require('body-parser');
var path = require('path');
app.use(express.static(__dirname + '/weatherApi/dist'));
// configure body-parser to read JSON
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json());

var APIKey ="&appid=04fc73d9f0aaa1188ba13b8fc71b0313"
var key2 = "464946aa37a95d5c327ce7d16821f832"
var prefix = "api.openweathermap.org/data/2.5/weather?q="

// app.get(prefix+"burbank"+APIKey, (req, res){
//     (data) => {
//         res.json(data);
//     }
// })

app.all("*", (req, res, next) => {
    res.sendFile(path.resolve("./public/dist/index.html"))
});

app.listen(8000, () => {
    console.log("listening on port 8000");
});
