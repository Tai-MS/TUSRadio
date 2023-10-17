var express = require('express')
var router = express.Router()

router.get('/', (req, res) =>{
    res.render('channels');
})

router.get("/index", (req, res) => {
    res.redirect('index')
});

module.exports = router;