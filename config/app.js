// import express and categoryRoutes
import express from "express";

//variable to keep a new instance of Express to use it for configurations
const app = express();

// now we use app as middleware
app.use(express.urlencoded({ extended: true }));

//indicate that we can use the ejs engine
app.set("view engine", "ejs");

//indicate where the ejs file will be located
app.set("views", "views");

//function for middleware errors handling
app.use((error, req, res, next) => {
  console.error(error.stack);
  res.status(500).send("middleware internal server error!");
});
export default app;
