const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');

const {User} = require('./../server/models/user');

var id = '6c0ee21qw59ced80b760f59883';

// if (!ObjectID.isValid(id)){
//   console.log('Id is not valid');
// }
// Todo.find({
//   _id: id //mongoose could convert automatically
// }).then( (todos) => {
//   console.log('============================');
//   console.log('Todos', todos);
// });
//
// Todo.findOne({
//   _id: id //mongoose could convert automatically
// }).then( (todo) => {
//   console.log('============================');
//   console.log('Todo', todo);
//   console.log('============================');
// });

//Find one document by id is reccomended
// Todo.findById(id).then( (todo) => {
//   if (!todo){
//     return console.log('Id not found');
//   }
//   console.log('Todo By Id', todo);
// }).catch( (e) => console.log(e));//Invalid id

User.findById('5c0e6ea183528e9180f8d2e2').then( (user) => {
  if (!user){
    return console.log('Unable to find user');
  }
  console.log(JSON.stringify(user, undefined, 2));
}, (e) => {
  console.luserog(e);
});
