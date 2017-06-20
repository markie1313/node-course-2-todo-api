require('./config/config');
const _ = require('lodash');
const {ObjectID} = require('mongodb');
const express = require('express');
const bodyParser = require('body-parser');

var {mongoose} = require('./db/mongoose');
var {Todo} = require('./models/todo');
var {User} = require('./models/user');

var app = express();
const port = process.env.PORT;

app.use(bodyParser.json());

app.post('/todos', (req, res) => {
  var todo = new Todo({
    text : req.body.text
  });

  todo.save().then((doc) => {
    res.send(doc);
  }, (e) => {
    res.status(400).send(e);
  });
});

app.get('/todos', (req, res) => {
  Todo.find().then((todos) => {
    res.send({todos});
  }, (e) => {
    res.status(400).send(e);
  })
});

// GET /todos/123456
app.get('/todos/:id', (req, res) => {
  var id = req.params.id;

  // valid id using isValid
    // 404 - send back empty send
    if (!ObjectID.isValid(id)) {
      console.log('ID not valid');
      return res.status(404).send();
    }
// torkay13
// findById
  // success
    // if todo - send it back
    // if !todo - send back 404 with empty body
    Todo.findById(id).then((todo) => {
      if (!todo) {
        res.status(404).send();
        console.log('ID not in db');
      } else {
        console.log(req.params);
        console.log('Todos', todo);
        res.send({todo});//send the object of 'todo' and see the magic
      }
    }).catch((e) => res.status(400).send());
  // error
    // send back 400 - empty like above
  //   console.log(req.params);
  // res.send(req.params)
});

app.delete('/todos/:id', (req, res) => {
  // get the id
  var id = req.params.id;

  //validate the id -> not valid, return 404
  if (!ObjectID.isValid(id)) {
    console.log('ID not valid');
    return res.status(404).send();
  }

      Todo.findByIdAndRemove(id).then((todo) => {
          if (!todo) {
            return res.status(404).send();
            console.log('ID not in db');
          }
            // console.log(req.params);
            // console.log('Todos', todo);
            // res.send(todo);//send the object of 'todo' and see the magic
            res.send({todo});
        }).catch((e) => res.status(400).send());
});

app.patch('/todos/:id', (req, res) => {
  var id = req.params.id;
  var body = _.pick(req.body, ['text', 'completed']);

  if (!ObjectID.isValid(id)) {
    return res.status(404).send();
  }

  if (_.isBoolean(body.completed) && body.completed) {
    body.completedAt = new Date().getTime();
  } else {
    body.completed = false;
    body.completedAt = null;
  }

  Todo.findByIdAndUpdate(id, {$set: body}, {new: true}).then((todo) => {
    if (!todo) {
      return res.status(404).send();
    }
    res.send({todo});
  }).catch((e) => {
    res.status(400).send();
  })
});

app.listen(port, () => {
  console.log(`Started on port ${port}`);
});

module.exports = {app};
