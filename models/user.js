const mongoose = require('mongoose');
const regExp = require('../utils/regExp');

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    minlength: 2,
    maxlength: 30,
    required: true,
  },
  about: {
    type: String,
    minlength: 2,
    maxlength: 30,
    required: true,
  },
  avatar: {
    type: String,
    required: true,
    validate: {
      validator(v) {
        return regExp.url.test(v);
      },
      message: 'Ссылка имеет неправильный формат',
    },
  },
});

module.exports = mongoose.model('user', userSchema);
