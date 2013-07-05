var express = require('express');
var app = express();

app.configure(function () {
	app.use(express.bodyParser());
	app.use(express.methodOverride());
	app.use(express.logger());
	app.use(app.router);
});

app.all('*', function (req, res, next) {

  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "X-Requested-With");
  res.header("Content-Type", "application/json");
  next();
});

app.get('/', function(req, res) {
	res.sendfile('../../index.html');
});


app.listen(3000);
console.log('Server listening on port 3000');