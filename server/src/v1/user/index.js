const {Router}=require("express")

const {register,} =require("./controller")

const router=Router();

// routes and apis
router.post("/register",register);




//  exporting routes
module.exports = router;
