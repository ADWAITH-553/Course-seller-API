const express = require('express');
const adminMiddleware=require("../middleware/admin")
const router=express.Router()


router.post('/signup',(req,res)=>{

})

router.post('/courses',adminMiddleware,(res,req)=>{

})

router.get('/courses',adminMiddleware,(req,res)=>{

})

module.exports = router