import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar";
import ProductsGrid from "./page/page";
import AppProvidersWrapper from "./components/AppProvidersWrapper";

export default function App() {
  return (
    <AppProvidersWrapper>
      <div className="flex flex-col">
        <Navbar />
        <div className="flex-grow">
          <ProductsGrid />
        </div>
        <Footer />
      </div>
    </AppProvidersWrapper>
  );
}
