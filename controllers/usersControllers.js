const usersModel = require('../models/userModel');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

module.exports = {
  getAll: async function (req, res, next) {
    try {
      const users = await usersModel.find();
      res.json(users);
    } catch (e) {
      next(e);
    }
  },
  create: async function (req, res, next) {
    try {
      const document = new usersModel(req.body);

      const response = await document.save();

      res.status(201).json(response);
    } catch (e) {
      next(e);
    }
  },
  login: async function (req, res, next) {
    try {
      const document = await usersModel.findOne({ email: req.body.email });
      if (!document) {
        return res.json({ message: 'El email y/o contraseña son incorrectas' });
      }
      if (bcrypt.compareSync(req.body.password, document.password)) {
        const token = jwt.sign({ userId: document._id }, req.app.get('secretKey'), { expiresIn: '1h' });
        res.json(token);
      } else {
        return res.json({ message: 'El email y/o contraseña son incorrectas' });
      }
    } catch (e) {
      next(e);
    }
  },
};
