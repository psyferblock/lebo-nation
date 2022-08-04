const {Router}=require("express")

const {
    register,
    logIn,
    } =require("../controllers/UserController")

const router=Router();

// routes and apis
router.post("/register",register);
router.post("/login",logIn);





//  exporting routes
module.exports = router;
