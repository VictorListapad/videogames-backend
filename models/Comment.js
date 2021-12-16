const { model, Schema } = require("mongoose");

const CommentSchema = Schema({
  author: {
    type: Schema.Types.ObjectId,
    requred: true,
    trim: true,
    ref: "User",
  },
  text: {
    type: String,
    required: true,
    trim: true,
  },
  date: {
    type: Date,
  },
  gameId: {
    type: Schema.Types.ObjectId,
    required: true,
    trim: true,
    ref: "Game",
  },
});

module.exports = model("Comment", CommentSchema);
