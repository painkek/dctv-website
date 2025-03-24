import React, { useRef } from "react";
import "./Hero.css";
import fbIcon from "../../assets/icon/fb-icon.png";
import mailIcon from "../../assets/icon/mail.png";
import locationIcon from "../../assets/icon/placeholder.png";

// motion
import { motion } from "framer-motion";
// variants
import { fadeIn } from "../../variants";

const Hero = () => {
  const targetSectionRef = useRef(null);

  const scrollToSection = () => {
    if (targetSectionRef.current) {
      targetSectionRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <div className="hero container">
        <motion.div
          variants={fadeIn("down", 0.1)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.7 }}
          className="contact-info"
        >
          <div className="contact-item">
            <a
              href="https://www.facebook.com/dctv.official"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={fbIcon} alt="Facebook" className="contact-icon" />
              <span>DCTV Facebook</span>
            </a>
          </div>
          <div className="contact-item">
            <img src={mailIcon} alt="Email" className="contact-icon" />
            <span>info@dctv.com.ph</span>
          </div>
          <div className="contact-item">
            <img src={locationIcon} alt="Location" className="contact-icon" />
            <span>
              DCTV Centre, #8 Fr. JL Bates St. <br /> Old Albay, Legazpi City,
              4500
            </span>
          </div>
        </motion.div>

        <motion.div
          variants={fadeIn("down", 0.1)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.7 }}
          className="hero-text"
        >
          <h1>The next generation connectivity</h1>
          <p>
            Experience seamless, high-speed connections built for the future.
          </p>
          {/* Target Section */}
          <div ref={targetSectionRef} className="target-section">
            <button className="hero-btn" onClick={scrollToSection}>
              GET STARTED
            </button>
          </div>
        </motion.div>
      </div>
    </>
  );
};

export default Hero;
