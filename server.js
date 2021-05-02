const { db, getStartUp, getSingle, saveAnalysis } = require("./db/index");
const express = require("express");
const path = require("path");
const { getAuth, getSearch, getAnalysis } = require("./spotify");
const app = express();
const PORT = process.env.PORT || 8080;
app.use(express.json());
app.use(express.static(path.join(__dirname, "build")));

const checkMongoUUID = (req, res, next) => {
  getSingle(req.params.UUID).then(doc => {
    doc.length > 0 ? res.send(doc) : next()
  }).catch(err => {
    res.sendStatus(500);
  })
}

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
  getAuth()
    .then(auth => {
      return getSearch(text, auth);
    })
    .then(results => {
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

app.get("/analyze/:UUID/:track/:artists/:album", checkMongoUUID, (req, res) => {
  const {UUID, track, artists, album } = req.params;
  getAuth()
    .then(auth => {
      return getAnalysis('single search', auth, [{id: UUID}]);
    })
    .then(results => {
      const {features} = results;
      features[0].track = track;
      features[0].artists = artists;
      features[0].album = album;

      saveAnalysis(features[0]);
      res.send(features);
    })
    .catch(err => {
      console.error(err);
      res.sendStatus(500); 
    })
})

//ANOTHER CHANGE

// if (process.env.NODE_ENV === 'production') {
//   app.use(express.static('./build'));
//   app.get('*', (req, res) => {
//     res.sendFile(path.join(__dirname, "build", "index.html"));
//   })
// }

app.listen(PORT, () => {
  console.log('SUCCESSFULLY RUNNING ON', PORT)
});
