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

// db.collection('Todos').find({
//     _id: new ObjectID('5911b985f8b6faa77408f66e') }).toArray().then((docs) => {
//   console.log('Todos');
//   console.log(JSON.stringify(docs, undefined, 2));
// }, (err) => {
//   console.log('unable to fetch todos', err);
// });

// db.collection('Todos').find().count().then((count) => {
//   console.log(`Todos count: ${count}`);
// }, (err) => {
//   console.log('unable to fetch todos', err);
// });

db.collection('Users').find({name: 'Mark Lindberg'}).toArray().then((docs) => {
  console.log('Users');
  console.log(JSON.stringify(docs, undefined, 2));
}, (err) => {
  console.log('unable to fetch todos', err);
});

  // db.close();
});
