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
    let plData = playlistData.data.tracks.items.map(x => {
      const artistList = x.track.artists.reduce((acc, el) => acc + el.name + ', ', '').slice(0, -2);
      return {track: x.track.name, id: x.track.id, album: x.track.album.name, artists: artistList}
    })
    // console.log(pldata);
    return {plData, name, auth};
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
      return res.data.access_token;
  }).catch(err => {
    console.log('getting Auth failed: ', err);
  });
}

const getSearch = (text, auth) => {
  return axios({
    url: `https://api.spotify.com/v1/search?q=${text}&type=track&limit=50`,
    method: 'get',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${auth}`
    }
  }).then(res => {
    return res.data.tracks.items
  }).catch(err => {
    console.log('failed getting search', err);
  })
}

module.exports.getPlaylist = getPlaylist;
module.exports.getAnalysis = getAnalysis;
module.exports.getAuth = getAuth;
module.exports.getSearch = getSearch;