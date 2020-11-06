const { CollectionsOutlined } = require("@material-ui/icons");
const { getAuth, getPlaylist, getAnalysis } = require("./spotify");

let plJSON
let anJSON

getAuth()
  .then((auth) => {
    return getPlaylist(auth, "4KiiHsZHl7gj0EGSTG5I9I");
  })
  .then((plRes) => {
    // console.log(plRes)
    plJSON = plRes.plData;
    return getAnalysis(plRes.name, plRes.auth, plRes.plData);
  })
  .then((analysis) => {
    // console.log(analysis);
    anJSON = analysis;
    // console.log(anJSON)
  });


  // const finalJSON = plJSON.map((el, i) => {

  // })