let express = require("express");
let router = express.Router();
let request = require('request');
const https = require('https');
let querystring = require('querystring');

router.get("/userinfo", (req, res) => {
    console.log("IN INFO/USERINFO ", req.params);

    return res.redirect('/');
});

module.exports = router;