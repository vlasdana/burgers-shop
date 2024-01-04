const express = require("express");
const mongoose = require("mongoose");

const app = express();

app.get("/", function (req, res) {
  res.send("Hello World");
});

app.listen(3000);

mongoose
  .connect(
    "mongodb+srv://admin:kuvDlWIg1B4yl73G@cluster0.52tnc4k.mongodb.net/?retryWrites=true&w=majority"
  )
  .then(() => console.log("Connected!"))
  .catch((error) => {
    console.log("Error at DB connection:", error);
  });
