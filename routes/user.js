const express = require('express');
const adminMiddleware=require("../middleware/admin")
const router=express.Router()
const {user,course}=require("../db/index");
const userMiddleware = require('../middleware/user');
const mongoose = require('mongoose')
router.post('/signup',async (req,res)=>{
    const username=req.body.username
    const password=req.body.password
    await user.create({
        username,
        password,
        purchasedCourses
    })
    res.json({message:"user created successfully"})
})


router.get('/courses',async (req,res)=>{
    const allCourse= await course.find({})
    res.json({courses:allCourse})
})

router.post('/courses/:courseId',userMiddleware,async (req,res)=>{
    const courseId=req.params.courseId
    const username=req.headers.username
    console.log(courseId)
    try{
        await user.updateOne({
            username: username
        },{
            "$push":{
                purchasedCourses:courseId
                
            }
        }
       )
       
    }
    catch(e){
        console.log(e)
    }
    res.json("purchase complete")
})

module.exports = router