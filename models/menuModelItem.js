import query from "../config/database.js";

class Item {
  constructor(category) {
    this.category = category;
  }
  static async getBurgers(categoryName) {
    const result = await query("SELECT * FROM products WHERE category = ? ", [
      categoryName,
    ]);
    return result[0];
  }
}
export default Item;
