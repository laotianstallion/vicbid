var express = require('express');
var app = express();

var port = process.env.PORT || 8080;

// make express look in the public directory for assets (css/js/img)
app.use(express.static(__dirname + '/app'));

app.get('/', function(req, res) {
    res.render('index');
});

app.listen(port, function() {
    console.log('Our app is running on http://localhost:' + port);
});
