const express = require("express");
const path = require("path");
const router = express.Router();
const {upload} = require("../multer");

router.post("/create-user", upload.single("file"), async (req, res, next)=> {
    const {avatar, username, name, email, password} = req.body;
    const userEmail = await User.findOne({ email });

    if (userEmail) {
        return next(new ErrorHandler("User already exists", 400));
}

const filename = req.file.filename;
const fileUrl = path.join(filename);
const user = {
    avatar: fileUrl,
    username: username,
    name: name,
    email: email,
    password: password,
};
console.log(user);
})

module.exports = router;
