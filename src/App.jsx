import { AppProvidersWrapper} from "./components";
import { configureFakeBackend } from "@/common";
import "@/assets/css/style.css";
import { AdminLayout } from "./layouts";

configureFakeBackend();

const App = () => {
  return (
    <AppProvidersWrapper>
      <AdminLayout />
    </AppProvidersWrapper>
  );
};

export default App;
