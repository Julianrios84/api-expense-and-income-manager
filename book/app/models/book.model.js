const mongoose = require("mongoose");

const bookSchema = new mongoose.Schema(
  {
    name: {
      type: String,
    },
    value: {
      type: mongoose.Schema.Types.Decimal128 
    },
    tag: {
      type: Schema.Types.ObjectId,
      ref: "tags",
      required: true,
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
