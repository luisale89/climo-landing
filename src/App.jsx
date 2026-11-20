import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Problems from "./components/Problems";
import Solution from "./components/Solution";
import ServiceModels from "./components/ServiceModels";
import RoiCalculator from "./components/RoiCalculator";
import Pricing from "./components/Pricing";
import Faq from "./components/Faq";
import ContactForm from "./components/ContactForm";
import Footer from "./components/Footer";
import Testimonials from "./components/Testimonials";
import NotFound from "./components/NotFound";

import "./styles/global.css";
import { SERVICE_MODELS } from "./data/serviceModels";

export default function App() {
  const [serviceModel, setServiceModel] = useState(
    SERVICE_MODELS.integral_service,
  );

  const handleSelectModel = (model) => {
    setServiceModel(model);
    const contactSection = document.getElementById("contacto");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <div className="app-container">
              <Navbar />
              <Hero />
              <Problems />
              <Solution />
              <ServiceModels onSelectModel={handleSelectModel} />
              <Pricing />
              <RoiCalculator />
              <Testimonials />
              <Faq />
              <ContactForm
                selectedModel={serviceModel}
                setModel={setServiceModel}
              />
              <Footer />
            </div>
          }
        />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}
