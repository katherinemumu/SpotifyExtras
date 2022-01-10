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
        console.log(options);
        console.log(body);
        // res.json(body.display_name);
    });
});

module.exports = router;