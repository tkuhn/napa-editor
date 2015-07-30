var express = require('express');
var app = express();
var bodyParser = require('body-parser');

app.use('/examples', express.static('../examples'));
app.use('/rash', express.static('../rash'));
app.use('/ckeditor', express.static('../ckeditor'));
app.use('/client', express.static('../client'));

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.post('/event', function (req, res) {
  console.log(req.body);
});

var server = app.listen(3000, function () {
  console.log('Example at http://127.0.0.1:3000/examples/bots.html');
});

