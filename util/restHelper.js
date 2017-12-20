var http = require('http');
var querystring = require('querystring');
var request = require('request');

var callCare = function createCareCall(postData, resp) {
	request({
		url: "https://chatc.produs1.ciscoccservice.com/chatc/v1/callback",
		method: "POST",
		json: true,
		body: postData
	}, function (error, response, body) {
		var careResp = {
			"speech": "your call back request successful",
			"displayText": "your call back request successful",
			"data": {},
			"contextOut": [],
			"source": "DuckDuckGo",
			"followupEvent":
			{
				"name":"GoodBye",
				"data":{}
			}
		};
		if (error|| response.statusCode !== 200){
			careResp.speech = "your call back request failed";
			careResp.displayText = "your call back request was failed";
		}
		resp.json(careResp);
	});
};

module.exports = callCare;