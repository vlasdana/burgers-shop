import Item from "./menuModelItem.js"; // Schimbă calea cu locația reală a fișierului tău

async function testGetBurgers() {
  const categoryName = "burgers"; // Asumăm că 'burgers' este o categorie validă în tabelul tău 'products'

  try {
    const burgers = await Item.getBurgers(categoryName);
    console.log(
      "Rezultatele obținute pentru categoria 'burgers' sunt:",
      burgers
    );
  } catch (error) {
    console.error("A apărut o eroare la apelarea getBurgers:", error);
  }
}

testGetBurgers();
