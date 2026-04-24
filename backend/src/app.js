const express = require("express");
const cors = require("cors");

const app = express();

// Middleware para configurar CORS y parsear JSON
app.use(cors());
app.use(express.json());


// ruta
app.get("/", (req, res) => {
    res.send("¡Hola desde el backend!");
});

module.exports = app;