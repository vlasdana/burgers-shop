import database from "../config/database.js";
import {
  getAllMenuItems,
  youAreInSave,
} from "../controllers/menuController.js";
import express from "express";
const router = express.Router();

router.get("/", (req, res) => {
  res.sendFile("index.html", { root: "public" });
});
router.get("/add", (req, res) => {
  res.sendFile("addProduct.html", { root: "public" });
});

router.post("/save", youAreInSave);
router.get("/checkdb", (req, res) => {
  database.ping((err) => {
    if (err) return res.status(500).send("Not conected!!");
    res.status(200).send("Connected!");
  });
});
router.get("/menu", getAllMenuItems);

export default router;
