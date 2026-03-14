const foodItemModel = require("../models/food.models");
const likeFoodModel = require("../models/likes.models");
const saveFoodModel = require("../models/saves.models");

const storageService = require("../services/storage.service");
const { v4: uuid } = require("uuid");

async function createFood(req, res) {
  console.log(req.foodPartner);
  console.log(req.body);
  console.log(req.file);

  const fileUpload = await storageService.uploadFile(req.file.buffer, uuid());

  const foodItem = await foodItemModel.create({
    foodName: req.body.foodName,
    video: fileUpload.url,
    description: req.body.description,
    foodpartner: req.foodPartner._id,
  });

  res.status(201).json({
    message: "Food Item created",
    food: foodItem,
  });
}

async function likeFood(req, res) {
  const { foodId } = req.body;
  const user = req.user;

  const isLiked = await likeFoodModel.findOne({
    user: user._id,
    food: foodId,
  });

  if (isLiked) {
    await likeFoodModel.deleteOne({
      user: user._id,
      food: foodId,
    });
    await foodItemModel.findByIdAndUpdate(foodId, {
      $inc: { likeCount: -1 },
    });
    return res.status(201).json({
      message: "Unliked",
    });
  }

  const like = await likeFoodModel.create({
    user: user._id,
    food: foodId,
  });

  await foodItemModel.findByIdAndUpdate(foodId, {
    $inc: { likeCount: 1 },
  });

  res.status(201).json({
    message: "Liked",
    like,
  });
}

async function saveFood(req, res) {
  const { foodId } = req.body;
  const user = req.user;

  const isSaved = await saveFoodModel.findOne({
    user: user._id,
    food: foodId,
  });

  if (isSaved) {
    await saveFoodModel.deleteOne({
      user: user._id,
      food: foodId,
    });
    await foodItemModel.findByIdAndUpdate(foodId, {
      $inc: { saveCount: -1 },
    });
    return res.status(201).json({
      message: "Unsaved",
    });
  }

  const save = await saveFoodModel.create({
    user: user._id,
    food: foodId,
  });
  await foodItemModel.findByIdAndUpdate(foodId, {
    $inc: { saveCount: 1 },
  });

  res.status(201).json({
    message: "Saved",
    save,
  });
}

async function getFoodItems(req, res) {
  const user = req.user;
  const foods = await foodItemModel.find({}).populate("foodpartner");
  const items = await Promise.all(
    foods.map(async(food)=>{
        const liked = await likeFoodModel.findOne({
            user: user._id,
            food: food._id
        })
        const saved = await saveFoodModel.findOne({
            user: user._id,
            food: food._id
        })
        return {
            ...food.toObject(),
            isLiked: !!liked,
            isSaved: !!saved
        }
    })
  )
  res.status(200).json({
    message: "Food items fetched successfully",
    items,
  });
}
module.exports = {
  createFood,
  getFoodItems,
  likeFood,
  saveFood,
};
