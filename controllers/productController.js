import Product from "../models/productModel.js";

export async function createProduct(req, res) {
  try {
    const product = await Product.create(req.body);
    res.status(200).json(product);
  } catch (error) {
    res.status(500).send("Internal Server Error");
  }
}
