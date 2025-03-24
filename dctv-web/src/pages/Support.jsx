import React, { useState } from "react";
import "./Support.css";

import Footer from "../components/common/Footer";

// video
import Gcash from "../assets/video/gcash-payment.mp4";
import Paymaya from "../assets/video/paymaya-payment.mp4";

// icon
import Messenger from "../assets/icon/messenger.png";

// motion
import { motion } from "framer-motion";
// variants
import { fadeIn } from "../variants";

function Support() {
  const [openQuestion, setOpenQuestion] = useState(null);
  const [selectedMethod, setSelectedMethod] = useState("GCash");

  const handleMethodChange = (methodName) => {
    setSelectedMethod(methodName);
  };

  const paymentMethods = [
    {
      name: "GCash",
      description: "Fast and secure payments with GCash.",
      videoSrc: Gcash,
      steps: [
        "Log in to your account",
        "Go to Pay Bills",
        "Cable/Internet",
        "Select DCTV Cable",
        "Fill out payment details",
        "Confirm Email",
      ],
    },
    {
      name: "Maya",
      description: "Convenient payments with Maya.",
      videoSrc: Paymaya,
      steps: [
        "Open your Maya app",
        "Tap 'More' ",
        "Go to 'Bills'",
        "Select 'Cable and Internet'",
        "Select DCTV Cable Network",
        "Enter payment details",
        "Confirm payment",
      ],
    },
  ];

  const questions = [
    {
      question: "How do I reset my modem/router?",
      answer:
        "Unplug the modem/router for 30 seconds, then plug it back in, or press the reset button for a factory reset if needed.",
    },
    {
      question: "My internet is slow, what can I do?",
      answer: "Try restarting your modem or checking for outages.",
    },
    {
      question: "How do I reset my cable box?",
      answer:
        "Unplug the cable box for 30 seconds, then plug it back in and wait for it to fully reboot.",
    },
  ];

  return (
    <div>
      <motion.div
        variants={fadeIn("down", 0.1)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0.7 }}
        className="support-container"
      >
        <h1>Support Center</h1>
        <section className="faq-section">
          <h2>Frequently Asked Questions</h2>
          {questions.map((item, index) => (
            <div key={index} className="accordion-item">
              <div
                className="accordion-header"
                onClick={() =>
                  setOpenQuestion(openQuestion === index ? null : index)
                }
              >
                <strong>{item.question}</strong>
                <span>{openQuestion === index ? "-" : "+"}</span>
              </div>
              {openQuestion === index && (
                <div className="accordion-content">{item.answer}</div>
              )}
            </div>
          ))}
        </section>
        <section className="contact-section">
          <h2>Need Further Assistance?</h2>
          <p>Contact our support team:</p>
          <ul>
            <li>
              <strong>Chat:</strong>{" "}
              <a
                href="https://m.me/dctv.official"
                target="_blank"
                rel="noopener noreferrer"
              >
                Start a chat
                <img
                  src={Messenger}
                  alt="Messenger"
                  style={{
                    width: "20px",
                    height: "20px",
                    marginLeft: "4px",
                    verticalAlign: "middle",
                  }}
                />
              </a>
            </li>
            <li>
              <strong>Call Us:</strong> (52) 742-6781
            </li>
            <li>
              <strong>Email:</strong> info@dctv.com.ph
            </li>
          </ul>
        </section>
      </motion.div>
      <div
        variants={fadeIn("up", 0.1)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0.7 }}
        className="payment-container"
      >
        <section className="payment-section">
          <motion.h2
            variants={fadeIn("left", 0.1)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.7 }}
          >
            Online Payment Methods
          </motion.h2>
          <motion.p
            variants={fadeIn("left", 0.1)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.7 }}
          >
            Discover seamless digital transactions with GCash and PayMaya, two
            of the most trusted e-wallets in the Philippines. Enjoy secure,
            fast, and hassle-free payments for shopping, bills, and
            more—anytime, anywhere.
          </motion.p>
          <motion.div
            variants={fadeIn("left", 0.1)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.7 }}
            className="method-toggle"
          >
            <button
              className={selectedMethod === "GCash" ? "active" : ""}
              onClick={() => handleMethodChange("GCash")}
            >
              GCash
            </button>
            <button
              className={selectedMethod === "Maya" ? "active" : ""}
              onClick={() => handleMethodChange("Maya")}
            >
              Maya
            </button>
          </motion.div>

          <motion.div
            variants={fadeIn("right", 0.1)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.7 }}
            className="payment-method-details"
          >
            {paymentMethods.map((method, index) => {
              if (method.name === selectedMethod) {
                return (
                  <div key={index} className="payment-method-content">
                    <div className="video-container">
                      <video controls width="100%">
                        <source src={method.videoSrc} type="video/mp4" />
                        Your browser does not support the video tag.
                      </video>
                    </div>
                    <div className="steps-container">
                      <h2>Pay with {method.name}</h2>
                      <ul>
                        {method.steps.map((step, stepIndex) => (
                          <li key={stepIndex}>{step}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                );
              }
              return null;
            })}
          </motion.div>
        </section>
      </div>

      <Footer />
    </div>
  );
}

export default Support;
