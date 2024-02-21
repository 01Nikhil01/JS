import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar";
import ContactUs from "./components/contact-us/page";

export default function App() {
  return (
    <div className="flex flex-col">
      <Navbar />
      <div className="flex-grow">
        <ContactUs />      
      </div>
      <Footer />
    </div>
  );
}
