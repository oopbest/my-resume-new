import "./App.css";
import Footer from "./components/Footer";
import Contact from "./components/Contact";
import About from "./components/About";
import Project from "./components/Project";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <div className="min-h-screen bg-base-200">
      {/* Navbar */}
      <Navbar />
      <Hero />
      <About />
      <Project />
      <Contact />
      <Footer />

      <Toaster />
    </div>
  );
}

export default App;
