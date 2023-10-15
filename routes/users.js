var express = require("express");
var router = express.Router();
const passport = require("passport");

// const usersModel = require("../models/userModel");
// const bcrypt = require("bcrypt");
// const jwt = require("jsonwebtoken");

// const User = require("../models/userModel");

const registro = require("../controllers/usersControllers");
/* GET users listing. */
router.get("/signup", (req, res) => {
  res.render("signup");
});

router.post("/signup", registro.registro);

router.get("/signin", (req, res) => {
  res.render("login", {
    error: req.flash("error"), // Añade esto para asegurarte de que los mensajes de error se pasen a la plantilla
  });
});

router.post(
  "/signin",
  passport.authenticate("local", {
    successRedirect: "/",
    failureRedirect: "signin",
    failureFlash: true,
  })
);

router.get("/index", (req, res) => {
  // res.render("index");
  if(req.isAuthenticated()){
    const userEmail = req.user.email
    res.render('index', {userEmail: userEmail})
  }else{
    res.redirect('index')
  }
});

module.exports = router;
