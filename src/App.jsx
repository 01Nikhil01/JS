// styles
import "@/assets/css/style.css";
import AdminLayout from "./layouts/AdminLayout";
import BackToTop from "./layouts/BackToTop";
import { LayoutProvider } from "./context/useLayoutContext";
import DataTables from "./page/datatable";

const App = () => {
  return (
    <LayoutProvider>
      <AdminLayout>
        <BackToTop />
        {/* component */}
        <DataTables/>
      </AdminLayout>
    </LayoutProvider>
  );
};

export default App;
