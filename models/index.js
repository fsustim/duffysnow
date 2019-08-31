// models/index.js

const mongoose = require('mongoose');
const URI = require('../config/index');

mongoose.connect(process.env.MONGODB_URI || URI);

// When successfully connected
mongoose.connection.on('connected', () => {
    console.log('Established Mongoose Default Connection');
});

// When connection throws an error
mongoose.connection.on('error', err => {
    console.log('Mongoose Default Connection Error : ' + err);
});

// ----- try 2

// const MongoClient = require('mongodb').MongoClient;
// const uri = "mongodb+srv://duffy0:RubyEyes0@cluster0-tjlt4.mongodb.net/mern?retryWrites=true&w=majority";

// const client = new MongoClient(uri, { useNewUrlParser: true });
// client.connect(err => {
//     console.log("here:" + err);
//     const collection = client.db("mern").collection("test");
//     // perform actions on the collection object
//     client.close();
// });

//  THIS WORKS!!! --------------
// const connectionString = 'mongodb+srv://duffy0:RubyEyes0@cluster0-tjlt4.mongodb.net/test?retryWrites=true&w=majority';

// const mongoose = require('mongoose')
// const userSchema = require('./userSchema.js')
// const User = mongoose.model('user', userSchema, 'user')

// async function createUser(username) {
//     return new User({
//         username,
//         created: Date.now()
//     }).save()
// }

// async function findUser(username) {
//     return await User.findOne({ username })
// }

// ; (async () => {
//     const connector = mongoose.connect(connectionString)
//     const username = "toffy";

//     let user = await connector.then(async () => {
//         return findUser(username)
//     })

//     if (!user) {
//         user = await createUser(username)
//     }

//     console.log(user)
//     process.exit(0)
// })()