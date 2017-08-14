var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));

app.get('/profile',function(req,res){
	res.sendFile(path.join(__dirname,'ui','profile.html'));
});

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/tech.jpg', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'tech.jpg'));
});


// Do not change port, otherwise your app won't run on IMAD servers
// Use 8080 only for local development if you already have apache running on 80

var port = 8080;
app.listen(port, function () {
  console.log(`Hey Baby, your app is running on port ${port} <3<3<3`);
});
