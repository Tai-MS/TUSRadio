var express = require("express");
var router = express.Router();

/* GET home page. */
router.get("/", (req, res) => {
  res.render("signup");
});
// router.post('/signup', (req, res) => {
//   console.log(req.body);
//   res.render("ok")
// })

module.exports = router;
