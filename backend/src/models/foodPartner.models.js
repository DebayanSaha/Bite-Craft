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
    phoneNum: {
      type: Number,
      required: true,
      unique: true
    },
    password: {
      type: String,
      required: true,
    },
  },
  {
    timeStamps: true,
  },
);

const foodPartnerModel = mongoose.model('FoodPartner',foodPartnerSchema);

module.exports = foodPartnerModel;
