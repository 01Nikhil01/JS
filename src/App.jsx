// styles
import "@/assets/css/style.css";
import MenuAdmin from "./Components/Navbar";
import TopbarAdmin from "./Components/TopbarAdmin";
import ManagePage from "./components/manage/ManagePage";

const App = () => {
  return (
    <div className="flex h-screen w-screen">
    <MenuAdmin />
    <div className="flex flex-col flex-grow">
      <TopbarAdmin />
      <div className="overflow-y-auto">
        <ManagePage />
      </div>
    </div>
  </div>
  );
};

export default App;
