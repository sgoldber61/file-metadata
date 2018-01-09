// require helper modules
var path = require('path');
var fs = require('fs');
var multer = require('multer');
var upload = multer();


// require express
var express = require('express');
var app = express();


// app routing
app.get('/', function(req, res, next) {
  // render the home page index.html
  res.sendFile(path.join(__dirname, 'index.html'));
});


// get file size
app.post('/file-size', upload.single('file_upload'), function(req, res, next) {
  res.send({size: req.file.buffer.length});
});


// other
app.get('/*.ico', function(req, res, next) {
  // do nothing...
});


app.use(function(req, res) {
  console.log("Usage error: no match");
  
  res.send({error: "Usage error"});
});


app.listen(3000, function() {
  console.log('Example app listening on port 3000!');
});

