// styles
import "@/assets/css/style.css";
import AdminLayout from "./layouts/AdminLayout";
import BackToTop from "./layouts/BackToTop";
import { LayoutProvider } from "./context/useLayoutContext";

const App = () => {
  return (
    <LayoutProvider>
      <AdminLayout>
        <BackToTop />
        {/* component */}
      </AdminLayout>
    </LayoutProvider>
  );
};

export default App;
