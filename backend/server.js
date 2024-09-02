const app = require("./app");
const connectDatbase = require("./db/database");

// handling uncaught exception
process.on("caughtException", (err) => {
  console.log(`Error : ${err.message}`);
  console.log(`Shutting down the server for handling uncaught exception.`);
});

// config
if (process.env.NODE_env !== "PRODUCTION") {
  require("dotenv").config({
    path: "backend/config/.env",
  });
  // connect db
  connectDatbase();

  //create server
  const server = app.listen(process.env.PORT, () => {
    console.log(`Server is running on http://localhost:${process.env.PORT}`);
  });

  // unhandled promise rejection
  process.on("unhandledRejection", (err) => {
    console.log(`Shutting down the server for ${err.message}!`);
    console.log(`Shutting the server for unhandle promise rejection!`);
    server.close(() => {
      process.exit(1);
    });
  });
}
