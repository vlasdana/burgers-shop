import database from "../config/database.js";
import {
  saveProduct,
  getBurgers,
  getDrinks,
  deleteById,
} from "../controllers/menuController.js";
import express from "express";

//router instance using Express function to define the routes
const router = express.Router();

router.get("/", (req, res) => {
  res.sendFile("index.html", { root: "public" });
});

router.get("/add", (req, res) => {
  res.sendFile("addProduct.html", { root: "public" });
});

router.delete("/:id", async function (req, res) {
  try {
    await deleteById(req.params.id);
    console.log(
      "The product with id: " +
        req.params.id +
        " was deleted from the database."
    );
    res.json({ success: true, message: "Product successfully deleted." });
  } catch (error) {
    res
      .status(500)
      .json({ success: false, message: "Error deleting product." });
  }
});

router.get("/burgers", getBurgers);
router.get("/drinks", getDrinks);

router.post("/save", saveProduct);

export default router;
