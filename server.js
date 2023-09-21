const express = require("express");
const mongoose = require("mongoose");
const app = express();
//middleware
app.use(express.static("public"));
const ejs = require("ejs");
//view engine
app.set("view engine", "ejs");

app.listen(3000, () => {
  console.log("Listening on port 3000");
});

//database connection
const dbURI = "mongodb://localhost/drinks";
mongoose
  .connect(dbURI, {
    userNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  })
  .then((result) => app.listen(3000))
  .catch((error) => console.log(error));

//routes
app.get("/", (req, res) => {
  res.render("home");
});
app.get("/smoothie", (req, res) => {
  res.render("smoothie");
});
