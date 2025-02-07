const {setuser}=require("../service/auth")
const PASSWORD="aiml@dsce";

function handellogin(req,res,next){
    const body=req.body; 
    console.log(body.password);
    if(!body.password||body.password!=PASSWORD){
        return res.status(400).redirect("/login")
    };
    const token=setuser(req);
    res.cookie("ID",token);
    return res.status(200).redirect("/admin/");
}

module.exports={
    handellogin,
}