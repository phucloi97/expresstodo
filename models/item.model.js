const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const itemSchema = new Schema({
  name: {
    type: String,
    required: true,
    unique: true,
  },
  description: {
    type: String,
    required: true,
  },
  complete: {
    type: Boolean,
    default: false,
  },
});

itemSchema.pre("save", async function (next) {
  let self = this;
  console.log(self);
  next();
});

const Items = mongoose.model("Items", itemSchema);
module.exports = Items;
