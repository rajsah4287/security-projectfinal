const mongoose = require('mongoose');

var mongoURL = "mongodb+srv://robertraj669:bgsD7b0KbYXr6vXv@desinghouse.xwxg5l9.mongodb.net/travels";

mongoose.connect(mongoURL, {useUnifiedTopology : true , useNewUrlParser:true} )

var connection = mongoose.connection

connection.on("error", ()=>{
    console.log("Mongo DB connection failed");
})
connection.on("connected" , ()=>{
    console.log("mongo DB connection Successfull");
})

module.exports = mongoose;