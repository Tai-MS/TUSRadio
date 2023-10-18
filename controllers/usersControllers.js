const usersModel = require("../models/userModel");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const User = require("../models/userModel");

module.exports = {
  registro: async (req, res) => {
    const { email, password, password2 } = req.body;
    console.log(req.body);
    const errors = [];

    const emailUser = await User.findOne({ email: email });
    if (emailUser) {
      errors.push({ text: "El email ya esta en uso" });
    } else {
      if (!password || !password2 || !email) {
        errors.push({ text: "Por favor, complete todos los campos." });
      } else if (password != password2) {
        errors.push({ text: "Las contraseñas no coinciden" });
      }
      if (password.length < 8) {
        errors.push({ text: "La contraseña debe ser de 8 caracteres o mas" });
      }
    }

    if (errors.length > 0) {
      res.render("signup", {
        errors,
        email,
        password,
        password2,
      });
      return;
    } else {
      const newUser = new User({ email, password });
      newUser.password = await newUser.encryptPassword(password);
      await newUser.save();
      req.flash("success msg", "Te registraste con exito");
      res.render("login");
    }
  },
};
