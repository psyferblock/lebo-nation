const mongoose =require("mongoose")
const Schema=mongoose.Schema;

const  entitySchema= new Schema ({
    entity_type:{
        type:String,
        require:true,

    },
    name:{
        type:String,
        require:true,

    },
    services:{
        type:[String],
        require:true,


    },
    images:{
        type:[String]
    },
    rating:{
        type: Number, 
        default:0,

    },
    tags:{
        type:[String],

    },
    reviews:{
        type:[String],

    },
    likeCount:{
        type:Number,
        default:0,
        user:[{
            type:mongoose.Schema.Types.ObjectId,
            ref:'User'
        }]
    },
    createdAt:{
        type:Date,
        default:new Date(),
    },
    cuisine:{
        type:[String],
        required:false,

        
    },
    location:{

    },
    websiteName:{
        type:String,
    },
    date: { 
        type: Date,
        default: Date.now ,
    },

})
module.exports=mongoose.model("Entity",entitySchema,entities)