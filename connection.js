const mongoose = require('mongoose');
require('dotenv').config();

// mongoose.connect(`mongodb+srv://${process.env.DB_USER}:${process.env.DB_PW}@cluster0.s11qz.mongodb.net/chatAppMern?retryWrites=true&w=majority`, ()=> {
//   console.log('connected to mongodb')
// })

mongoose.connect(`mongodb://${process.env.DB_USER}:${process.env.DB_PW}@ac-gr3xmtg-shard-00-00.7utksbp.mongodb.net:27017,ac-gr3xmtg-shard-00-01.7utksbp.mongodb.net:27017,ac-gr3xmtg-shard-00-02.7utksbp.mongodb.net:27017/?ssl=true&replicaSet=atlas-rlkwwc-shard-0&authSource=admin&retryWrites=true&w=majority`, ()=> {
   console.log('connected to mongodb')
 })