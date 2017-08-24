var express = require("express");
var app = express();
var path = require('path');
app.use(express.static(path.resolve(__dirname + '/dist' )));




app.get('/*', function(req, res) {
    //send the website
    res.sendFile(path.resolve(__dirname + '/dist/index.html'));
});



app.listen(3000);