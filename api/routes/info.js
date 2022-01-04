let express = require("express");
let router = express.Router();
let request = require('request');
const https = require('https');
let querystring = require('querystring');

router.get("/userinfo", (req, res) => {
    console.log("IN INFO/USERINFO ");

    let obj = JSON.parse(req.query["token"]);
    let access_token = obj.token;
    console.log("access_token ", access_token);

    var options = {
        url: 'https://api.spotify.com/v1/me',
        headers: { 'Authorization': 'Bearer ' + access_token },
        json: true
    };

    // use the access token to access the Spotify Web API
    request.get(options, function(error, response, body) {
        console.log(body);
        // info = body;
        res.json(body.display_name);
    });
    // return res.redirect('/');
});

module.exports = router;