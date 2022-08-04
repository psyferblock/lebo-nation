// const { use } = require(".");
const { findOne } = require("../../../models/User");
const User = require("../../../models/User");
// const { findById } = require("../../../models/User");


const addUser =async (body,hashedPassword)=>{
  //get from body name and email variables
    // console.log(body)
    const {user_type,userName,familyName,email} = body;
    // add info to database using schema
    let user =new User({
        user_type,
        userName,
        familyName,
        email,
        password:hashedPassword,
    })
    return await user.save()

}
const getUser= async()=>{
    return await User.find()
}
//  get use by name from database
const getUserByName =async (name)=>{
    return await User.find({
        name,familyName});
}
// get user by id from database
const getUserById =async(id)=>{
    return await User.findById(id);
}
// get user by email from database
const getUserByEmail=async(email)=>{
    return await User.findOne(email);
}
// get user by type from database
const getUserByType=async (userType)=>{
  return await User.find({ user_type: userType });

}
// delete user from database 

// update user in database 



module.exports ={
    
    addUser,
    getUser,
    getUserByName,
    getUserByEmail,
    getUserByType,
    getUserById,
    
}