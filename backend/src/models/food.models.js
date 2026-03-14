const mongoose = require("mongoose");

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
    likeCount: {
      type: Number,
      default: 0
    },
    saveCount: {
      type: Number,
      default: 0
    }
  },
  {
    timestamps: true,
  },
);

const foodModel = mongoose.model("Food", foodSchema);

module.exports = foodModel;