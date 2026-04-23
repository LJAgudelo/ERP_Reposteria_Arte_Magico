import React from "react";
import Sidebar from "../components/layout/Sidebar.jsx";
import Header from "../components/layout/Header.jsx";
import FormEmpleados from "../components/ui/FormEmpleados.jsx";

const Empleados = () => {
  return (
    <>
      <div className="flex min-h-screen bg-gray-50">
        <Sidebar />

        <div className="flex-1 flex flex-col lg:ml-56">
          <Header />
          <main className="p-6 mt-4">
            <FormEmpleados />
          </main>
        </div>
      </div>
    </>
  );
};

export default Empleados;
