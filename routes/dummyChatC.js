var express = require('express');
var callCare = require('./../util/restHelper');
var router = express.Router();
var schedule = require('node-schedule');
var moment= require('moment');


/* GET users listing. */
router.post('/', function(req, res) {
        console.log("Dummy ChatC Called!!!")

        var careResp = {
            "speech": "your call back request successful",
            "displayText": "your call back request successful",
            "data": {},
            "contextOut": [],
            "source": "DuckDuckGo",
            "followupEvent":
                {
                    "name":"scheduled-goodbye",
                    "data":{}
                }
        };
        res.json(careResp);

});
module.exports = router;


