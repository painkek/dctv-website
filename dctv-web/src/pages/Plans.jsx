import React, { useState } from "react";
import "./Plans.css";

import Footer from "../components/common/Footer";

import Promo from "../components/home/Promo";

// motion
import { motion } from "framer-motion";
// variants
import { fadeIn } from "../variants";

const plansData = {
  FibreHome: [
    {
      price: "₱1500",
      type: "RESIDENTIAL",
      speed: "Up to 200 Mbps",
      details: "Inclusive of Digital CaTV",
    },
    {
      price: "₱2500",
      type: "RESIDENTIAL",
      speed: "Up to 300 Mbps",
      details: "Inclusive of Digital CaTV",
    },
    {
      price: "₱3500",
      type: "COMMERCIAL",
      speed: "Up to 400 Mbps",
      details: "Inclusive of Digital CaTV",
    },
    {
      price: "₱4500",
      type: "COMMERCIAL",
      speed: "Up to 500 Mbps",
      details: "Inclusive of Digital CaTV",
    },
  ],
  DigitalHD: [
    {
      price: "₱500",
      type: "Digital CaTV",
      speed: "",
      details: "Inclusive of Digital CaTV",
    },
  ],
};

function Plans() {
  const [selectedPlan, setSelectedPlan] = useState("FibreHome");

  return (
    <div className="plans-page-container">
      {/* Hero Section without wrapper */}
      <Promo />

      {/* Plans Section */}
      <section className="plans-container">
        <motion.div
          variants={fadeIn("left", 0.1)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.7 }}
          className="plans-header"
        >
          <h2>Choose the Perfect Plan for You!</h2>
          <p>
            Choose a residential or commercial plan with speeds up to 500 Mbps
            and Digital CaTV included. Click "APPLY NOW" to get started!
          </p>

          {/* Toggle Buttons */}
          <motion.div
            variants={fadeIn("left", 0.1)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.7 }}
            className="plan-toggle"
          >
            {Object.keys(plansData).map((planType) => (
              <button
                key={planType}
                className={selectedPlan === planType ? "active" : ""}
                onClick={() => setSelectedPlan(planType)}
              >
                {planType}
              </button>
            ))}
          </motion.div>
        </motion.div>

        {/* Plans List */}
        <motion.div
          variants={fadeIn("up", 0.1)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.7 }}
          className="plans-list"
        >
          {plansData[selectedPlan].map((plan, index) => (
            <div key={index} className="plan-card">
              <h2>PLAN {plan.price}</h2>
              <h3>{plan.type}</h3>
              {plan.speed && <p>{plan.speed}</p>}
              <p>{plan.details}</p>
              <a
                href="https://m.me/dctv.official"
                target="_blank"
                rel="noopener noreferrer"
                className="apply-btn"
              >
                APPLY NOW
              </a>
            </div>
          ))}
        </motion.div>
      </section>

      {/* Footer Section (Placeholder) */}
      <footer className="footer-container">
        <Footer />
      </footer>
    </div>
  );
}

export default Plans;
