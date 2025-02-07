//express requirment
const express = require("express");
const app = express();
require("dotenv").config();

//extra dependencies
const path = require("path");
const cookieParser = require("cookie-parser");

//connection to mongodb
const { DBconnector } = require("./FMSmongoconnection");
DBconnector(process.env.MONGODB_URL)
    .then(() => console.log("...Mongodb Connected..."))
    .catch((err) => console.log("...Some error occured :", err));

// view engines
app.set("view engine", "ejs");
app.set('views', path.resolve("./views"));

//format decoder
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

//required files
const {handelcreate}=require("./Controllers/feedbackcreator");
const {Viewerrouter}=require("./Routes/Publicpageroutes");
const {router}=require("./Routes/adminroutes");
const {verifyadmin}=require("./Middlewares/verify");
const {logrouter}=require("./Routes/loginpageroutes");


//These are temproray routes 
app.use("/login",logrouter);
app.use("/admin",verifyadmin,router);
app.use("/feedback",Viewerrouter);

//srever starter
app.listen(process.env.PORT, () => console.log(`Server started at PORT:${process.env.PORT}`));