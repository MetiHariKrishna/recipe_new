
const { getschema,postdbdata, login } = require("../api/test.module")
const middleware=require("../db/middleware")
const jwt = require('jsonwebtoken')
const {Items} = require("../db/test.schema"); 



exports.postdbdata = async (req, res) => {

    try {
        const data =req.body
        
        console.log(data)
        const result= await  postdbdata(data) 
        return res.status(200).json({message: result , status: 200})     
    } catch (err) {
        return res.status(400).json({message: err.message, name: err.name, stack: err.stack, status: 400})
    }
}

exports.login = async (req, res) => {
    try {
        const data =req.body 
        console.log(data)
        const result= await login(data) 
        return res.status(200).json({message:result, status: 200})
    } catch (err) {
        return res.status(400).json({message: err.message, name: err.name, stack: err.stack, status: 400})
    }
}


exports.getdbdata = async (req, res) => {
    console.log("log",req.user.id)
    try{
        
        console.log("father")
        let exist = await Items.findById(req.user.id)
        if(!exist){
            return res.status(400).send('user not found')
        }
        res.status(200).json({ message: exist, status: 200 })
    }
    catch (err) {
        console.log("error")
        return res.status(400).json({ message: err.message, name: err.name, stack: err.stack, status: 400 })
    }
}

exports.getschema = async (req, res) => {
    try {
        const result = await getschema()
        return res.status(200).json({message: result , status: 200})
    } catch (err){
        return res.status(400).json({message: err.message, name: err.name, stack: err.stack, status: 400})
    }
}
