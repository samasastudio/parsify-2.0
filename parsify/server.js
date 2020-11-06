const { db, getStartUp } = require("./db/index");
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

app.get("/", function (req, res) {
  res.sendFile(path.join(__dirname, "build", "index.html"));
});

app.listen(process.env.PORT || 8080);
