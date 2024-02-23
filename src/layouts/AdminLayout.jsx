import TopbarAdmin from "../components/layout/admin/TopbarAdmin";
import  Navbar  from "../components/layout/admin/Navbar";
import  MobileNavbar  from "../components/layout/Navbar";


const AdminLayout = () => {
  return (

    <div className="flex h-screen w-screen">
      <Navbar />
      <MobileNavbar />
      <div className="flex flex-col flex-grow">
        <TopbarAdmin />
        <div className="">
          {/* add component here  */}
        </div>
      </div>
    </div>


  );
};

export default AdminLayout;
