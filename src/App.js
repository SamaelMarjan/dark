import React from "react";

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
    </>
  );
}

export default App;
