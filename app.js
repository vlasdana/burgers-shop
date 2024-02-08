import express from "express";
import menuRouter from "./routes/menuRoutes.js";
//method-override package, enabling HTTP methods like PUT or DELETE where not natively supported by the client (e.g., in HTML forms).
import methodOverride from "method-override";
//we import the apllication configuration

const app = express();
import dotenv from "dotenv";

dotenv.config();
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride("_method"));
//indicate where the static files are
app.use(express.static("public"));

app.use("/", menuRouter);
app.use("/delete", menuRouter);
app.set("view engine", "ejs");
app.set("views", "views");

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server application is running on http://localhost:${PORT}`);
});
