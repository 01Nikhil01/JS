import { Topbar, Navbar } from "@/components/layout/admin";

const AdminLayout = ({ children }) => {
  return (

    <div className="h-screen w-screen">
      <Topbar />
      <div className="flex flex-col">
        <Navbar />
        <div className=" w-full">
          {/* add component here */}
        </div>
      </div>
    </div>
  );
};

export default AdminLayout;
