const {schema} = require("../db/backend.schema");

const {Items} = require("../db/test.schema"); 
const jwt = require('jsonwebtoken')
const middleware=require("../db/middleware")

async function getschema(){
    return await schema.find({})
   }
  

// async function getdbdata(){
//  const data =  await Items1.find({});
//  return data;
// }

async function postdbdata(data){ 
    const insertItems = new Items(data)
    return await insertItems.save();
}

async function login(data){ 
    const {email,password}=data;
    const exist = await Items.findOne({'email': email,"password":password})
    console.log(exist)
    let payload ={
        user:{
            id : exist._id
        }
    }
     const token  = jwt.sign(payload,'jwtSecret', {expiresIn:3600000})   
     return token  
    }

module.exports ={getschema,postdbdata,login}