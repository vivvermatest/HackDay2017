var querystring = require('querystring');
var request = require('request');

var callCare = function createCareCall(postData, resp,scheduler) {
	request({
		url: "http://localhost:8080/dummyChatC",
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
				"name":"immediate-goodbye",
				"data":{}
			}
		};
		console.log("chatc response "+response)
		if (error|| response.statusCode !== 200){
			console.log("chatc failed with error "+error)
			careResp.speech = "your call back request failed";
			careResp.displayText = "your call back request was failed";
		}

		if(scheduler)
			scheduler.cancel();

		if(resp)
		resp.json(careResp);
	});
};

module.exports = callCare;