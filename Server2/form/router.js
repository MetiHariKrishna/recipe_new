const { request } = require('express')
const express = require('express')
const router =express.Router()
const {Items} =require("../form/module")
const bcrypt =require("bcrypt")

router.post("/signup",async(req,res)=>{
    console.log("req",req.body)
    //    const saltPassword =await bcrypt.genSalt(10)
    //    const securePassword =await bcrypt.hash(req.body.password,saltPassword)



    // const signUpUser =new Items(req.body)
    // signUpUser.save()
    const result= await  Items(req.body) 
    return res.status(200).json({message: result , status: 200})   
    // .then(data =>{
    //     res.json(data)
    // })
    // .catch(error =>{
    //     res.json(error)
    // })
})

module.exports= router;