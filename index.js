const express = require('express');
const bodyParser = require('body-parser');
const app=express();
const adminRouter=require("./routes/admin");
const userRouter=require("./routes/user");

//middleware
app.use(bodyParser.json());
app.use("/admin",adminRouter);
app.use("/user",userRouter);
 
app.listen(8000,()=>{
    console.log("listening");
})