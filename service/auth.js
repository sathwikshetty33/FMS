const jwt=require("jsonwebtoken")
require("dotenv").config();

function setuser(req){
    return jwt.sign({
        email:req.email,
    },process.env.SecretKey);
}

function getuser(cookie){
    return jwt.verify(cookie,process.env.SecretKey);
}

module.exports={
    setuser,
    getuser,
}