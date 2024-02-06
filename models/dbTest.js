import query from "../config/database.js"; // Schimbă calea cu locația reală a fișierului tău de configurare

async function testQuery() {
  const testQuerySQL = "SELECT * FROM products LIMIT 1;"; // Acest query ar trebui să returneze primul produs din tabelul 'products'

  try {
    const result = await query(testQuerySQL);
    console.log("Rezultatul query-ului de test este:", result);
  } catch (error) {
    console.error("A apărut o eroare la executarea query-ului de test:", error);
  }
}

testQuery();
