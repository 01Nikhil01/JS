// styles
import "@/assets/css/style.css";
import AdminLayout from "./layouts/AdminLayout";
import BackToTop from "./layouts/BackToTop";
import { LayoutProvider } from "./context/useLayoutContext";
import BasicTables from "./page/table";

const App = () => {
  return (
    <LayoutProvider>
      <AdminLayout>
        <BackToTop />
        <BasicTables />
      </AdminLayout>
    </LayoutProvider>
  );
};

export default App;
