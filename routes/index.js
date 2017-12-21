var express = require('express');
var router = express.Router();
const bubbleController = require('../controllers/bubble.controller.js');

/* GET home page. */

router.get('/', bubbleController.getAllMessage);
router.get('/users', bubbleController.verifyToken, bubbleController.getAllUsers);

module.exports = router;
