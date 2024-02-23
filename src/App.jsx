import { AppProvidersWrapper } from "./components";
import { configureFakeBackend } from "@/common";
import "@/assets/css/style.css";
import TopbarAdmin from "./components/layout/admin/TopbarAdmin";
import Navbar from "./components/layout/admin/Navbar";

configureFakeBackend();

const App = () => {
  return (
    <AppProvidersWrapper>
      <div className="flex h-screen w-screen flex-col">
        <Navbar />
        <TopbarAdmin />
        add component here
      </div>
    </AppProvidersWrapper>
  );
};

export default App;
