const {MongoClient, ObjectID} = require('mongodb');
var obj = new ObjectID();
console.log(obj);

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
  if (err){
    console.log('Unable to connect MongoDB server');
  }
  console.log('Connect to MongoDB server');
  const db = client.db('TodoApp');
  // db.collection('Todos').insertOne({
  //   text: 'Something to do',
  //   completed: false
  // }, (err, result) => {
  //   if (err){
  //     return console.log('Unable to insert todo', err);
  //   }
  //
  //   console.log(JSON.stringify(result.ops, undefined, 2));
  // });
  db.collection('Users').insertOne({
    name: 'Torrence',
    age: 31,
    location: 'New York'
  }, (err, result) => {
    if (err){
      return console.log('Unable to insert User', err);
    }
    console.log(JSON.stringify(result.ops, undefined, 2));
    console.log(result.ops[0]._id);
    console.log("End");
  });


  client.close();//close connection with mongo server
}); //url, callback
