require("dotenv").config();

const express = require("express");
const apiRoutes = require("./routes/api");

const app = express();
app.use(express.json());

// Mongoose
const mongoose = require("mongoose");
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true });
require("./models/Events");
require("./models/Users");

// Routes
app.use("/api", apiRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`App listening on: ${PORT}`);
});

module.exports = app;
