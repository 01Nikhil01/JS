import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar";
import Cart from "./components/cart/page";
import ShopProvider from "./context/useShoppingContext";

export default function App() {
  return (
    <div className="flex flex-col">
     <ShopProvider >
     <Navbar />
      <div className="flex-grow">
        <Cart />
      </div>
      <Footer />
     </ShopProvider>
    </div>
  );
}
