import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import "./index.css";
import Home from "./views/home";
export default function App() {
  return (
    <div id="top">
      <Navbar />
      <Home />
      <Footer />
    </div>
  );
}
