let express = require("express");
let router = express.Router();
let request = require('request');
const https = require('https');
var querystring = require('querystring');

router.get("/", (req, res, next) => {
    let scope = 'user-read-private user-read-email';
    let client_id = '3cddd949ae4643bb9b9845bd1ce64368'; // Your client id
    let redirect_uri = 'https://github.com/katherinemumu'; // Your redirect uri, need to add to whitelist on spotify dev acc
    let state = 'banana'
    res.redirect('https://accounts.spotify.com/authorize?' +
        querystring.stringify({
            response_type: 'code',
            client_id: client_id,
            scope: scope,
            redirect_uri: redirect_uri,
            state: state
        }));
});

module.exports = router;