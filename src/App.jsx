// styles
import "@/assets/css/style.css";
import MenuAdmin from "./Components/Navbar";
import TopbarAdmin from "./Components/TopbarAdmin";
import CustomersList from "./components/customers/CustomersList";

const App = () => {
  return (
    <div className="flex h-screen w-screen">
    <MenuAdmin />
    <div className="flex flex-col flex-grow">
      <TopbarAdmin />
      <div className="overflow-y-auto">
        <CustomersList />
      </div>
    </div>
  </div>
  );
};

export default App;
