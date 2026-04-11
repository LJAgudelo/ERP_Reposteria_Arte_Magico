import React from 'react'
import Sidebar from '../components/layout/Sidebar'
import Header from '../components/layout/Header'
import FormProveedor from '../components/ui/FormProveedor'

const Proveedor = () => {
  return (
           <>
      <div className="flex min-h-screen bg-gray-50">
        <Sidebar />

        <div className="flex-1 flex flex-col lg:ml-50">
          <Header />
   
        <main className="p-1 m-2 lg:p-2 lg:m-3" >
          <FormProveedor />
        </main>
      </div>
      </div>
    </>
  )
}

export default Proveedor