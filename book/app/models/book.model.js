const mongoose = require("mongoose");
const { Schema } = mongoose;
const tags = require("./tags.model");

const bookSchema = new mongoose.Schema(
  {
    name: {
      type: String,
    },
    value: {
      type: Schema.Types.Decimal128
    },
    tag: {
      type: Schema.Types.ObjectId,
      ref: tags,
      autopopulate: true
    },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

bookSchema.plugin(require("mongoose-autopopulate"));
module.exports = mongoose.model("book", bookSchema);
