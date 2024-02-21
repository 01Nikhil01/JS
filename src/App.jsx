import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar";
import FAQs from "./components/faqs/page";

export default function App() {
  return (       
      <div className="flex flex-col">
      <Navbar />
      <div className="flex-grow">
        <FAQs />
      </div>
      <Footer />
    </div>
    
  );
}
