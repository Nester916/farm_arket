const express = require("express");
const errorhandler = require("./utils/errorhandler");
const app = express();
const cookieParser = require("cookie-parser");
const bodyParser   = require("body-parser");
app.use(express.json());
app.use(cookieParser());
app.use(bodyParser.urlencoded({extended:true}));
app.use(fileupload({useTempFiles:true}));

// config
if(process.env.NODE_env !=="PRODUCTION"){
    require("dotenv").config({
        path:"backend/config/.env"
    })    
}

// it's for errorhandling
app.use(errorhandler);

module.exports = app