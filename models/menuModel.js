import query from "../config/database.js";
class MenuItem {
  constructor(name, description, is_active, image_url, category) {
    this.name = name;
    this.description = description;
    this.is_active = is_active;
    this.image_url = image_url;
    this.category = category;
  }

  async save() {
    console.log("esti aici");
    await query(
      "INSERT INTO products(name, description, is_active, image_url, category) VALUES (?,?,?,?,?)",
      [
        this.name,
        this.description,
        this.is_active,
        this.image_url,
        this.category,
      ]
    );
  }
}

export default MenuItem;
