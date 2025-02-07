const express = require("express");
const Viewerrouter = express.Router();

Viewerrouter.get("/",(req,res)=>{
    return res.status(200).render("home");
})

module.exports={
    Viewerrouter,
}