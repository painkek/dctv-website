import React from "react";
import "./Branches.css";

// motion
import { motion } from "framer-motion";
// variants
import { fadeIn } from "../variants";

const Branches = () => {
  return (
    <section className="branch-preview1">
      <motion.div
        variants={fadeIn("left", 0.1)}
        initial="hidden"
        W
        whileInView={"show"}
        viewport={{ once: false, amount: 0.7 }}
      >
        <h2>Our Branches</h2>
        <p>Find our branches and get connected easily.</p>
      </motion.div>

      {/* Google Maps Embed */}
      <motion.div
        variants={fadeIn("up", 0.1)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0.7 }}
        className="map-container1"
      >
        <iframe
          src="https://www.google.com/maps/d/u/0/embed?mid=12koGDxqaay-Tbrw0Ze_jbUWtltYP9us&ehbc=2E312F&noprof=1"
          width="640"
          height="480"
        ></iframe>
      </motion.div>
    </section>
  );
};

export default Branches;
