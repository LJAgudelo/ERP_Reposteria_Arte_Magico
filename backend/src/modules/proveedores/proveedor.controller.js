const proveedoresModel = require("./proveedor.model");

const crearProveedor= async(req, res, next)=>{
try{
    const proveedor = await proveedoresModel.crearProveedor(req.body);
    res.status(201).json({
        ok: true,
        data: proveedor
    });
}catch (error){
    next(error)
}
}
module.exports={
    crearProveedor

}