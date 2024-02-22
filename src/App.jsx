// styles
import "@/assets/css/style.css";
import AdminLayout from "./layouts/AdminLayout";
import BackToTop from "./layouts/BackToTop";
import { LayoutProvider } from "./context/useLayoutContext";
import AreaApex from "./page/page";

const App = () => {
  return (
    <LayoutProvider>
      <AdminLayout>
        <BackToTop />
        <AreaApex />
      </AdminLayout>
    </LayoutProvider>
  );
};

export default App;
