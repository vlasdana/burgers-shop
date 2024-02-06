import MenuItem from "../models/menuModel.js";
import Item from "../models/menuModelItem.js";

const getAllMenuItems = (req, res) => {
  const menuItems = [
    new MenuItem("Burger", "safty"),
    new MenuItem("Cola", "bubbling"),
  ];
  res.json(menuItems);
};

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

    // res.ok = 1;
    // res.name = product.name;
    res.sendFile("index.html", { root: "public" });
  } catch (error) {
    res.status(500).send("Internal Server Error while doing save action!");
  }
}

export async function burgers(req, res) {
  const a = await Item.getBurgers("burgers");
  res.render("burgers", { a });
}
export { getAllMenuItems };
