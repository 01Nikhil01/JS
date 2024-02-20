import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar";
import HomePage from "./components/home/HomePage";

export default function App() {
  return (
    <>
      <Navbar />
      {/* add component */}
      <HomePage />

      <Footer />
    </>
  );
}
