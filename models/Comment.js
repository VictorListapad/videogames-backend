const { model, Schema } = require("mongoose");

const CommentSchema = Schema({
  author: {
    type: Schema.Types.ObjectId,
    requred: true,
    trim: true,
  },
  text: {
    type: String,
    required: true,
    trim: true,
  },
  gameId: {
    type: Schema.Types.ObjectId,
    required: true,
    trim: true,
  },
});

module.exports = model("Comment", CommentSchema);
