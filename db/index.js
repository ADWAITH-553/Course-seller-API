const mongoose = require('mongoose')

//connect
mongoose.connect('mongodb+srv://c:hEdDlBt4WmTE6NDy@cluster0.0ur8t7z.mongodb.net/')

//schemas
const adminSchema=new mongoose.Schema({
    username:String,
    password:String
})


const userSchema=new mongoose.Schema({
    username:String,
    password:String,
    purchasedCourses:[{
        type: mongoose.Schema.Types.ObjectId,
        ref:'course'
    }]
})

const courseSchema=new mongoose.Schema({
    title:String,
    description:String,
    imageLink:String,
    price:Number

})

const admin=mongoose.model('admin',adminSchema);
const user=mongoose.model('user',userSchema);
const course=mongoose.model('course',courseSchema);

module.exports={
    admin,user,course
}

