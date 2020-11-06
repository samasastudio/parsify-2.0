var axios = require('axios');
var TOKEN = require('./config');
const Promise = require('bluebird');

const getPlaylist = (auth, uuid) => {
  return axios({
    method: 'get',
    url: `https://api.spotify.com/v1/playlists/${uuid}`,
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${auth}`
    }
  })
  .then((playlistData) => {
    // console.log('playlist data from axios: ', playlistData.data.tracks.items);
    let name = playlistData.data.name;
    let pldata = playlistData.data.tracks.items.map(x => {
      return {tk: x.track.name, id: x.track.id}
    })
    // console.log(pldata);
    return {pldata, name, auth};
  })
  .catch(err => {console.log('playlist get failed: ', err)});
}

const getAnalysis = (name, auth, plData) => {
  let ids = plData.reduce((memo, item) => {
    return memo += item.id + '%2C'
  }, '');

  return axios({
    url: `https://api.spotify.com/v1/audio-features?ids=${ids.slice(0, -3)}`,
    method: 'get',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${auth}`
    }
  })
  .then((analysis) => {
    let features = analysis.data.audio_features;
    return {name, features}
  })
  .catch((err) => {
    console.log('axios analysis failing');
  })
}

const getAuth = () => {
  return axios({
    url: 'https://accounts.spotify.com/api/token',
    method: 'post',
    params: {
      grant_type: 'client_credentials'
    },
    headers: {
      'Accept':'application/json',
      'Content-Type': 'application/x-www-form-urlencoded'
    },
    auth: {
      username: TOKEN.ID,
      password: TOKEN.SECRET
    }
  }).then(res => {
      return res;
  }).catch(err => {
    console.log('getting Auth failed: ', err);
  });
}

module.exports.getPlaylist = getPlaylist;
module.exports.getAnalysis = getAnalysis;
module.exports.getAuth = getAuth;