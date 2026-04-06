
import Header from "../components/layout/Header.jsx"
import Sidebar from "../components/layout/Sidebar.jsx"
import FormVender from "../components/ui/FormVender.jsx"

const Ventas = () => {
  return (
      <>
      <div className="flex min-h-screen bg-gray-50">
        <Sidebar />

        <div className="flex-1 flex flex-col lg:ml-50">
          <Header />
   
        <main className="p-1 m-2 lg:p-2 lg:m-3" >
          <FormVender/>

        </main>
      </div>
      </div>
    </>
  )
}

export default Ventas