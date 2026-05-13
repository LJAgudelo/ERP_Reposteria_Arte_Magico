const router = require("express").Router();

const proveedoresController = require("./proveedor.controller");

router.get("/", proveedoresController.obtenerProveedores);
router.post("/", proveedoresController.crearProveedores);

module.exports=router;