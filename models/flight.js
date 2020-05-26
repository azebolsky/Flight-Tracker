const mongoose = require("mongoose");
// shortcut variable
const Schema = mongoose.Schema;

const flightSchema = new Schema(
  {
    airline: {
      type: String,
      enum: ["American", "Southwest", "United"],
    },
    flightNo: {
      type: Number,
      required: true,
      max: 9999,
      min: 10,
    },
    departs: {
      type: Date,
      required: true,
      // default: function () {
      //   const date = new Date();
      //   const nextYear = new Date().getFullYear() + 1;
      //   date.setFullYear(nextYear);
      //   return date;
      // },
    },
    airport: {
      type: String,
      enum: ["AUS", "DFW", "LAX", "SAN", "DEN"],
      default: "SAN",
    },
  },
  {
    timestamps: true,
  }
);

// invoke model method export model
module.exports = mongoose.model("Flight", flightSchema);
