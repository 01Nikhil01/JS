import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar";
import ProductDetail from "./page";
import AppProvidersWrapper from "./components/AppProvidersWrapper";

export default function App() {
  return (
    <AppProvidersWrapper>
      <div className="flex flex-col">
        <Navbar />
        <div className="flex-grow">
          <ProductDetail />
        </div>
        <Footer />
      </div>
    </AppProvidersWrapper>
  );
}
