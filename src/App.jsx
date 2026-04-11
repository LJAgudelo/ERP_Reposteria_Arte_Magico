import { Route, Routes } from "react-router-dom";

import Tablero from "./assets/pages/Tablero.jsx";
import Entrada from "./assets/pages/Entrada.jsx";
import Empleados from "./assets/pages/Empleados.jsx";
import ControlPersonal from "./assets/pages/ControlPersonal.jsx";
import Saldos from "./assets/pages/Saldos.jsx";
import Egresos from "./assets/pages/Egresos.jsx";
import Cotizacion from "./assets/pages/Cotizacion.jsx";
import Recetas from "./assets/pages/Recetas.jsx";
import Ventas from "./assets/pages/Ventas.jsx";
import Proveedor from "./assets/pages/Proveedor.jsx";


function App() {
  return (
    <Routes>
      <Route path="/" element={<Tablero />} />
        <Route path="/proveedor" element={<Proveedor />} />
      <Route path="/entrada" element={<Entrada />} />
      <Route path="/empleados" element={<Empleados />} />
      <Route path="/controlpersonal" element={<ControlPersonal />} />
      <Route path="/saldos" element={<Saldos />} />
      <Route path="/egresos" element={<Egresos />} />
      <Route path="/cotizacion" element={<Cotizacion />} />
      <Route path="/recetas" element={<Recetas />} />
      <Route path="/ventas" element={<Ventas />} />
      <Route path="/tablero" element={<Tablero />} />
  
    </Routes>
  );
}

export default App;
