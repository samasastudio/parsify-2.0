const { CollectionsOutlined } = require("@material-ui/icons");
const { getAuth, getPlaylist, getAnalysis } = require("./spotify");
const fs = require("fs");

let plJSON;
let anJSON;

getAuth()
  .then((auth) => {
    return getPlaylist(auth, "4KiiHsZHl7gj0EGSTG5I9I");
  })
  .then((plRes) => {
    plJSON = plRes.plData;
    return getAnalysis(plRes.name, plRes.auth, plRes.plData);
  })
  .then((analysis) => {
    anJSON = analysis.features.map((el, i) => {
      el.track = plJSON[i].track;
      el.album = plJSON[i].album;
      el.artists = plJSON[i].artists;
      return el;
    });
    fs.writeFileSync("seed.json", JSON.stringify(anJSON));
  })
  .catch((err) => {
    console.error(err);
  });

// const finalJSON = plJSON.map((el, i) => {

// })
