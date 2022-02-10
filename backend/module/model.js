const mongoose = require("mongoose");

const dogSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "A Product must have a Name"],
    unique: true,
    trim: true,
    uppercase: true,
  },
  description: {
    type: String,
    required: [true, "A Product must have a descrition"],
  },
  price: {
    type: Number,
    required: [true, "A Product must have a price"],
    default: 100,
  },
  height: {
    type: Number,
    required: [true, "A Product must have a lifeSpan"],
  },
  image: {
    type: String,
    // required: [true, "A Product must have Cover Image"],
  },
});

module.exports = new mongoose.model("dogData", dogSchema);
