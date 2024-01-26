// import express and categoryRoutes
import express from "express";
import categoryRoutes from "../routes/categoryRoutes";
const app = express();
// now we use app as middleware
app.use(express.urlencoded({ extended: true }));
//indicate where the static files are
app.use(express.static("public"));
//indicate that we use the ejs engine
app.set("view engine", "ejs");
//indicate whree the ejs file will be located
app.set("views", "views");
// indicate where the categoryRoutes are
app.use("/category", categoryRoutes);
//prepare for error handling via middleware
app.use((error, req, res, next) => {
  console.error(error.stack);
  res.status(500).send("middleware internal server error!");
});
export default app;
