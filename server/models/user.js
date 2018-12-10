var mongoose = require('mongoose');

var User = mongoose.model('User', {
  name: {
    type: String,
    required: true,
    minlength: 1,
    trim: true //remove all spaces
  },
  email:{
    type: String,
    required: true,
    minlength: 1,
    default: false
  }
});

module.exports = {User};
