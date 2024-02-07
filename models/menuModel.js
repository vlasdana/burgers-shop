import query from "../config/database.js";
class MenuItem {
  constructor(name, description, price, is_active, image_url, category) {
    this.name = name;
    this.description = description;
    this.price = price;
    this.is_active = is_active;
    this.image_url = image_url;
    this.category = category;
  }

  async save() {
    await query(
      "INSERT INTO products(name, description, price, is_active, image_url, category) VALUES (?,?,?,?,?,?)",
      [
        this.name,
        this.description,
        this.price,
        this.is_active,
        this.image_url,
        this.category,
      ]
    );
  }
}

export default MenuItem;
