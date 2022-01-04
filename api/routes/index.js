let express = require('express');
const request = require("request");
const querystring = require("querystring");
const jwt = require('jsonwebtoken');
let router = express.Router();
require('dotenv').config()


router.get("/", function(req, res) {
  res.render('index', { title: 'Express' , res: res});
});



module.exports = router;
