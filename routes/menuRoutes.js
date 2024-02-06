import database from "../config/database.js";
import {
  getAllMenuItems,
  saveProduct,
  burgers,
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

router.get("/burgers", burgers);
router.get("/drinks", getDrinks);

/*const data_drinks = [
  {
    id: 11,
    name: "Fanta",
    description: "sparkling/non-alcoholic",
    active: "\u2714",
    image: "undefined",
  },
  {
    id: 12,
    name: "Coca-Cola",
    description: "sparkling/non-alcoholic",
    active: "\u2714",
    image: "undefined",
  },
  {
    id: 13,
    name: "Sprite",
    description: "sparkling/non-alcoholic",
    active: "\u2714",
    image: "undefined",
  },
];
router.get("/drinks", (req, res) => {
  res.render("drinks", { data_drinks });
});*/

router.post("/save", saveProduct);
/*router.get("/checkdb", (req, res) => {
  database.ping((err) => {
    if (err) return res.status(500).send("Not conected!!");
    res.status(200).send("Connected!");
  });
});*/
router.get("/menu", getAllMenuItems);

export default router;
