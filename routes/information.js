var express = require('express')
var router = express.Router()

router.get('/', (req, res) =>{
    if(req.isAuthenticated()){
        const userEmail = req.user.email
        res.render('information', {userEmail: userEmail})
      }else{
        res.render('information')
      }
})

router.get("/index", (req, res) => {
    res.redirect('index')
});

module.exports = router;