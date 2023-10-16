var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  if(req.isAuthenticated()){
    const userEmail = req.user.email
    res.render('index', {userEmail: userEmail})
  }else{
    res.redirect('index')
  }
  // res.render('index')
});

module.exports = router;
