import { AppProvidersWrapper} from "./components";
import { configureFakeBackend } from "@/common";
import "@/assets/css/style.css";
import BackToTop from "./components/layout/BackToTop";
import { AdminLayout } from "./layouts";

configureFakeBackend();

const App = () => {
  return (
    <AppProvidersWrapper>
      <AdminLayout />
      <BackToTop />
    </AppProvidersWrapper>
  );
};

export default App;
