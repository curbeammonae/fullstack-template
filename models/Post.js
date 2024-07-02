const mongoose = require("mongoose");

const PostSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    require: true,
  },
  cloudinaryId: {
    type: String,
    require: true,
  },
  color: {
    type: String,
    required: true,
  },
  clothingType: {
    type: String,
    required: true,
  },
  likes: {
    type: Number,
    required: true,
  },
  favorite: {
    type: Boolean,
    required: false,
    default: false,
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

//MongoDB Collection named here - will give lowercase plural of name 
module.exports = mongoose.model("Post", PostSchema);
