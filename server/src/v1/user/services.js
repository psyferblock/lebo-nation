// const { use } = require(".");
const { findOne } = require("../../../models/User");
const User = require("../../../models/User");
// const { findById } = require("../../../models/User");


const addUser =async (body,hashedPassword)=>{
  //get from body name and email variables
    // console.log(body)
    const {user_type,name,familyName,email} = body;
    // add info to database using schema
    const user =new User({
        user_type,
        name,
        familyName,
        email,
        password:hashedPassword,
    })
    return await user.save()

}
const getUserByName =async (name)=>{
    return await User.find({
        name,familyName});
}
const getUserById =async(id)=>{
    return await User.findById(id)
}
const getUserByEmail=async(email)=>{
    return await User.findOne(email)
}
const updateUser =async(id)=>{

}
const getUserByType=async (userType)=>{
  return await User.find({ user_type: userType });

}
const  deleteUser = async (id)=>{
    return await User.deleteMany(id)
}


module.exports ={
    addUser,
    getUserByName,
}