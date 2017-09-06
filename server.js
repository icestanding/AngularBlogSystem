var express = require("express");
// var session = require('express-session');
var app = express();
var path = require('path');
app.use(express.static(path.resolve(__dirname + '/dist' )));







app.listen(3000);