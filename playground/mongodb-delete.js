const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
  if (err){
    console.log('Unable to connect MongoDB server');
  }
  console.log('Connect to MongoDB server');
  const db = client.db('TodoApp');

//delete all
  db.collection('Users').deleteMany({name: 'Aleksey'}).then( (result) => {
    console.log(result);
  });

  //delete first
  db.collection('Users').deleteOne({name: 'Aleksey'}).then( (result) => {
    console.log(result);
  });
  //delete all
  db.collection('Users').findOneAndDelete({name: 'Andrey'}).then( (result) => {
    console.log(result);
  });


  client.close();//close connection with mongo server
}); //url, callback
