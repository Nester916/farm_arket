const express = require("express");
const path = require("path");
const User = require("../model/user");
const router = express.Router();
const {upload} = require("../multer");
const ErrorHandler = require("../utils/errorhandler");
const fs = require("fs")

router.post("/create-user", upload.single("file"), async (req, res, next) => {
  try{
  const { username, fullname, email, password } = req.body;
  const userEmail = await User.findOne({ email });

  if (userEmail) {
      const filename = req.file.filename
      const filePath = `uploads/${filename}`;
      fs.unlink(filePath, (err) => {
        if (err) {
          console.log(err);
          res.status(500).json()
        }
      })

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
  const newUser = await User.create(user);
  res.status(201).json({
    success: true,
    newUser,
  });
});

module.exports = router;
