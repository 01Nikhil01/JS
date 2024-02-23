import { AppProvidersWrapper } from "./components";
import { configureFakeBackend } from "@/common";
import "@/assets/css/style.css";
import TopbarAdmin from "./components/layout/admin/TopbarAdmin";
import MenuAdmin from "./components/layout/admin/Navbar";
import Manage from "./pages/manage/page";

configureFakeBackend();

const App = () => {
  return (
    <AppProvidersWrapper>
      <div className="h-screen w-screen ">
        <TopbarAdmin />
        <div className="flex">
          <MenuAdmin />
          <Manage />
        </div>
      </div>
    </AppProvidersWrapper>
  );
};

export default App;
