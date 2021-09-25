let express = require('express');
const request = require("request");
let router = express.Router();

function getHashParams() {
  // console.log("URL", url);
  // var hashParams = {};
  // var e, r = /([^&;=]+)=?([^&;]*)/g,
  //     q = window.location.hash.substring(1);
  // while ( e = r.exec(q)) {
  //   hashParams[e[1]] = decodeURIComponent(e[2]);
  // }
  // return hashParams;
}

/* GET home page. */
router.get('/', function(req, res, next) {
  // console.log("RES: \n");
  // console.log(res);
  // console.log(req.query);
  // console.log(req.query.access_token);
  // console.log(req.query.refresh_token);

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
    }

  res.render('index', { title: 'Express' , res: res});
});

// router.get("/:access_token/:refresh_token", function(req, res) {
//   console.log("made it here");
//   console.log("PARAMS", req.params);
// });



module.exports = router;
