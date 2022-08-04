const User = require("../../../models/User");

const {addUser,
    getUserByName,
}=require("./services");


const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const { request } = require("http");
const TOKEN_SECRET = process.env.TOKEN_SECRET || "";

const register = async (req,res)=>{
    try {
        // salt basically adds 10 extra digits to better secure the encryption of the password
        const salt =await bcrypt.genSalt(10);
        // console.log(salt,"salt")
        
        const hashedPassword= await bcrypt.hash(req.body.password,salt);
        // console.log(hashedPassword)
        const addUserResult = await addUser(req.body,hashedPassword);
        // console.log(addUserResult,"something")

        return res.send({user:addUserResult._id});
    } catch (error) {
        console.log(error)
        return res.send(error)
    }

}
const logIn =async(req,res)=>{
    try {
        const {email,hashedPassword}=body;
        email=req.body.email;
        hashedPassword=req.body.password;
        

    } catch (error) {
        console.log(error)
        return res.send(error)        
    }
    
}

module.exports={
    register,
}