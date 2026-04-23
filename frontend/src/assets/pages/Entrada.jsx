import Header from "../components/layout/Header.jsx"
import Sidebar from "../components/layout/Sidebar.jsx"
import InventarioEntrada from "../components/ui/InventarioEntrada.jsx"


const Entrada = () => {
  return (
        <>
      <div className="flex min-h-screen bg-gray-50">
        <Sidebar />

        <div className="flex-1 flex flex-col lg:ml-50">
          <Header />
   
        <main className="p-1 m-2 lg:p-2 lg:m-3" >
          <InventarioEntrada />
        </main>
      </div>
      </div>
    </>
  )
}

export default Entrada