import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./landingPage/Navbar";
import Footer from "./landingPage/Footer";

import HomePage from "./landingPage/home/HomePage";
import SignPage from "./landingPage/signup/SignPage";
import AboutPage from "./landingPage/about/AboutPage";
import ProductPage from "./landingPage/product/ProductPage";
import PricingPage from "./landingPage/pricing/PricingPage";
import SupportPage from "./landingPage/support/SupportPage";
import NotFound from "./landingPage/Efound";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/signup" element={<SignPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/product" element={<ProductPage />} />
        <Route path="/pricing" element={<PricingPage />} />
        <Route path="/support" element={<SupportPage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
