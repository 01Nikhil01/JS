import { AppProvidersWrapper } from "./components";
import { configureFakeBackend } from "@/common";
import "@/assets/css/style.css";
import TopbarAdmin from "./components/layout/admin/TopbarAdmin";
import Navbar from "./components/layout/admin/Navbar";
import MenuAdmin from "./components/layout/admin/Navbar";

configureFakeBackend();

const App = () => {
  return (
    <AppProvidersWrapper>
      <div className="h-screen w-screen ">
        <TopbarAdmin />
        <div className="flex">
          <MenuAdmin />
          <div className="lg:ml-[280px]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae
            nesciunt nihil quidem hic eius, mollitia saepe nam excepturi velit
            neque, inventore explicabo iste sunt, reprehenderit labore et quasi
            numquam fugit?
          </div>
        </div>
      </div>
    </AppProvidersWrapper>
  );
};

export default App;
