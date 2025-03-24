import React from "react";
import "./BranchPreview.css"; // Import styles
import { Link } from "react-router-dom"; // Import Link

// motion
import { motion } from "framer-motion";
// variants
import { fadeIn } from "../../variants";

const BranchPreview = () => {
  return (
    <section className="branch-preview">
      <motion.div
        variants={fadeIn("left", 0.1)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0.7 }}
      >
        <h2>Our Branches</h2>
        <p>Find our branches and get connected easily.</p>
      </motion.div>

      {/* Google Maps Embed */}
      <motion.div
        variants={fadeIn("easeInOutBack", 0.1)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0.7 }}
        className="map-container"
      >
        <iframe
          src="https://www.google.com/maps/d/u/0/embed?mid=12koGDxqaay-Tbrw0Ze_jbUWtltYP9us&ehbc=2E312F&noprof=1"
          width="640"
          height="480"
        ></iframe>
      </motion.div>

      {/* Branch List Preview */}
      <motion.div
        variants={fadeIn("left", 0.1)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0.7 }}
        className="branch-list"
      ></motion.div>
      <motion.button
        variants={fadeIn("left", 0.1)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0.7 }}
        className="btn-branches"
      >
        <Link to="/branches">View Branches</Link>
      </motion.button>
    </section>
  );
};

export default BranchPreview;
