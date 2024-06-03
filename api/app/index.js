const express = require("express");
const noteRoutes = require("./routes/noteRoutes");
const middleware = require("./middlewares/middlewares"); // Adjust path as needed
const app = express();

// Setup middlewares
middleware(app);

// routes
app.use("/notes", noteRoutes);
module.exports = app;
