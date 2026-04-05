import { useState } from "react";

// DATA (catálogos)
const listaIngredientes = [
  { id: 1, nombre: "Harina", costo: 0.02 },
  { id: 2, nombre: "Azúcar", costo: 0.01 },
  { id: 3, nombre: "Huevos", costo: 0.15 },
  { id: 4, nombre: "Leche", costo: 0.03 },
];

const listaProcesos = [
  { id: 1, nombre: "Pesar" },
  { id: 2, nombre: "Mezclar" },
  { id: 3, nombre: "Hornear" },
  { id: 4, nombre: "Refrigerar" },
  { id: 5, nombre: "Decorar" },
];

// CONFIG
const costoMinuto = 50;
const porcentajeCIF = 10;

const FormRecetas = () => {

  // STATES
  const [nombre, setNombre] = useState("");
  const [porciones, setPorciones] = useState("");

  const [ingredientes, setIngredientes] = useState([
    { ingredienteId: "", cantidad: 0 },
  ]);

  const [procesos, setProcesos] = useState([
    { procesoId: "", tiempo: 0 },
  ]);

  //  AGREGAR FILAS
  const agregarIngrediente = () => {
    setIngredientes(prev => [...prev, { ingredienteId: "", cantidad: 0 }]);
  };

  const agregarProceso = () => {
    setProcesos(prev => [...prev, { procesoId: "", tiempo: 0 }]);
  };

  // ACTUALIZAR DATOS
  const actualizarIngrediente = (index, campo, valor) => {
    const newData = [...ingredientes];
    newData[index][campo] = valor;
    setIngredientes(newData);
  };

  const actualizarProceso = (index, campo, valor) => {
    const newData = [...procesos];
    newData[index][campo] = valor;
    setProcesos(newData);
  };

  // CÁLCULOS
  const calcularMP = () => {
    return ingredientes.reduce((total, item) => {
      const ingrediente = listaIngredientes.find(
        (i) => i.id == item.ingredienteId
      );
      if (!ingrediente) return total;
      return total + item.cantidad * ingrediente.costo;
    }, 0);
  };

  const calcularMOD = () => {
    const tiempoTotal = procesos.reduce(
      (total, p) => total + Number(p.tiempo || 0),
      0
    );
    return tiempoTotal * costoMinuto;
  };

  const calcularCIF = () => {
    const base = calcularMP() + calcularMOD();
    return base * (porcentajeCIF / 100);
  };

  const calcularTotal = () => {
    return calcularMP() + calcularMOD() + calcularCIF();
  };

  return (
    <main>
      <form className="max-w-md mx-auto">

        {/* DATOS GENERALES */}
        <div className="grid md:grid-cols-3 gap-4 mb-6">

          <input type="date" className="input-style" />

          <input
            type="text"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
            placeholder="Nombre receta"
            className="input-style"
          />

          <input
            type="number"
            min="1"
            value={porciones}
            onChange={(e) => setPorciones(Number(e.target.value))}
            placeholder="Porciones"
            className="input-style"
          />
        </div>

        {/* INGREDIENTES */}
        <h2 className="text-lg font-semibold mb-3">Ingredientes</h2>

        {ingredientes.map((item, index) => {
          const ingrediente = listaIngredientes.find(
            (i) => i.id == item.ingredienteId
          );

          const subtotal = ingrediente
            ? item.cantidad * ingrediente.costo
            : 0;

          return (
            <div key={index} className="grid grid-cols-3 gap-4 mb-4">

              <select
                className="input-style"
                onChange={(e) =>
                  actualizarIngrediente(index, "ingredienteId", e.target.value)
                }
              >
                <option value="">Seleccione</option>
                {listaIngredientes.map((i) => (
                  <option key={i.id} value={i.id}>
                    {i.nombre}
                  </option>
                ))}
              </select>

              <input
                type="number"
                placeholder="Cantidad"
                className="input-style"
                onChange={(e) =>
                  actualizarIngrediente(index, "cantidad", Number(e.target.value))
                }
              />

              <div className="flex items-center">
                ${subtotal.toFixed(2)}
              </div>
            </div>
          );
        })}

        <button type="button" onClick={agregarIngrediente} className="btn-add">
          + Añadir ingrediente
        </button>

        {/* PROCESOS */}
        <h2 className="text-lg font-semibold mt-8 mb-3">Procesos</h2>

        {procesos.map((p, index) => {
          const proceso = listaProcesos.find(
            (proc) => proc.id == p.procesoId
          );

          return (
            <div key={index} className="grid grid-cols-3 gap-4 mb-4">

              <select
                className="input-style"
                onChange={(e) =>
                  actualizarProceso(index, "procesoId", e.target.value)
                }
              >
                <option value="">Seleccione</option>
                {listaProcesos.map((proc) => (
                  <option key={proc.id} value={proc.id}>
                    {proc.nombre}
                  </option>
                ))}
              </select>

              <input
                type="number"
                placeholder="Tiempo (min)"
                className="input-style"
                onChange={(e) =>
                  actualizarProceso(index, "tiempo", Number(e.target.value))
                }
              />

              <div className="flex items-center text-sm">
                {proceso ? proceso.nombre : "-"}
              </div>
            </div>
          );
        })}

        <button type="button" onClick={agregarProceso} className="btn-add">
          + Añadir proceso
        </button>

        {/* RESUMEN */}
        <div className="mt-10 p-4 border rounded-lg bg-gray-50">
          <p>Materia Prima: ${calcularMP().toFixed(2)}</p>
          <p>Mano de Obra: ${calcularMOD().toFixed(2)}</p>
          <p>Costos Indirectos: ${calcularCIF().toFixed(2)}</p>
          <h3 className="font-bold mt-2">
            Costo Total: ${calcularTotal().toFixed(2)}
          </h3>
        </div>

        {/* BOTÓN */}
        <div className="flex justify-center mt-6">
          <button type="submit"
          className="text-[var(--createdGreen)] bg-[var(--createdmenta)] font-medium rounded-lg text-sm px-8 py-3 
    shadow-md transition-all duration-300
    hover:shadow-xl hover:scale-105
    active:scale-90 active:animate-pulse">
            Guardar Receta
          </button>
        </div>

      </form>
    </main>
  );
};

export default FormRecetas;