//we import mySQL2
import mysql from "mysql2/promise";
import dotenv from "dotenv";
dotenv.config();
/*var dbConnection = mysql.createConnection({
  host: "localhost",
  user: "admin",
  password: "admin",
  database: "menu",
});
dbConnection.connect((err) => {
  if (err) {
    console.log("Error database connection!");
  } else {
    console.log("Connection done!");
  }
});
*/
const pool = mysql.createPool({
  host: process.env.DB_HOST || "localhost",
  user: process.env.DB_USER || "admin",
  password: process.env.DB_PASSWORD || "admin",
  database: process.env.DB_NAME || "menu",
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
});

const query = async (sql, values) => {
  console.log("sql to execute is : ", sql);
  try {
    const connection = await pool.getConnection();
    const result = await connection.query(sql, values);
    connection.release();
    console.log("S-a incheiat query!");
    return result[0];
  } catch (error) {
    console.error(error);
    throw error; // Re-throw the error to be caught by the error-handling middleware
  }
};

export default query;
/*export default dbConnection;*/
