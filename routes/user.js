const express = require('express');
const adminMiddleware=require("../middleware/admin")
const router=express.Router()
const {user,course}=require("../db/index")

router.post('/signup',async (req,res)=>{
    const username=req.body.username
    const password=req.body.password
    await user.create({
        username,
        password
    })
    res.json({message:"user created successfully"})
})


router.post('/courses',adminMiddleware,(res,req)=>{

})

router.get('/courses',adminMiddleware,(req,res)=>{

})

module.exports = router