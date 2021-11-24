let express = require("express");
let router = express.Router();
let request = require('request');
const https = require('https');
let querystring = require('querystring');
require('dotenv').config()

let client_id = '3cddd949ae4643bb9b9845bd1ce64368'; // Your client id
let client_secret = process.env.API_KEY;
let redirect_uri = 'http://localhost:9000/auth/login/callback';
let stateKey = 'spotify_auth_state';

let content = {};

router.get("/", (req, res, next) => {
    let state = '1234567890123456'
    let scope = 'user-read-private user-read-email';
    res.cookie(stateKey, state);

    res.redirect('https://accounts.spotify.com/authorize?' +
        querystring.stringify({
            response_type: 'code',
            client_id: client_id,
            scope: scope,
            redirect_uri: redirect_uri,
            state: state
        }));
    console.log("******IN LOGIN******")
});

router.get('/callback', function(req, res) {
    // your application requests refresh and access tokens
    // after checking the state parameter
    console.log("******IN CALLBACK******")

    var code = req.query.code || null;
    var state = req.query.state || null;
    var storedState = req.cookies ? req.cookies[stateKey] : null;

    if (state === null || state !== storedState) {
        res.redirect('/#' +
            querystring.stringify({
                error: 'state_mismatch'
            }));
    } else {
        res.clearCookie(stateKey);
        // console.log("CODE", code);
        var authOptions = {
            url: 'https://accounts.spotify.com/api/token',
            form: {
                code: code,
                redirect_uri: redirect_uri,
                grant_type: 'authorization_code'
            },
            headers: {
                'Authorization': 'Basic ' + (new Buffer(client_id + ':' + client_secret).toString('base64'))
            },
            json: true
        };

        console.log("after the code thing");
        request.post(authOptions, function(error, response, body) {
            if (!error && response.statusCode === 200) {

                var access_token = body.access_token,
                    refresh_token = body.refresh_token;

                var options = {
                    url: 'https://api.spotify.com/v1/me',
                    headers: { 'Authorization': 'Bearer ' + access_token },
                    json: true
                };

                // use the access token to access the Spotify Web API
                /*request.get(options, function(error, response, body) {
                    console.log(body);
                    content = body;
                });*/

                console.log("after the request");
                // we can also pass the token to the browser to make requests from there
                res.redirect('../?' +
                    querystring.stringify({
                        access_token: access_token,
                        refresh_token: refresh_token
                    })
                );
                console.log("after res.redirect");
            } else {
                res.redirect('/#' +
                    querystring.stringify({
                        error: 'invalid_token'
                    }));
            }
        });
    }
});

module.exports = router;