var express = require('express');
var router = express.Router();

//get package file
var package = require('../package.json');

/* GET home page. */
router.get('/', function(req, res, next) {
  //return app version and author
  return res.status(200).json({
    version: package.version,
    author: package.author
  });
});

router.get('/api', function(req, res, next) {
  return res.status(200).json({
    version: package.version,
    author: package.author
  });
});

module.exports = router;
