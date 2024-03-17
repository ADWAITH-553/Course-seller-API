const express = require('express');
const adminMiddleware=require("../middleware/admin")
const router=express.Router()
const {admin,course}=require('../db/index')

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

router.post('/courses',adminMiddleware,async (req,res)=>{
    console.log("hii")
    console.log(req.body.description)
    const title=req.body.title;
    const description=req.body.description;
    const imageLink=req.body.imageLink;
    const price=req.body.price;

     const newCourse=await course.create({
        title,
        description,
        imageLink,
        price
    })
    res.json({
        message:"courses created successfully", courseId:newCourse._id
    })

})

router.get('/courses',(req,res)=>{

})

module.exports = router