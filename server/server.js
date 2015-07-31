var express = require('express');
var bodyParser = require('body-parser');
var http = require('http');
var fs = require('fs');

var app = express();

app.use('/examples/images', express.static('../examples/images'));
app.use('/rash', express.static('../rash'));
app.use('/ckeditor', express.static('../ckeditor'));
app.use('/client', express.static('../client'));

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get('/examples/bots.html', function (req, res) {
  fs.readFile('../examples/bots.html', function (err, html) {
    if (err) throw err;
    res.writeHeader(200, {"Content-Type": "text/html"});
    // TODO: here we should parse the HTML to keep it in memory and apply the changes
    res.write(html);
    res.end();
  });
});

app.post('/event', function (req, res) {
  console.log(req.body);
});

var server = app.listen(3000, function () {
  console.log('Example at http://127.0.0.1:3000/examples/bots.html');
});

