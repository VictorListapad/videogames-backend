const { model, Schema } = require("mongoose");

const GameSchema = Schema({
  title: {
    type: String,
    required: true,
    trim: true,
  },
  genre: {
    type: String,
    required: true,
    trim: true,
  },
  platform: {
    type: [],
    required: true,
    ref: "Platform",
  },
  publisher: {
    type: String,
    required: true,
    trim: true,
  },
  developer: {
    type: String,
    required: true,
    trim: true,
  },
  releaseDate: {
    type: Date,
    required: true,
  },
  video: {
    type: String,
    trim: true,
  },
  headerImage: {
    type: String,
    required: true,
    trim: true,
  },
  screenShot1: {
    type: String,
    required: true,
    trim: true,
  },
  screenShot2: {
    type: String,
    required: true,
    trim: true,
  },
  screenShot3: {
    type: String,
    required: true,
    trim: true,
  },
  screenShot4: {
    type: String,
    required: true,
    trim: true,
  },
  description: {
    type: String,
    trim: true,
    require: true,
  },
  review: {
    type: Number,
  },
});

module.exports = model("Game", GameSchema);
