const express = require('express');
const adminMiddleware=require("../middleware/admin")
const router=express.Router()
const {user,course}=require("../db/index");
const userMiddleware = require('../middleware/user');

router.post('/signup',async (req,res)=>{
    const username=req.body.username
    const password=req.body.password
    await user.create({
        username,
        password
    })
    res.json({message:"user created successfully"})
})


router.get('/courses',async (req,res)=>{
    const allCourse= await course.find({})
    res.json({courses:allCourse})
})

router.get('/courses',userMiddleware,(req,res)=>{

})

module.exports = router