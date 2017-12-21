var express = require('express');
var callCare = require('./../util/restHelper');
var router = express.Router();

/* GET users listing. */
router.post('/', function(req, res) {
  const userInfo = req.body.result.parameters;
  var callReq = {
    orgId:"b3259e91-7e6c-4815-857e-7507d85fba0c",
    customerIdentity:{
      Context_First_Name: "testUser",
      Context_Mobile_Phone: userInfo.contactInfo
    },
    reason: "this is my reason for spark!!!google home test"
   };
   
  callCare(callReq, res);

});
module.exports = router;


