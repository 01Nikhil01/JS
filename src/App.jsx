import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar";
import ProductList from "./pages";
import AppProvidersWrapper from "./components/AppProvidersWrapper";

export default function App() {
  return (
    <AppProvidersWrapper>
      <div className="flex flex-col">
        <Navbar />
        <div className="flex-grow">
          {/* add component */}
          <ProductList />
        </div>
        <Footer />
      </div>
    </AppProvidersWrapper>
  );
}
