const mongoose = require("mongoose");

const TagsSchema = new mongoose.Schema(
  {
    name: {
      type: String,
    },
    type: {
      type: Number,
    }
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

module.exports = mongoose.model("tags", TagsSchema);
