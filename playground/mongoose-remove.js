const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');

const {User} = require('./../server/models/user');

// Todo.remove({}).then((result) => {
//   console.log('Remove all Todos');
// });
//
Todo.findOneAndRemove({_id:'5c110914ede0bbb7d304e9ae'}).then`( (todo) => {
  console.log(todo);
});


Todo.findByIdAndRemove('5c110914ede0bbb7d304e9ae').then( (todo) =>{
  console.log(todo);
});
