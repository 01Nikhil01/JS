import { Suspense } from "react";
import TopbarAdmin from "../Components/TopbarAdmin";
import Navbar from "../Components/Navbar";

const AdminLayout = ({ children }) => {
  return (
    <Suspense>
      <Suspense>
        <TopbarAdmin />
      </Suspense>

      <Suspense>
        <Navbar />
      </Suspense>

      <Suspense>{children}</Suspense>
    </Suspense>
  );
};

export default AdminLayout;
