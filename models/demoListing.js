const mongoose = require("mongoose");
const Schema = mongoose.Schema;
//schema varibale has been taken that i dont need to write the mongoose.Schema all the time,

const demoListingSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  description: String,
  image: {
    type: String,
    //default if undefined
    //set v = jodi dei pic but empty
    default:
      "https://unsplash.com/photos/yellow-fruits-on-brown-wooden-table-lY1o-JKUAik",
    set: (v) =>
      v === ""
        ? "https://unsplash.com/photos/yellow-fruits-on-brown-wooden-table-lY1o-JKUAik"
        : v,
  },
  price: Number,
  location: String,
  category: String,
});

//Creates a Mongoose model named Listing based on the listingSchema. This model can be used to interact with the listings collection in the database (e.g., creating, reading, updating, and deleting documents).
const demoListing = mongoose.model("demoListing", demoListingSchema);
module.exports = demoListing;
