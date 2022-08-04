const express = require("express");
require("dotenv").config();
require('./configs/db.config').connect()


// const mongoose = require("mongoose");
const cors = require("cors");
const app = express();

// user router with utility
const userRouter = require("./src/v1/user/userRoute");
app.use("/api/v1/user", userRouter);

// entity router with utility 
const entityRouter = require("./src/v1/entity")
app.use("/api/v1/entity", entityRouter);

//

// // mongodDB online -> use Atlas
// const DB_CONNECT = process.env.DB_CONNECT || "";
// mongoose.connect(DB_CONNECT, () => console.log("connected to db"));
// //

//using dependencies
const hostname = "127.0.0.1";
const portname = 3010;

app.use(cors());
app.use(express.json());


app.listen(portname, hostname, () => console.log("Server running"));

//
