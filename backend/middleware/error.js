const Errorhandler = require("../utils/errorhandler");

module.exports = (err, req, res, next) => {
  err.statusCode = err.statusCode || 500;
  err.message = err.message || "Internal server error";

  // wrong mongodb Id error
  if (err.name === "CastError") {
    const message = "Resources not found with this id... Invalid ${err.path}";
    err = new Errorhandler(message, 400);
  }
  // Duplicate key error
  if (err.code === 11000) {
    const message = "Duplicate key ${Object.keys(err.keyValue)} Entered";
    err = new Errorhandler(message, 400);
  }
  // wrong jwt error
  if (err.name === "JsonWebTokenError") {
    const message = "Your website is invalid. Please try again later";
    err = new Errorhandler(message, 400);
  }

  // jwt expired
  if (err.name === "TokenexpiredError") {
    const message = "Your website is expired. Try again later!";
    err = new Errorhandler(message, 400);
  }
  res.status(err.statusCode).json({
    success: false,
    message: err.message,
  });
};
