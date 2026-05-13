const pool = require('../../config/db');

//solicitud post
const crearProveedores = async (proveedor) => {

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

// solicitud get
const obtenerProveedores = async ()=>{
    const query = 
    `SELECT * FROM proveedores
    ORDER BY id DESC`;

const result = await pool.query(query);
return result.rows;


}

module.exports={
    crearProveedores,
    obtenerProveedores

}