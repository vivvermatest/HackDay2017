var express = require('express');
var router = express.Router();

/* GET users listing. */
router.post('/', function(req, res) {
  console.log(req);
  res.json("Hello World ");
});
module.exports = router;
