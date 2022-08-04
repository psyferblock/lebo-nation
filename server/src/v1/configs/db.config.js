const mongoose = require('mongoose');

const {DB_CONNECT} = process.env;

exports.connect = ()=>{
    mongoose.connect(DB_CONNECT)
    .then(()=>{
        console.log("Successfully connected to database");
    })
    .catch(()=>{
        console.log("Database connection failed. Exiting now");
        process.exit(1);
    })
}