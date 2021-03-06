let express = require("express");
let router = express.Router();
let request = require('request');
const https = require('https');
let querystring = require('querystring');

router.get("/listAll", (req, res) => {
    console.log("IN PLAYLISTS/LISTALL ");

    let obj = JSON.parse(req.query["token"]);
    let access_token = obj.token;

    var options = {
        url: `https://api.spotify.com/v1/me/playlists`,
        headers: { 'Authorization': 'Bearer ' + access_token, 'Content-Type': 'application/json' } //
        // json: true
    };

    // use the access token to access the Spotify Web API
    request.get(options, function(error, response, body) {
        body = JSON.parse(body);
        let playlistInfo = [];
        // console.log(body.items, "LENGTHHHHH ", body.items.length);
        console.log(body.items[1]);
        for(var i = 0; i < body.items.length; i++) {
            let item = body.items[i];
            var info = {
                url: item.external_urls.spotify,
                name: item.name,
                owner: item.owner.display_name,
                description: item.description,
                image: item.images[0],
                id: item.id,
                numTracks: item.tracks.total
            }
            playlistInfo.push(info);
        }
        res.send(playlistInfo);
    });
});

router.get("/tracklist", (req, res) => {
    console.log("IN PLAYLISTS/TRACKLIST ", req.query);

    let obj = JSON.parse(req.query["token"]);
    let access_token = obj.token;
    obj = JSON.parse(req.query["id"]);
    let id = obj.id;

    var options = {
        url: `https://api.spotify.com/v1/playlists/${id}/tracks`,
        headers: { 'Authorization': 'Bearer ' + access_token, 'Content-Type': 'application/json' } //
        // json: true
    };

    // use the access token to access the Spotify Web API
    request.get(options, function(error, response, body) {
        body = JSON.parse(body);
        console.log(body);
        let tracks = [];
        // console.log(body.items, "LENGTHHHHH ", body.items.length);
        console.log(body.items[1].track);
        for(var i = 0; i < body.items.length; i++) {
            let item = body.items[i];
            var info = {
                name: item.track.name,
                artist: item.track.artists[0].name
            }
            tracks.push(info);
        }
        res.send(tracks);
    });
});

module.exports = router;