const express = require("express");

const cors = require("cors"); // Para comunicarse en dos servidores

// Initialization
const app = express();

// Setting
port = process.env.PORT || 3000;

// Middleware
// app.use(express.urlencoded({ extended: false }));
app.use(cors());
app.use(express.json());

// Router
app.use(require("./routes/index"));

// Database
require("./database");

module.exports = app;
