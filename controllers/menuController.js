import MenuItem from "../models/menuModel.js";
import Item from "../models/menuModelItem.js";
import MenuId from "../models/menuModId.js";

export async function saveProduct(req, res) {
  try {
    const { name, description, price, image_url, category } = req.body;
    const is_active = req.body.is_active === "on";

    const product = new MenuItem(
      name,
      description,
      price,
      is_active,
      image_url,
      category
    );
    await product.save();

    //On success, the user is redirected to the homepage.
    res.redirect("/?saved=true");
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
export async function deleteById(id) {
  const a = await MenuId.delete(id);
}
