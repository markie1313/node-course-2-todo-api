// const MongoClient = require('mongodb').MongoClient;
// this is the same as the line above
const {MongoClient, ObjectID} = require('mongodb');


// var user = {name: 'mark', age: 51};
// var {name} = user;
// console.log(name);

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if (err) {
    return console.log('Unable to connect to mongodb server');
  }
  console.log('Connected to mongodb, baby!');

// deleteMany
// db.collection('Todos').deleteMany({text: 'eat lunch'}).then((result) => {
//   console.log(result);
// });
// db.collection('Users').deleteMany({name: 'Mark Lindberg'}).then((result) => {
//   console.log(result);
// });

// deleteOne
// db.collection('Todos').deleteOne({text: 'eat lunch'}).then((result) => {
//   console.log(result);
// });

// findOneAndDelete
// db.collection('Todos').findOneAndDelete({completed: false}).then((result) => {
//   console.log(result);
// });
db.collection('Users').findOneAndDelete({_id: ObjectID('591105e55618926e3bb1bd22')}).then((result) => {
  console.log(result);
});

  // db.close();
});
