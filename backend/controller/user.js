const express = require("express");
const path = require("path");
const User = require("../model/user");
const router = express.Router();
const {upload} = require("../multer");
const ErrorHandler = require("../utils/errorhandler");

router.post("/create-user", upload.single("file"), async (req, res, next) => {
  const { username, fullname, email, password } = req.body;
  const userEmail = await User.findOne({ email });

  if (userEmail) {
    return next(new ErrorHandler("User already exists", 400));
  }

  const filename = req.file.filename;
  const fileUrl = path.join(filename);

  const user = {
    avatar: fileUrl,
    username: username,
    fullname: fullname,
    email: email,
    password: password,
  };
  console.log(user);
});

module.exports = router;
