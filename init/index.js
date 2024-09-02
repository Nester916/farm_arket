const mongoose = require("mongoose");
const initData = require("./data.js");
const Listing = require("../models/listing.js");

const MONGO_URL =
  "mongodb+srv://farm-project:Z7Bb54MMOSTeCoDA@cluster0.xe5do.mongodb.net/farm_arket?retryWrites=true&w=majority&appName=Cluster0";
main()
  .then(() => {
    console.log("connected to DB");
  })
  .catch((err) => {
    console.log(err);
  });

async function main() {
  await mongoose.connect(MONGO_URL);
}


//important 
const initDB = async () => {
  await Listing.deleteMany({});
  await Listing.insertMany(initData.data);
  console.log("data was initialized");
};

initDB();
