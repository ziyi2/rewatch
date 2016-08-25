var index = require('../controllers/index.controller');
var express = require('express');
var router = express.Router();

//index-首页
router.get('/',index.render);




module.exports = router;

