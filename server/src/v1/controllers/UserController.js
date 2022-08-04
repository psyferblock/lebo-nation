const User = require("./models/User");

const {addUser,
    getUserByName,
}=require("../services/userServicces");


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
    try{
    // checking email
    const user = await getUserByEmail(req.body.email);
    if(user===null){return res.send({err:"not in our system yo"})};

    // checking password
    let validPassword=await bcrypt.compare(
        req.body.password,
        user.password
    )
    if (!validPassword) return res.send({error:"who are you to sign in ?"})

    let token =jwt.sign({_id:user._id,email:user.email},TOKEN_SECRET)
    return res.header("auth-token",token).send({
        user_id:user._id,
        token:token,
        user_type:user.user_type,
        userName:user.userName,
        familyName:user.familyName,
        email:user.email,

    });

    }catch(error){
        console.log("oops something went wrong with signing in")
        return res.status(500).send(error)
    }
    
    
}

module.exports={
    register,
    logIn,
    
}