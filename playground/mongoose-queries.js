const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

var id = '591f39c4f5754785708b39b1';

if (!ObjectID.isValid(id)) {
  console.log('ID not valid');
}

// Todo.find({
//   _id: id
// }).then((todos) => {
//   console.log('Todos', todos);
// });
//
// Todo.findOne({
//   _id: id
// }).then((todo) => {
//   console.log('Todos', todo);
// });

// Todo.findById(id).then((todo) => {
//   if (!todo) {
//     return console.log('Id not found - this is oddly out of sequence...');
//   }
//   console.log('Todos', todo);
// }).catch((e) => console.log(e));

// user.findById

User.findById(id).then((users) => {
  if (!users) {
    return console.log('Id not found.');
  }
  console.log('User', users);
}).catch((e) => console.log(e));
