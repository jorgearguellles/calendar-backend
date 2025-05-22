const express = require("express");
require("dotenv").config();
const { dbConnection } = require("./database/config");
const cors = require("cors");

// create express app
const app = express();

// DB
dbConnection();

//Cors
app.use(cors());

// Public folder
app.use(express.static("public"));

// Body parser
app.use(express.json());

// Routes
app.use("/api/auth", require("./routes/auth"));
app.use("/api/events", require("./routes/events"));

// start the server on port 3000
app.listen(process.env.PORT, () => {
  console.log(`Server is running on port ${process.env.PORT}`);
});
