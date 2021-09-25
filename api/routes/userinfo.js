let express = require('express');
let request = require('request');
let router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  let info = request.get('https://api.spotify.com/v1/me')
  res.send(info);
});

module.exports = router;
