const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

// Todo.remove({}).then((result) => {
//   console.log(result);
// });

// Todo.findOneAndRemove()
// Todo.findByIdAndRemove()

Todo.findOneAndRemove({_id: '59418011f8b6faa77409569b'}).then((todo) => {
  
});

Todo.findByIdAndRemove('59418011f8b6faa77409569b').then((todo) => {
  console.log(todo);
});
