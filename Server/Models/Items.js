const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const sizeSchema = new Schema({
  type: {
    type: String,
    required: true,
  },
  quantity: { type: Number, required: true },
});

const itemSchema = new Schema({
  name: { type: String, required: true },
  price: { type: Number, required: true },
  img1: { type: String, required: true },
  img2: { type: String, required: true },
  category: { type: String, required: true },
  shippingTime: { type: String, required: true },
  color: { type: String, required: true },
  type: { type: String, required: true },
  fabric: { type: String, required: true },
  section: { type: String, required: true },
  code: { type: String, required: true, unique: true },
  id: { type: Number, required: true, unique: true },
  timeProductAdded: { type: Date, required: true },
  sizes: [sizeSchema],
});

const Item = mongoose.model("Item", itemSchema);

module.exports = Item;
