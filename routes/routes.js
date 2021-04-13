var express = require('express');
var router = express.Router();
var spotifyController = require('../controllers/SpotifyController')


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', {
    title: 'moodScape'
  });
});

router.get('/moodScape', function(req, res, next) {

  // this is an JSON obj that contains the avg of the song features
  var obj = req.session.obj;
  // this is the time difference between the first song and the last played song
  var landscapeSize = req.session.timeDiff;
  // this is userName
  var user = req.session.user;
  res.render('output', { // note: changed visualization to output
    title: 'moodScape',
    d: obj,
    t: landscapeSize,
    u: user
  });

}); // note: changed musicScape to moodScape

router.get('/spotifycallback', function(req, res) {
spotifyController.spotifyCallback(req, res)
});

router.get('/login', function(req, res) {
    spotifyController.spotifyLogin(res);
});

module.exports = router;
