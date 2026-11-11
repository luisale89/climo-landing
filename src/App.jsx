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

import "./styles/global.css";

export default function App() {
  return (
    <div className="app-container">
      <Navbar />
      <Hero />
      <Problems />
      <Solution />
      <ServiceModels />
      <Pricing />
      <RoiCalculator />
      <Testimonials />
      <Faq />
      <ContactForm />
      <Footer />
    </div>
  );
}
