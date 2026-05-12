const router = require("express").Router();

router.use(
    "/proveedores",
    require("../modules/proveedores/proveedores.routes")
);

module.exports = router;