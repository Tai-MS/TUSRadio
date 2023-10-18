var express = require('express')
var router = express.Router()

router.get('/', (req, res) =>{
    if(req.isAuthenticated()){
        const userEmail = req.user.email
        res.render('channels-3', {userEmail: userEmail})
      }else{
        res.render('channels-3')
      }
})

router.get("/index", (req, res) => {
    res.redirect('index')
});

module.exports = router;