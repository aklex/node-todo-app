const _=require('lodash');
const express = require('express');
const bodyParser = require('body-parser');
const {ObjectID} = require('mongodb');

var {mongoose} = require('./db/mongoose');
var {Todo} = require('./models/todo');
var {User} = require('./models/user');

var app = express();

const port = process.env.PORT || 3000;

//using middleware
app.use(bodyParser.json());

//create POST req a route
app.post('/todos', (req, res) => {
  console.log(req.body);
  var todo = new Todo({
    text: req.body.text
  });
  todo.save().then( (doc) => {
    res.send(doc);
  }, (e) => {
    res.status(400).send(e);
  });
}); //GET /todos/w2j3hy47de0fuek

//create GET get all todos
app.get('/todos', (req, res) => {
  Todo.find().then( (todos) => {
    res.send({todos});
  }, (e) => {
    res.status(400).send(e);
  });
});
//Get Todo by Id
app.get('/todos/:id', (req, res) => {
  var id = req.params.id;
  if (!ObjectID.isValid(id)){//Id isn't valid
    return res.status(400).send();
  }
  Todo.findById(id).then((todo) =>{
    if (!todo){//Unable to find todo with current id
      return res.status(404).send();
    }
    res.send({todo});//identical {todo: todo}
  }).catch((e) => {
    res.status(400).send();
  });
});
//Remove Todo by Id
app.delete('/todos/:id', (req, res) => {
  var id = req.params.id;
  if (!ObjectID.isValid(id)){
    return res.status(400).send();
  }

  Todo.findByIdAndRemove(id).then( (todo) => {
    if (!todo){
      return res.status(404).send();
    }
    res.send(todo);
  }).catch( (e) => {
    res.status(400).send();
  });
});


//Patch route - update items
app.patch('/todos/:id', (req, res) => {
  var id = req.params.id;
  var body = _.pick(req.body, ['text', 'completed']);

  if (!ObjectID.isValid(id)){
    return res.status(400).send();
  }

  if (_.isBoolean(body.completed) && body.completed){
    body.completedAt = new Date().getTime();
  } else {
    body.completed = false;
    body.completedAt = null;
  }

  Todo.findByIdAndUpdate(id, {$set: body}, {new: true}).then( (todo) =>{
    if (!todo){
      return res.status(404).send();//if 404 send empty obj
    }

    res.send({todo});
  }).catch( (e) => {
    res.status(400).send();//if 400 send empty obj
  })
});

app.listen(port, () => {
  console.log(`Started up at port ${port}` );
});

module.exports = {app};
