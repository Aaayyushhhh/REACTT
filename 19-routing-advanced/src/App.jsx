import React from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Product from "./pages/Product";
import { Route, Routes } from "react-router-dom";
import NotFound from "./pages/NotFound";
import Men from "./pages/Men";
import Women from "./pages/Women";

const App = () => {
  return (
    <div className="h-screen bg-black text-white">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/Product" element={<Product />} />
        <Route path="/Product/Men" element={<Men />} />
        <Route path="/Product/Women" element={<Women />}></Route>

        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
