const {user }=require('../db/index');
function userMiddleware(req,res,next){
    const username=req.headers.username;
    const password=req.headers.password;
    //promise syntax
    user.findOne({
        username:username,
        password:password
    }).then(function(value){
        if(value){
            next();
        }
        else{
            res.status(403).json({
                msg:"user doesnot exist"
            })
        }
    })
}

module.exports = userMiddleware;