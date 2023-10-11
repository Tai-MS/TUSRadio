var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index');
});
router.get('/login', function(req, res, next) {
  res.render('login');
});
// router.get('/hola', function(req, res, next) {
//   res.render('signup');
// });
router.post('/signup', (req, res) => {
  const {email, pass} = req.body;
  const errors = []
  if(!email){
    errors.push({text: "Falta el nombre"})
  }
  if(!pass){
    errors.push({text:"Falta la contraseña"})
  }
  if(errors.length > 0){
    res.render("signup", {
      errors,
      email,
      pass
    })
  }else{
    res.send("ok")
  }
  
})

module.exports = router;
