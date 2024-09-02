const express = require("express");
const app = express();
const mongoose = require("mongoose");
const demoListing = require("./models/demoListing.js");
const Listing = require("./models/listing.js");
const path = require("path");
const methodOverride = require("method-override");
const ejsMate = require("ejs-mate");

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
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.urlencoded({ extended: true }));
app.engine("ejs", ejsMate);
app.use(express.static(path.join(__dirname, "/public")));
app.use(methodOverride("_method"));

app.get("/", (req, res) => {
  console.log("Hi, I am root");
  res.send("success");
});

//index route
app.get("/listings", async (req, res) => {
  const allListings = await Listing.find({});
  // console.log(allListings);
  res.render("listings/index.ejs", { allListings });
});
// ------------------
//new route must upore rakhbo naile show route er sathe clash 1111
app.get("/listings/new", (req, res) => {
  res.render("listings/new.ejs");
});
// ------------------

//show route
app.get("/listings/:id", async (req, res) => {
  let { id } = req.params;
  const listing = await Listing.findById(id);
  res.render("listings/show.ejs", { listing });
});
// ------------------

//create route 1111
app.post("/listings", async (req, res) => {
  const newListing = new Listing(req.body.listing); //create a instance newListing
  await newListing.save();
  res.redirect("/listings");
});

// --------------
//edit route
app.get("/listings/:id/edit", async (req, res) => {
  let { id } = req.params;
  const listing = await Listing.findById(id);
  res.render("listings/edit.ejs", { listing });
});

//update route
app.put("/listings/:id", async (req, res) => {
  let { id } = req.params;
  await Listing.findByIdAndUpdate(id, { ...req.body.listing });
  res.redirect(`/listings/${id}`);
});

// ------

//delete route
app.delete("/listings/:id", async (req, res) => {
  let { id } = req.params;
  let deletedListing = await Listing.findByIdAndDelete(id);
  console.log(deletedListing);
  res.redirect("/listings");
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
  console.log("server is running on port 3000");
});
