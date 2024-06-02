const express = require("express");
const noteRoutes = require("./routes/noteRoutes");
const app = express();
app.use(express.json());

// fixes cors error
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Methods",
    "OPTIONS, POST, GET, PATCH, DELETE, PUT"
  );
  res.header("Access-Control-Allow-Headers", "Content-Type");
  next();
});

app.use("/notes", noteRoutes);
module.exports = app;
