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

app.get('/ui/sr.jpg',function(req,res){
	res.sendFile(path.join(__dirname,'ui','sr.jpg'));
});

app.get('/ui/sr2.jpg',function(req,res){
	res.sendFile(path.join(__dirname,'ui','sr2.jpg'));
});

app.get('/ui/keys.jpeg',function(req,res){
	res.sendFile(path.join(__dirname,'ui','keys.jpeg'));
});
app.get('/ui/logo.jpg',function(req,res){
	res.sendFile(path.join(__dirname,'ui','logo.jpg'));
});
app.get('/ui/name.jpg',function(req,res){
	res.sendFile(path.join(__dirname,'ui','name.jpg'));
});
app.get('/nss',function(req,res){
	res.sendFile(path.join(__dirname,'ui','nss.html'));
});
app.get('/ui/nss.png',function(req,res){
	res.sendFile(path.join(__dirname,'ui','nss.png'));
	});
app.get('/ui/fc.png',function(req,res){
	res.sendFile(path.join(__dirname,'ui','fc.png'));
});
app.get('/ui/sc.png',function(req,res){
	res.sendFile(path(__dirname,'ui','sc.png'));
});
app.get('/ui/corpus.png',function(req,res){
	res.sendFile(path(__dirname,'ui','corpus.png'));
});

//Do not change port, otherwise your app won't run on IMAD servers
// Use 8080 only for local development if you already have apache running on 80

var port =80;
app.listen(port, function () {
  console.log(`Hey Baby, your app is running on port ${port} <3<3<3`);
});
