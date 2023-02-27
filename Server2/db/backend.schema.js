const mongoose =require("mongoose")


const dbDetails = mongoose.Schema(
   
    {
        userId:{
            type:Number,
            required:true  
        },
        id:{
            type:Number,
            required:true 
        },
        title:{
            type:String,
            required:true
        },
        body:{
            type:String,
            required:true
        },
        price:{
            type:String,
            required:true

        },
        Button:{
            type:String,
            required:true
        }
})
const dbModule = mongoose.model("chicken", dbDetails)
module.exports.schema = dbModule;
