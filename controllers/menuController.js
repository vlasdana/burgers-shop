import MenuItem from "../models/menuModel.js";
import Item from "../models/menuModelItem.js";

export async function saveProduct(req, res) {
  try {
    const { name, description, image_url, category } = req.body;
    const is_active = req.body.is_active === "on";

    const product = new MenuItem(
      name,
      description,
      is_active,
      image_url,
      category
    );
    await product.save();
    res.sendFile("index.html", { root: "public" });
  } catch (error) {
    res.status(500).send("Internal Server Error while doing save action!");
  }
}

export async function getBurgers(req, res) {
  const a = await Item.getProducts("burgers");
  res.render("burgers", { a });
}
export async function getDrinks(req, res) {
  const b = await Item.getProducts("drinks");
  res.render("drinks", { b });
}
