const {Router}=require("express")

const {
   getProfile,

    } =require("../controllers/EntityController");

const router=Router();

// routes and apis

router.post("/profile",getProfile);


module.exports = router;

