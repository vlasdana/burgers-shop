import database from "../config/database.js";
import {
  saveProduct,
  getBurgers,
  getDrinks,
} from "../controllers/menuController.js";
import express from "express";

const router = express.Router();

router.get("/", (req, res) => {
  res.sendFile("index.html", { root: "public" });
});

router.get("/add", (req, res) => {
  res.sendFile("addProduct.html", { root: "public" });
});

router.get("/burgers", getBurgers);
router.get("/drinks", getDrinks);

router.post("/save", saveProduct);

export default router;
