const express = require("express");
const mongoose = require("mongoose");
const Product = require("./models/productModel");

const app = express();

app.use(express.json());

app.get("/", function (req, res) {
  res.status(200).send("body");
});
app.post("/product", async (req, res) => {
  try {
    const product = await Product.create(req.body);

    res.status(200).send(product);
  } catch (error) {
    res.status(500).send(error);
  }
});
app.get("/products", async (req, res) => {
  try {
    const products = await Product.find({});
    res.status(200).send(products);
  } catch (error) {
    res.status(500).send(error);
  }
});

mongoose
  .connect(
    "mongodb+srv://admin:kuvDlWIg1B4yl73G@cluster0.52tnc4k.mongodb.net/?retryWrites=true&w=majority"
  )
  .then(() => {
    console.log("DB Connected!");
    app.listen(3000, () => {
      console.log("Server is started on port 3000");
    });
  })
  .catch((error) => {
    console.log("Error at DB connection:", error);
  });
