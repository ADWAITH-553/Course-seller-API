const express = require('express');
const adminMiddleware=require("../middleware/admin")
const router=express.Router()
const {admin,courses}=require('../db/index')

router.post('/signup',async (req,res)=>{
    const username=req.body.username;
    const password=req.body.password;

    //check if user exists
    await admin.create({
        username:username,
        password:password
    })
    res.json({
        message:"admin created successfully"
    })


})

router.post('/courses',(res,req)=>{

})

router.get('/courses',(req,res)=>{

})

module.exports = router