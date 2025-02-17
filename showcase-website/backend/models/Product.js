const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
  image: { type: String, required: true },
  demo_url: { type: String },
  price: { type: Number, required: true },
  category: { type: String, enum: ["Website", "AI Model", "AI Share Card", "Other"], required: true },
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model("Product", ProductSchema);
