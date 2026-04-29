const express = require("express");
const cors = require("cors");
const pool = require("./config/db.js");

const app = express();

// Middleware para configurar CORS y parsear JSON
app.use(cors());
app.use(express.json());


// ruta
app.get("/test-db", async (req, res) => {
    try{
        const result = await pool.query("SELECT NOW()");
        res.json(result.rows);

    }catch (error) {
        res.status(500).json({ error: error.message });
   }
});

module.exports = app;