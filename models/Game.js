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
    trim: true,
  },
  screenShot2: {
    type: String,
    trim: true,
  },
  screenShot3: {
    type: String,
    trim: true,
  },
  screenShot4: {
    type: String,
    trim: true,
  },
  description: {
    type: String,
    trim: true,
    require: true,
  },
  reviews: {
    type: [],
    ref: "Review",
  },
});

module.exports = model("Game", GameSchema);
