const express = require("express");
const app = express();
const mongoose = require("mongoose");
const demoListing = require("./models/demoListing.js");

const MONGO_URL =
  "mongodb+srv://farm-project:Z7Bb54MMOSTeCoDA@cluster0.xe5do.mongodb.net/farm_arket?retryWrites=true&w=majority&appName=Cluster0";
main()
  .then(() => {
    console.log("Database connected successfully ");
  })
  .catch((err) => console.log(err));

async function main() {
  await mongoose.connect(MONGO_URL);
}

app.get("/", (req, res) => {
  console.log("Hi, I am root");
  res.send("success");
});

// app.get("/testListing", async (req, res) => {
//   let sampleListing = new demoListing({
//     title: "Gopal Bhog Mango",
//     description:
//       "Experience the exquisite taste of Mopal Bhog mangoes, handpicked for their unparalleled sweetness and rich flavor. These premium mangoes are perfect for enjoying fresh, in desserts, or as a gift for loved ones. Order now to savor the finest quality Mopal Bhog mangoes delivered straight to your doorstep!",
//     image:
//       "https://unsplash.com/photos/yellow-fruits-on-brown-wooden-table-lY1o-JKUAik",
//     price: "200",
//     location: "Rajshahi",
//     category: "Fruits",
//   });
//   await sampleListing.save();
//   console.log("sample was saved");
//   res.send("success");
// });

app.listen(8080, () => {
  console.log("server is running on port 8080");
});

