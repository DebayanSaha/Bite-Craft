const mongoose = require("mongoose");

const foodPartnerSchema = mongoose.Schema(
  {
    firstName: {
      type: String,
      required: true,
    },
    lastName: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true
    },
    storeName: {
      type: String,
      required: true,
    },
    phoneNo: {
      type: Number,
      required: true,
      unique: true
    },
    password: {
      type: String,
      required: true,
    },
    address: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  },
);

const foodPartnerModel = mongoose.model('FoodPartner',foodPartnerSchema);

module.exports = foodPartnerModel;
