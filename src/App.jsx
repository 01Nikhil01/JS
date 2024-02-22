// styles
import "@/assets/css/style.css";
import MenuAdmin from "./components/Navbar";
import Dashboard from "./components/dashboard/page";
import TopbarAdmin from './components/TopbarAdmin/index'

const App = () => {
  return (
    <div className="flex h-screen w-screen">
      <MenuAdmin />
      <div className="flex flex-col flex-grow">
        <TopbarAdmin />
        <div className="overflow-y-auto"> <Dashboard /></div>
      </div>
    </div>
  );
};

export default App;
