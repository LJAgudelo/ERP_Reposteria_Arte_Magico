import { Route, Routes } from "react-router-dom";

import Tablero from "./assets/pages/Tablero.jsx";
import Entrada from "./assets/pages/Entrada.jsx";
import Empleados from "./assets/pages/Empleados.jsx";
import ControlPersonal from "./assets/pages/ControlPersonal.jsx";
import Saldos from "./assets/pages/Saldos.jsx";
import Costosindirectos from "./assets/pages/Costosindirectos.jsx";
import Cotizacion from "./assets/pages/Cotizacion.jsx";
import Recetas from "./assets/pages/Recetas.jsx";
import Ventas from "./assets/pages/Ventas.jsx";


function App() {
  return (
    <Routes>
      <Route path="/" element={<Tablero />} />
      <Route path="/entrada" element={<Entrada />} />
      <Route path="/empleados" element={<Empleados />} />
      <Route path="/controlpersonal" element={<ControlPersonal />} />
      <Route path="/saldos" element={<Saldos />} />
      <Route path="/costosindirectos" element={<Costosindirectos />} />
      <Route path="/cotizacion" element={<Cotizacion />} />
      <Route path="/recetas" element={<Recetas />} />
      <Route path="/ventas" element={<Ventas />} />
      <Route path="/tablero" element={<Tablero />} />
  
    </Routes>
  );
}

export default App;
