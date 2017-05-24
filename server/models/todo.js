var mongoose = require('mongoose');

var Todo = mongoose.model('Todo', {
  text: {
    type: String,
    required: true,
    minlength: 1,
    trim: true
  },
  completed: {
    type: Boolean,
    default: false
  },
  completedAt: {
    type: Number,
    default: null
  }
});

// var otherTodo = new Todo({
//   text: '   edith this video  '
// });
//
// otherTodo.save().then((doc) =>{
//   console.log('Saved otherTodo', doc);
// }, (e) => {
//   console.log('didn\'t save otherTodo ', e);
// });

module.exports = {Todo};
