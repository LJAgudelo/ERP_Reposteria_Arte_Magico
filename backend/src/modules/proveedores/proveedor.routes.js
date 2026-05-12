const router = require("express").Router();

const proveedoresController = require("./proveedor.controller");

router.post("/", proveedoresController.crearProveedor);

module.exports=router;