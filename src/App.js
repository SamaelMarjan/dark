import React from "react";
import Footer from "./components/Footer";

import Navbar from "./components/Navbar";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Home from "./pages/Home";

function App() {
  return (
    <>
    <Navbar />
    <Home />
    <About />
    <Contact />
    <Footer />
    </>
  );
}

export default App;
