// const { Router } = require("express");

const router = require("express").Router();
const dbServices =require("../api/test.server")
const middleware=require("../db/middleware")
const jwt = require('jsonwebtoken')

router.get("/data",async(req,res)=>{
    dbServices.getschema(req,res)
})

router.get("/getdbdata",middleware,async(req,res)=>{
    dbServices.getdbdata(req,res)
})

router.post("/postdbdata",async(req,res)=>{
    
    dbServices.postdbdata(req,res)
})

router.post("/login",async(req,res)=>{
    
    dbServices.login(req,res)
})
module.exports = router;