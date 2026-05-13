const proveedoresModel = require("./proveedor.model");

const crearProveedores= async(req, res, next)=>{
try{
    const proveedor = await proveedoresModel.crearProveedores(req.body);
    res.status(201).json({
        ok: true,
        data: proveedor
    });
}catch (error){
    next(error)
}

};

const obtenerProveedores =async(req, res, next)=>{
    try{
        const proveedor = await proveedoresModel.obtenerProveedores();
        res.status(200).json({
            ok: true,
            data: proveedor
        })
    }catch(error){
        next(error)
    }
}


module.exports={
    crearProveedores,
    obtenerProveedores

}