const mongoose = require("mongoose");

const connectDatbase = () => {
  mongoose
    .connect(process.env.DB_URL, {
      autoIndex: true, // Build indexes automatically
      autoCreate: true, // Automatically create collections
    })
    .then((data) => {
      console.log(`MongoDB connected with server: ${data.connection.host}`);
    });
};

module.exports = connectDatbase;
