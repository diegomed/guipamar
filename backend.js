var express = require("express");
// Create a new express application instance
var app = express();

app.use(express.static('frontend'));
var port = process.env.PORT || 3000;
//app.get('/', function (req, res) {
//    res.send('Hello World!');
//});
app.listen(port, function () {
    console.log('Example app listening on port ' + port + '!');
});