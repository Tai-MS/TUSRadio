const mongoose = require('../config/mongodb');
const bcrypt = require('bcrypt');

const userSchema = mongoose.Schema({
  email: String,
  password: String,
});

userSchema.pre('save', function (next) {
  this.password = bcrypt.hashSync(this.password, 10);
  next();
});

const usertModel = mongoose.model('users', userSchema);

module.exports = usertModel;
