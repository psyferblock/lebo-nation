const mongoose = require("mongoose");
const Schema=mongoose.Schema

const userSchema =new Schema({
    user_type: {
        type: Number,
        require: true,
        default: 0,
       // max 100 for user type because we will have leveling up among users. i chose 100 as a precaution
        max: 100,
      },
      userName: {
        type: String,
        require: true,
        min: 6,
        max: 255,
      },
      familyName:{
        type: String,
        require: true,
        min: 6,
        max: 255,
      },
      email: {
        type: String,
        require: true,
        min: 6,
        max: 255,
        unique: true,
      },
      password: {
        type: String,
        require: true,
        min: 6,
        max: 1024,
      },
})
module.exports = mongoose.model("User", userSchema);
