const mongoose = require("mongoose");
const foodPartnerModel = require("./foodPartner.models");

const foodSchema = mongoose.Schema(
  {
    foodName: {
      type: String,
      required: true,
    },
    video: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    foodpartner: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "FoodPartner",
    },
  },
  {
    timeStamps: true,
  },
);

const foodModel = mongoose.model("Food", foodSchema);

module.exports = foodModel;