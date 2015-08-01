var express = require('express');
var bodyParser = require('body-parser');
var http = require('http');
var fs = require('fs');
var jsdom = require('jsdom');

var app = express();

var docs = {};
var docChanges = {};
var seen = {};

app.use('/examples/images', express.static('../examples/images'));
app.use('/rash', express.static('../rash'));
app.use('/ckeditor', express.static('../ckeditor'));
app.use('/client', express.static('../client'));

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// TODO make this general and not just for 'bots.html'
app.get('/examples/bots.html', function (req, res) {
  if (req.query.mode == "changes") {
    var sessionid = req.query.sessionid;
    if (!docChanges["bots.html"][sessionid]) {
      console.log("new session: " + sessionid);
      docChanges["bots.html"][sessionid] = {};
    }
    seen[sessionid] = true;
    res.writeHead(200, {"Content-Type": "application/json"});
    res.write(JSON.stringify(docChanges["bots.html"][sessionid]));
    docChanges["bots.html"][sessionid] = {};
    res.end();
    return;
  }
  if (docs["bots.html"]) {
    returnDoc("bots.html", res);
    return;
  }
  var htmlSource;
  var isNew;
  if (fs.existsSync("../docs/bots.html")) {
    htmlSource = fs.readFileSync("../docs/bots.html", "utf8");
    isNew = false;
  } else {
    htmlSource = fs.readFileSync("../examples/bots.html", "utf8");
    isNew = true;
  }
  jsdom.env(
    htmlSource,
    function(err, window) {
      if (err) throw err;
      if (isNew) {
        var $ = require('jquery')(window);
        var i = 1;
        $(".section,.abstract,.page-header,.bibliography").find("p,h1").not(".keywords").each(function () {
          $(this).attr("contenteditable", "true");
          var id = "editor" + i++;
          $(this).attr("id", id);
        });
      }
      docs["bots.html"] = window;
      docChanges["bots.html"] = {};
      returnDoc("bots.html", res);
    }
  );
});

app.post('/examples/bots.html', function (req, res) {
  var changes = req.body;
  res.end();
  docWindow = docs["bots.html"];
  var $ = require('jquery')(docWindow);
  var sessionid = changes["_sessionid_"];
  for (var id in changes) {
    if (id == "_sessionid_") continue;
    $("#" + id).html(changes[id]);
    for (var sid in docChanges["bots.html"]) {
      if (sid == sessionid) continue;
      docChanges["bots.html"][sid][id] = changes[id];
    }
  }
  saveDoc("bots.html", docWindow.document);
});

var server = app.listen(3000, function () {
  console.log('Example at http://127.0.0.1:3000/examples/bots.html');
});

setInterval(function () {
  for (sessionid in seen) {
    if (seen[sessionid] === false) {
      delete docChanges["bots.html"][sessionid];
      delete seen[sessionid];
      console.log("session expired: " + sessionid);
    } else {
      seen[sessionid] = false;
    }
  }
}, 600000);

function returnDoc(name, res) {
  res.write(docs[name].document.documentElement.innerHTML);
  res.end();
}

function saveDoc(name, doc) {
  fs.writeFile("../docs/" + name, doc.documentElement.innerHTML, function (err) {
    if (err) throw err;
  });
}

