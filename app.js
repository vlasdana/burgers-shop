import express from "express";
import menuRouter from "./routes/menuRoutes.js";
//we import the apllication configuration
//import app from "./config/app.js";
//import {query} from './config/database.js';
const app = express();
import dotenv from "dotenv";

dotenv.config();
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));
app.use("/", menuRouter);
app.set("view engine", "ejs");
app.set("views", "views");
//app.use('/save', menuRouter);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server application is running on http://localhost:${PORT}`);
});

//const result = await query('Select * FROM test;');
//console.log(result);
