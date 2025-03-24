import React from "react";
import Hero from "../components/home/Hero";
import About from "../components/home/About";
import AdBanner from "../components/home/AdBanner";
import BranchPreview from "../components/home/BranchPreview";
import Footer from "../components/common/Footer";
import Promo from "../components/home/Promo";
import "./Home.css"; // Import Home.css

const Home = () => {
  return (
    <div>
      <div className="hero-animated">
        <Hero />
      </div>
      <div className="about-animated">
        <About />
      </div>
      <div className="ad-banner-animated">
        <AdBanner />
      </div>
      <div className="branch-preview-animated">
        <BranchPreview />
      </div>
      <Footer />
    </div>
  );
};

export default Home;
