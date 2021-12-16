const { model, Schema } = require("mongoose");
const PlatformSchema = Schema({
  name: {
    type: String,
    unique: true,
    required: true,
    trim: true,
  },
});

module.exports = model("Platform", PlatformSchema);
