import express from 'express';
//we import the apllication configuration
//import app from "./config/app.js";
//import {query} from './config/database.js';
const app = express();
import dotenv from 'dotenv';
import menuRouter from './routes/menuRoutes.js';
dotenv.config();

app.use('/menu', menuRouter);
app.use('/save', menuRouter);


const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server application is running on http://localhost:${PORT}`);
});

//const result = await query('Select * FROM test;');
//console.log(result);