var mongoose = require('mongoose');

const validator = require('validator');

// user model
// email - required, trimmed, set type = string, minlength = 1
var User = mongoose.model('users', {
  name: {
    type: String,
    required: true,
    minlength: 1,
    trim: true
  },
  email: {
    type: String,
    required: true,
    minlength: 1,
    trim: true
  }
});

// var newUser = new User({
//   name: 'Markie Poo',
//   email: 'markie13@outlook.com'
// });
//
// if (validator.isEmail(newUser.email)) {
//   newUser.save().then((doc) => {
//     console.log('Saved the new user', doc);
//   }, (e) => {
//       console.log('new user not saved', e);
//   });
// } else {
//   console.log('email was not valid');
// };

module.exports = {User};
