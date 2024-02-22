// styles
import "@/assets/css/style.css";
import MenuAdmin from "./Components/Navbar";
import TopbarAdmin from "./Components/TopbarAdmin";
import OrderList from "./components/orders/page";

const App = () => {
  return (
    <div className="flex h-screen w-screen">
    <MenuAdmin />
    <div className="flex flex-col flex-grow">
      <TopbarAdmin />
      <div className="overflow-y-auto">
        <OrderList />
      </div>
    </div>
  </div>
  );
};

export default App;
