
import Sidebar from "../components/layout/Sidebar";
import Header from "../components/layout/Header";
import FormManoObra from "../components/ui/FormManoObra";

const ControlPersonal = () => {
  return (
    <>
      <div className="flex min-h-screen bg-gray-50">
        <Sidebar />

        <div className="flex-1 flex flex-col lg:ml-56">
          <Header />

          <main className="p-6 mt-4">
            <FormManoObra />
          </main>
        </div>
      </div>
    </>
  );
};

export default ControlPersonal;
