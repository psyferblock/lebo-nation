const express = require("express");
require("dotenv").config();

const mongoose = require("mongoose");
const cors = require("cors");
const userRouter = require("./src/v1/user");
//

// mongodDB online -> use Atlas
const DB_CONNECT = process.env.DB_CONNECT || "";
mongoose.connect(DB_CONNECT, () => console.log("connected to db"));
//

//using dependencies
const hostname = "127.0.0.1";
const portname = 3010;
const app = express();

app.use(cors());
app.use(express.json());
app.use("/api/v1/user", userRouter);
app.listen(portname, hostname, () => console.log("Server running"));

//
