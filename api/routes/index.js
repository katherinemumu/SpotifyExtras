let express = require('express');
const request = require("request");
const querystring = require("querystring");
let router = express.Router();

/* GET home page. */
router.get('/auth', function(req, res, next) {

  var access_token = req.query.access_token;
  var refresh_token = req.query.refresh_token;

  console.log(access_token, refresh_token);

    if (access_token) {
      // make another request with the info
      var options = {
        url: 'https://api.spotify.com/v1/me',
        headers: { 'Authorization': 'Bearer ' + access_token },
        json: true
      };

      // use the access token to access the Spotify Web API
      request.get(options, function(error, response, body) {
        console.log(body);
      });

      // print it out

      res.redirect('http://localhost:3000/userhome?' +
          querystring.stringify({
            access_token: access_token,
            refresh_token: refresh_token
          })
      );
    }

  res.render('index', { title: 'Express' , res: res});
});

// router.get("/:access_token/:refresh_token", function(req, res) {
//   console.log("made it here");
//   console.log("PARAMS", req.params);
// });



module.exports = router;
