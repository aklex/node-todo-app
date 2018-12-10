const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
  if (err){
    console.log('Unable to connect MongoDB server');
  }
  console.log('Connect to MongoDB server');
  const db = client.db('TodoApp');

//print all users
  db.collection('Users').find().toArray().then( (docs) => {
    console.log('Print all users');
    console.log(JSON.stringify(docs, undefined, 2));
  }, (err) =>{
    console.log('Unable fetch data', err);
  });

//Print only Aleksey
  db.collection('Users').find({name: 'Aleksey'}).toArray().then( (docs) => {
    console.log('Print Aleksey');
    console.log(JSON.stringify(docs, undefined, 2));
  }, (err) =>{
    console.log('Unable fetch data', err);
  });

  //Print only with partiqular _id
    db.collection('Users').find({_id: new ObjectID('5c0d46f901ab365c549f0dc4')}).toArray().then( (docs) => {
      console.log('Print _id: 5c0d46f901ab365c549f0dc4');
      console.log(JSON.stringify(docs, undefined, 2));
    }, (err) =>{
      console.log('Unable fetch data', err);
    });

    //count people who are living in Kiev
    db.collection('Users').find({location: 'Kiev'}).count().then( (count) => {
      console.log(`There are ${count} people living in Kiev`);
    }, (err) =>{
      console.log('Unable fetch data', err);
    });

  client.close();//close connection with mongo server
}); //url, callback
