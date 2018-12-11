var express = require('express');
var bodyParser = require('body-parser');
var {ObjectID} = require('mongodb');

var {mongoose} = require('./db/mongoose');
var {Todo} = require('./models/todo');
var {User} = require('./models/user');

var app = express();
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

//create GET rea get all todos
app.get('/todos', (req, res) => {
  Todo.find().then( (todos) => {
    res.send({todos});
  }, (e) => {
    res.status(400).send(e);
  });
});

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

app.listen(3000, () => {
  console.log('Started on port 3000');
});

module.exports = {app};
