const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
  if (err){
    console.log('Unable to connect MongoDB server');
  }
  console.log('Connect to MongoDB server');
  const db = client.db('TodoApp');

  //update
  //Using mongo update operators
  db.collection('Users').findOneAndUpdate({
    name: 'Ivan'
  }, {
    $set: {
      name: 'Mike'
    },
    $inc: {
      age: 5
    }
  }, {
      returnOriginal: false
  }).then( (result) => {
    console.log(result);
  });


  client.close();//close connection with mongo server
}); //url, callback
