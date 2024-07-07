const mongoose = require("mongoose");

const connectDatbase = () => {
  mongoose.connect(process.env.DB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }).then((data) => {
    console.log(`MongoDB connected with server: ${data.connection.host}`);
  });
};

module.exports = connectDatbase;