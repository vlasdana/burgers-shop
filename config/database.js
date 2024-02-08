//we import library mySQL2
import mysql from "mysql2/promise";
// we import package dotenv to load the environment variables from a .env file
import dotenv from "dotenv";

//This line loads environment variables from the .env file into Node.js's process.env object
//making them accessible throughout the app.
dotenv.config();

//pool with connection (details) for database
const pool = mysql.createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
});

//async function to get the connection with database and execute the query
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
