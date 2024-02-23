import { AppProvidersWrapper } from "./components";
import { configureFakeBackend } from "@/common";
import "@/assets/css/style.css";
import TopbarAdmin from "./components/layout/admin/TopbarAdmin";
import MenuAdmin from "./components/layout/admin/Navbar";
import Dashboard from "./components/dashboard/page";

configureFakeBackend();

const App = () => {
  return (
    <AppProvidersWrapper>
      <div className="h-screen w-screen ">
        <TopbarAdmin />
        <div className="flex">
          <MenuAdmin />
          <div className="flex-grow">
          <Dashboard />
          </div>
        </div>
      </div>
    </AppProvidersWrapper>
  );
};

export default App;
