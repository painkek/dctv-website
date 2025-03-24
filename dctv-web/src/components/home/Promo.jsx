import React from "react";
import PromoBanner from "../../assets/adbanner/SaktoBanner.png";
import "./Promo.css";

// motion
import { motion } from "framer-motion";
// variants
import { fadeIn } from "../../variants";

const Promo = () => {
  return (
    <div className="promo-section">
      {/* Left Side: Promo Banner */}
      <motion.div
        variants={fadeIn("right", 0.1)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0.7 }}
        className="promo-banner"
      >
        <img src={PromoBanner} alt="Promo Banner" />
      </motion.div>
      {/* Right Side: Promo Description */}
      <motion.div
        variants={fadeIn("right", 0.1)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0.7 }}
        className="promo-content"
      >
        <h2>SAKTO WIFI</h2>
        <p>
          Looking for reliable and affordable internet? Look no further! Our
          Sakto Wifi plan offers speeds up to 100Mbps for only ₱700 per month.
          This non-gamer package is perfect for browsing, social media, online
          learning, and staying connected with loved ones. Don't miss out on
          this incredible deal! Limited slots are available in select areas.
        </p>
        <button className="apply-btn">
          <a
            href="https://m.me/dctv.official"
            target="_blank"
            rel="noopener noreferrer"
          >
            Apply Now
          </a>
        </button>
      </motion.div>
    </div>
  );
};

export default Promo;
