//we import mySQL2
import mysql from "mysql2/promise";
import dotenv from "dotenv";
dotenv.config();

//create connection with database
const pool = mysql.createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 10,
});

const query = async (sql, values) => {
  console.log("sql to execute is : ", sql);
  try {
    const connection = await pool.getConnection();
    const result = await connection.query(sql, values);
    connection.release();
    console.log("Query done!");
    return result[0];
  } catch (error) {
    console.error(error);
    throw error; // Re-throw the error to be caught by the error-handling middleware
  }
};

export default query;
/*export default dbConnection;*/
