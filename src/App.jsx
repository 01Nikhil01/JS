import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar";
import Checkout from "./components/billing/page";
import ShopProvider from "./context/useShoppingContext";

export default function App() {
  return (
    <div className="flex flex-col">
      <ShopProvider >
        <Navbar />
        <div className="flex-grow">
          <Checkout />
        </div>
        <Footer />
      </ShopProvider>
    </div>

  );
}
