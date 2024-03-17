const {admin }=require('../db/index');
function adminMiddleware(req,res,next){
    const username=req.headers.username;
    const password=req.headers.password;
    //promise syntax
    console.log("hii admin here")
    admin.findOne({
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

module.exports = adminMiddleware;