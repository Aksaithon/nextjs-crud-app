import mongoose from "mongoose";

const ProductSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    category: { type: String, ref: "Category" },
    image: { type: String },
    price: { type: Number, required: true },
  },
  {
    timestamps: true,
  }
);

const ProductModel = mongoose.models.ProductModel || mongoose.model("ProductModel", ProductSchema);

export default ProductModel;

// Import the ProductModel and use it in your application
