const mongoose = require("mongoose");

//connection:
mongoose.connect("mongodb://localhost/parsify", {
  useUnifiedTopology: true,
  useNewUrlParser: true,
});

var db = mongoose.connection;

db.on("error", () => {
  console.log("error connecting to db");
});

db.once("open", () => {
  console.log("connected to mongoDB");
});

//MODEL

const featuresSchema = new mongoose.Schema({
  danceability: Number,
  energy: Number,
  key: Number,
  loudness: Number,
  mode: Number,
  speechiness: Number,
  acousticness: Number,
  instrumentalness: Number,
  liveness: Number,
  valence: Number,
  tempo: Number,
  type: String,
  id: String,
  uri: String,
  track_href: String,
  analysis_url: String,
  duration_ms: Number,
  time_signature: Number,
  track: String,
  album: String,
  artists: String,
});

const Features = mongoose.model("Features", featuresSchema);

// Feature Controllers

const getStartUp = () => {
  return Features.find({}, { _id: 0, __v: 0 }).limit(35).lean().exec();
};

const getSingle = (UUID) => {
  return Features.find({id: UUID}, {_id: 0, __v: 0}).limit(1).lean().exec();
}

module.exports.Features = Features;
module.exports.db = db;
module.exports.getStartUp = getStartUp;
module.exports.getSingle = getSingle;
