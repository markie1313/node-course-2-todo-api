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


  db.close();
});
