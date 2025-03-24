import React from "react";
import "./About.css";
import dctvHdLogo from "../../assets/logo/dctv_hd_logo.png"; // Replace with actual path
import dctvFibrehomeLogo from "../../assets/logo/dctv_fibrehome_logo.png"; // Replace with actual path
import { Link } from "react-router-dom";

// motion
import { motion } from "framer-motion";
// variants
import { fadeIn } from "../../variants";

const About = () => {
  return (
    <section className="about">
      <div className="services">
        <motion.div
          variants={fadeIn("right", 0.1)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.7 }}
          className="service-item"
        >
          <img src={dctvHdLogo} alt="DCTV HD Logo" className="service-logo" />
          <div className="service-text">
            <h3>DIGITAL CATV</h3>
            <p>
              Subscribe now and watch your favorite TV Series & Movies in SD and
              HD.
            </p>
          </div>
        </motion.div>
        <motion.div
          variants={fadeIn("left", 0.1)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.7 }}
          className="service-item"
        >
          <img
            src={dctvFibrehomeLogo}
            alt="DCTV Fibrehome Logo"
            className="service-logo"
          />
          <div className="service-text">
            <h3>Fiber to the Home</h3>
            <p>
              Experience ultra-fast reliable internet browsing plus Digital HD
              CaTV.
            </p>
          </div>
        </motion.div>
      </div>
      <motion.button
        variants={fadeIn("down", 0.2)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0.9 }}
        className="upgrade-btn"
      >
        <Link to="/plans">View Plans</Link>
      </motion.button>
    </section>
  );
};

export default About;
