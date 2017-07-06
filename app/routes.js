// require express
var express = require('express');
var path    = require('path');

// create our router object
var router = express.Router();

//cache
/*router.get('*', function (req, res, next) {

  if(req){
    res.setHeader("Cache-Control", "public, max-age=31536000");
    res.setHeader("Expires", new Date(Date.now() + 31536000).toUTCString());
  }
  next();
});*/

// route for homepage
router.get('/', function(req, res) {
  res.sendFile(path.join(__dirname + '/pages/index.html'));
});


module.exports = router;