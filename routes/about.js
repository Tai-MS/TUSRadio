var express = require('express')
var router = express.Router()

router.get('/', (req, res) =>{
  if(req.isAuthenticated()){
    const userEmail = req.user.email
    res.render('about', {userEmail: userEmail})
  }else{
    res.render('about')
  }
})

router.get("/index", (req, res) => {
  res.redirect('index')
});

module.exports = router;