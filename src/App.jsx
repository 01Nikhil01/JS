// styles
import "@/assets/css/style.css";
import AdminLayout from "./layouts/AdminLayout";
import BackToTop from "./layouts/BackToTop";
import { LayoutProvider } from "./context/useLayoutContext";
import BarApex from "./page/bargraph";

const App = () => {
  return (
    <LayoutProvider>
      <AdminLayout>
        <BackToTop />
        <BarApex />
      </AdminLayout>
    </LayoutProvider>
  );
};

export default App;
