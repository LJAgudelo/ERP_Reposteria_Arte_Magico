import { useState } from "react";

const FormVender = () => {
  return (
    <main className="p-4">
      <form className="max-w-2xl mx-auto space-y-6">
        <section>
          <h1 className="text-xl font-bold mb-4">Datos del vendedor</h1>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <h3 className="font-semibold">Nombre</h3>
              <p className="text-gray-400 text-sm">Repostería Arte Mágico</p>
            </div>

            <div>
              <h3 className="font-semibold">NIT</h3>
              <p className="text-gray-400 text-sm">43.455.401</p>
            </div>

            <div>
              <h3 className="font-semibold">Teléfono</h3>
              <p className="text-gray-400 text-sm">311 314 3684</p>
            </div>
          </div>
        </section>

        <section>
          <h1 className="text-xl font-bold mb-4">Datos del comprador</h1>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Nombre */}
            <div className="relative">
              <input
                type="text"
                name="nombre"
                className="peer w-full border-b-2 bg-transparent py-2 text-sm focus:outline-none"
                placeholder=" "
                required
              />
              <label
                className="absolute left-0 top-2 text-sm text-gray-500 transition-all 
                peer-placeholder-shown:top-2 peer-placeholder-shown:text-base 
                peer-focus:-top-3 peer-focus:text-sm"
              >
                Nombre completo
              </label>
            </div>

            {/* Tipo documento */}
            <div className="relative">
              <select
                name="tipoDocumento"
                className="w-full border-b-2 bg-transparent py-2 text-sm focus:outline-none"
                required
              >
                <option value="">Seleccione</option>
                <option value="cc">Cédula</option>
                <option value="nit">NIT</option>
                <option value="ce">Cédula extranjera</option>
              </select>
            </div>

            {/* Número documento */}
            <div className="relative">
              <input
                type="number"
                name="documento"
                className="peer w-full border-b-2 bg-transparent py-2 text-sm focus:outline-none"
                placeholder=" "
                required
              />
              <label
                className="absolute left-0 top-2 text-sm text-gray-500 transition-all 
                peer-placeholder-shown:top-2 peer-placeholder-shown:text-base 
                peer-focus:-top-3 peer-focus:text-sm"
              >
                Número de documento
              </label>
            </div>

            {/* Teléfono */}
            <div className="relative">
              <input
                type="tel"
                name="telefono"
                className="peer w-full border-b-2 bg-transparent py-2 text-sm focus:outline-none"
                placeholder=" "
                required
              />
              <label
                className="absolute left-0 top-2 text-sm text-gray-500 transition-all 
                peer-placeholder-shown:top-2 peer-placeholder-shown:text-base 
                peer-focus:-top-3 peer-focus:text-sm"
              >
                Teléfono
              </label>
            </div>
          </div>
        </section>

        <section>
          <h1 className="text-xl font-bold">Detalle de la venta</h1>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <h4 className="text-gray-400 text-sm">Detalle de la venta </h4>
            </div>
                   <div>
              <h4 className="text-gray-400 text-sm">Cantidad</h4>
            </div>
                   <div>
              <h4 className="text-gray-400 text-sm">Precio   </h4>
            </div>
     
          </div>
        </section>
      </form>
    </main>
  );
};

export default FormVender;
