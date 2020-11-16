const { db, getStartUp, getSingle } = require("./db/index");
const express = require("express");
const path = require("path");
const { getAuth, getSearch } = require("./spotify");
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
  const { text } = req.params;
  console.log('getting text!', text);
  getAuth()
    .then(auth => {
      return getSearch(text, auth);
    })
    .then(results => {
      console.log('results for search', results);
      const searchResults = results.map(x => {
        const artistList = x.artists.reduce((acc, el) => acc + el.name + ', ', '').slice(0, -2);
        return {id: x.id, track: x.name, artists: artistList, album: x.album.name }
      })
      res.send(searchResults);
    })
    .catch(err => {
      console.error(err);
      res.sendStatus(500); 
    })
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
