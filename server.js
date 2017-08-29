var express = require("express");
// var session = require('express-session');
var app = express();
var path = require('path');
app.use(express.static(path.resolve(__dirname + '/dist' )));




// app.get('/*', function(req, res) {
//     //send the website
//     console.log("request");
//     res.sendFile(path.resolve(__dirname + '/dist/index.html'));
//     console.log("request");
// });



app.listen(3000);