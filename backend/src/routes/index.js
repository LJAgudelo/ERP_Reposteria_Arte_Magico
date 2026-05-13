const router = require("express").Router();

router.use(
    "/proveedores",
    require("../modules/proveedores/proveedor.routes")
);

module.exports = router;