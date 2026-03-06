import Header from "../components/layout/Header.jsx";
import Sidebar from "../components/layout/Sidebar.jsx";

const Dashboard = () => {
  return (
    <>
      <div className="flex min-h-screen bg-gray-50">
        <Sidebar />

        <div className="flex-1 flex flex-col lg:ml-56">
          <Header />

          <main className="p-6 mt-4">
            <h2 className="text-2xl font-semibold">Bienvenida al Dashboard</h2>
          </main>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
