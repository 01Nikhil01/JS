// styles
import "@/assets/css/style.css";
import AdminLayout from "./layouts/AdminLayout";
import BackToTop from "./layouts/BackToTop";
import { LayoutProvider } from "./context/useLayoutContext";
import AddCustomer from "./components/AddCustomer/AddCustomer";

const App = () => {
  return (
    <LayoutProvider>
      <AdminLayout>
        <BackToTop />
        <AddCustomer />      
      </AdminLayout>
    </LayoutProvider>
  );
};

export default App;
