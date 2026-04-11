import { useState } from "react";

const FormProveedor = () => {
    const [activo, setActivo] = useState(true);
  return (
    <main className="p-3 m-6 ">
      <form className="max-w-md mx-auto">
        <div className="grid md:grid-cols-3 md:gap-6">
          <div className="relative py-4  z-0 w-full mb-5 group">
            <input
              type="text"
              className="block py-2 px-0 w-full text-sm text-heading bg-transparent border-0 border-b-2 border-default-medium appearance-none focus:outline-none focus:ring-0 focus:border-brand peer"
              placeholder=" "
              required
            />
            <label
              htmlFor="floating_first_name"
              className="absolute text-sm text-body duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 peer-focus:text-fg-brand peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto"
            >
              Nombre
            </label>
          </div>
          <div className="relative py-4  z-0 w-full mb-5 group">
            <input
              type="numeric"
              className="block py-2 px-0 w-full text-sm text-heading bg-transparent border-0 border-b-2 border-default-medium appearance-none focus:outline-none focus:ring-0 focus:border-brand peer"
              placeholder=" "
              required
            />
            <label
              htmlFor="floating_first_name"
              className="absolute text-sm text-body duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 peer-focus:text-fg-brand peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto"
            >
              Documento
            </label>
          </div>
          <div className="relative py-4  z-0 w-full mb-5 group">
            <input
              type="text"
              className="block py-2 px-0 w-full text-sm text-heading bg-transparent border-0 border-b-2 border-default-medium appearance-none focus:outline-none focus:ring-0 focus:border-brand peer"
              placeholder=" "
              required
            />
            <label
              htmlFor="floating_first_name"
              className="absolute text-sm text-body duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 peer-focus:text-fg-brand peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto"
            >
              Dirección
            </label>
          </div>

          <div className="relative py-4  z-0 w-full mb-5 group">
            <input
              type="numeric"
              className="block py-2 px-0 w-full text-sm text-heading bg-transparent border-0 border-b-2 border-default-medium appearance-none focus:outline-none focus:ring-0 focus:border-brand peer"
              placeholder=" "
              required
            />
            <label
              htmlFor="floating_first_name"
              className="absolute text-sm text-body duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 peer-focus:text-fg-brand peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto"
            >
              Telefóno
            </label>
          </div>
          <div className="relative py-4  z-0 w-full mb-5 group">
            <input
              type="text"
              className="block py-2 px-0 w-full text-sm text-heading bg-transparent border-0 border-b-2 border-default-medium appearance-none focus:outline-none focus:ring-0 focus:border-brand peer"
              placeholder=" "
              required
            />
            <label
              htmlFor="floating_first_name"
              className="absolute text-sm text-body duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 peer-focus:text-fg-brand peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto"
            >
              Correo    
            </label>
          </div>

          <div className="relative py-4  z-0 w-full mb-5 group">
            <input
              type="date"
              className="block py-2 px-0 w-full text-sm text-heading bg-transparent border-0 border-b-2 border-default-medium appearance-none focus:outline-none focus:ring-0 focus:border-brand peer"
              placeholder=" "
              required
            />
            <label
              htmlFor="floating_first_name"
              className="absolute text-sm text-body duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 peer-focus:text-fg-brand peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto"
            >
              Fecha Ingreso
            </label>
          </div>

          <div className="flex items-center">
            <input
              id="checked-checkbox"
              type="checkbox"
              checked={activo}
              onChange={(e) => setActivo(e.target.checked)}
              className="w-4 h-4 border rounded"
            />
            <label
              htmlFor="checked-checkbox"
              className="select-none ms-2 text-sm font-medium text-heading"
            >
              Estado Activo
            </label>
          </div>
        </div>
      </form>
      <div className="flex gap-6 justify-center mt-6">
        <button
          type="submit"
          className="text-[var(--createdGreen)] bg-[var(--createdmenta)] font-medium rounded-lg text-sm px-8 py-3 
    shadow-md transition-all duration-300
    hover:shadow-xl hover:scale-105
    active:scale-90 active:animate-pulse"
        >
          Consultar
        </button>

                <button
          type="submit"
          className="text-[var(--createdGreen)] bg-[var(--createdmenta)] font-medium rounded-lg text-sm px-8 py-3 
    shadow-md transition-all duration-300
    hover:shadow-xl hover:scale-105
    active:scale-90 active:animate-pulse"
        >
          Guardar
        </button>
      </div>
    </main>
  )
}

export default FormProveedor