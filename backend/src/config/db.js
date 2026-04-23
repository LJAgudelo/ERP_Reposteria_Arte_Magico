const {Pool} = require("pg"); //pool gestor de conexiones
reqire ("dotenv").config();


export const pool = new Pool({
    user: proccess.env.DB_USER,
    host: proccess.env.DB_HOST,
    database: proccess.env.DB_NAME,
    password: proccess.env.DB_PASSWORD,
    port: proccess.env.DB_PORT,
})
