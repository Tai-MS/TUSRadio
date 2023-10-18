const mongoose = require('../config/mongodb');
const bcrypt = require('bcrypt');

const userSchema = mongoose.Schema({
  email: {type: String, required: true},
  password: {type: String, required: true}
});

userSchema.methods.encryptPassword = async(password) => {
  const salt = await bcrypt.genSalt(10)
  const hash = bcrypt.hash(password, salt)
  return hash
};

userSchema.methods.matchPassword = async function(password){
  return await bcrypt.compare(password, this.password)
}

const userModel = mongoose.model('user', userSchema);

module.exports = userModel;
