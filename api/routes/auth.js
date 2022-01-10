let express = require("express");
let router = express.Router();
let request = require('request');
const https = require('https');
let querystring = require('querystring');
require('dotenv').config();
const jwt = require('jsonwebtoken');
const axios = require('axios');

let client_id = '3cddd949ae4643bb9b9845bd1ce64368'; // Your client id
let client_secret = process.env.API_KEY;
let redirect_uri = 'http://localhost:9000/auth/callback';
let stateKey = 'spotify_auth_state';

let content = {};

router.get("/login", (req, res, next) => {
    let state = '1234567890123456'
    let scope = 'user-read-private user-read-email playlist-modify-private playlist-read-collaborative playlist-read-private playlist-modify-public';
    res.cookie(stateKey, state);

    res.redirect('https://accounts.spotify.com/authorize?' +
        querystring.stringify({
            response_type: 'code',
            client_id: client_id,
            scope: scope,
            redirect_uri: redirect_uri,
            state: state
        }));
});

router.get('/callback', function(req, res) {
    // your application requests refresh and access tokens
    // after checking the state parameter

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

        request.post(authOptions, function(error, response, body) {
            if (!error && response.statusCode === 200) {

                var access_token = body.access_token,
                    refresh_token = body.refresh_token;

                console.log("ACCESS TOKEN HERE ", access_token);

                const sessionJWTObject = {
                    token: access_token,
                };

                req.session.jwt = jwt.sign(sessionJWTObject, process.env.JWT_SECRET_KEY)

                return res.redirect('/');

            } else {
                res.redirect('/#' +
                    querystring.stringify({
                        error: 'invalid_token'
                    }));
            }
        });
    }
});

router.get("/current-session", (req, res) => {
    console.log("INSIDE CURRENT SESSION");
   jwt.verify(req.session.jwt, process.env.JWT_SECRET_KEY, (err, token) => {
            if(err || !token) {
                res.send(false);
            } else {
                res.send(token);
            }
       }
    )
});

router.get("/logout", (req, res) => {
    req.session = null;
    res.redirect('/');
});

router.get("/", function(req, res) {
    console.log("inside auth/", req.session.jwt);
    res.render('index', { title: 'Express' , res: res});
});


module.exports = router;