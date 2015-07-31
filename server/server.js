var express = require('express');
var bodyParser = require('body-parser');
var http = require('http');
var fs = require('fs');
var jsdom = require('jsdom');

var app = express();

app.use('/examples/images', express.static('../examples/images'));
app.use('/rash', express.static('../rash'));
app.use('/ckeditor', express.static('../ckeditor'));
app.use('/client', express.static('../client'));

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get('/examples/bots.html', function (req, res) {
  var htmlSource = fs.readFileSync("../examples/bots.html", "utf8");
  jsdom.env(
    htmlSource,
    function(err, window) {
      if (err) throw err;
      var $ = require('jquery')(window);
      var i = 1;
      $(".section,.abstract,.page-header,.bibliography").find("p,h1").not(".keywords").each(function() {
        $(this).attr("contenteditable", "true");
        var id = "editor" + i++;
        $(this).attr("id", id);
      });
      res.write(window.document.documentElement.innerHTML);
      res.end();
    }
  );

});

app.post('/event', function (req, res) {
  console.log(req.body);
});

var server = app.listen(3000, function () {
  console.log('Example at http://127.0.0.1:3000/examples/bots.html');
});

