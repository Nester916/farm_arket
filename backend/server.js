const app = require("./app");
const connectDatbase = require("./dbdatabase");


// handling uncaught exception
process.on("uncaughtException",(err) => {
    console.log("Error : ${err.message}");
    console.log("shutting sown the server for handling uncaught exception");
})

// config
if(process.env.NODE_env !=="PRODUCTION"){
    require("dotenv").config({
        path:"backend/config/.env"
    })    
// connect db
connectDatbase();

//create server 
const server = app.listen(process.env.PORT,() => {
    console.log("server is running on http://localhost:${process.env.Port}");
});


// unhandled promise rejection
process.on("unhandledRejection", (err) =>{
    console.log("shutting down the server for $(err.message");
    console.log("shutting the server for unhandle promise rejection");
    server.close(() =>{
        process.exit(1);
    });
});