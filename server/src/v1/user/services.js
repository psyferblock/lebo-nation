// const { use } = require(".");
const User = require("../../../models/User");
// const { findById } = require("../../../models/User");


const addUser =async (body,hashedPassword)=>{
  //get from body name and email variables
    // console.log(body)
    const {user_type,name,email} = body;
    // add info to database using schema
    const user =new User({
        user_type,
        name,
        email,
        password:hashedPassword,
    })
    return await user.save()

}

module.exports ={
    addUser,
}