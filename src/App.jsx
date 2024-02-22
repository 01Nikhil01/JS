// styles
import "@/assets/css/style.css";
import AdminLayout from "./layouts/AdminLayout";
import BackToTop from "./layouts/BackToTop";
import { LayoutProvider } from "./context/useLayoutContext";
import CustomerDetails from "./components/CustomerDetails/CustomerDetails";

const App = () => {
  return (
    <LayoutProvider>
      <AdminLayout>
        <BackToTop />
        <CustomerDetails />        
      </AdminLayout>
    </LayoutProvider>
  );
};

export default App;
