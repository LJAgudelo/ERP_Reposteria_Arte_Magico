const pool = require('../../config/db');

const crearProveedor = async (proveedor) => {

    const query= `INSERT INTO proveedores (nombre, numero_nit, direccion, telefono, correo, estado ) 
    VALUES ($1, $2, $3, $4, $5, $6 ) 
    RETURNING *
    `;
    
    const values = [
        proveedor.nombre,
        proveedor.numero_nit,
        proveedor.direccion,
        proveedor.telefono,
        proveedor.correo,
        proveedor.estado
    ];

    const result = await pool.query(query, values);

    return result.rows[0];
}

module.exports={
    crearProveedor
}