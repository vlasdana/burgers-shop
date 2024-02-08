import query from "../config/database.js";
class MenuId {
  constructor(id) {
    this.id = id;
  }

  static async delete(providedId) {
    await query("DELETE FROM products WHERE id = ? ", [providedId]);
  }
}

export default MenuId;
