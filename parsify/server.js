const { db, getStartUp, getSingle } = require("./db/index");
const express = require("express");
const path = require("path");
const app = express();
app.use(express.json());
app.use(express.static(path.join(__dirname, "build")));

app.get("/load", function (req, res) {
  getStartUp().then((load) => {
    response = load.map((x) => {
      return { id: x.id, track: x.track, artists: x.artists, album: x.album };
    });
    res.send(response);
  });
});

app.get("/search/:text", (req, res) => {
  console.log('getting text!', req.params.text);
  res.end();
})

app.get("/", function (req, res) {
  res.sendFile(path.join(__dirname, "build", "index.html"));
});

app.get("/analyze/:UUID", (req, res) => {
  getSingle(req.params.UUID).then(doc => {
    console.log(doc)
    res.send(doc);
  }).catch(err => {
    console.log('error getting doc', err);
    res.sendStatus(500);
  })
})

app.listen(process.env.PORT || 8080);
