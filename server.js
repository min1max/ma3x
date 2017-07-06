var express        = require('express');
//var bodyParser     = require('body-parser');
var app            = express();
var port           = process.env.PORT || 9090;
var path    = require('path');

// route app
var router = require('./app/routes');
app.use('/', router);

var oneDay = 86400000;
// set static files (css and images, etc) location
app.use('/public', express.static('public', {
	maxAge: '1y'//,
	//setHeaders: setCustomCacheControl
}));


/*app.use(express.static(__dirname + '/public', {
  maxAge: 86400000,
  setHeaders: function(res, path) {
      res.setHeader("Expires", new Date(Date.now() + 2592000000*30).toUTCString());
    }
}));*/

// start the server
app.listen(port, function() {
  console.log('app started on port: ', port);
});

