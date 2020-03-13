const mongoose = require("mongoose");

const BookingSchema = new mongoose.Schema({
  date: String,
  approved: Boolean,
  user: {
    type: mongoose.Schema.Types.ObjectId, //grava referencia de Id do user
    ref: "User" //o user model referente pro id
  },
  spot: {
    type: mongoose.Schema.Types.ObjectId, //grava referencia de Id do spot
    ref: "Spot" //o spot model referente pro id
  }
});

module.exports = mongoose.model("Booking", BookingSchema);
