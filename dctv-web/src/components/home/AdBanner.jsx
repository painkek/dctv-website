import React from "react";
import Slider from "react-slick";
import DigitalHDAd from "../../assets/adbanner/DigitalHDAd4.png";
import FibreHomeAd from "../../assets/adbanner/FibreHomeAd4.png";
import PaymentBannerAd from "../../assets/adbanner/PaymentBannerAd3.png";
import ResidentialAd from "../../assets/adbanner/ResidentialAd9.png";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./AdBanner.css";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa"; // Import icons

// motion
import { motion } from "framer-motion";
// variants
import { fadeIn } from "../../variants";

const AdBanner = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    prevArrow: <SamplePrevArrow />,
    nextArrow: <SampleNextArrow />,
  };

  return (
    <div className="ad-banner-container">
      {" "}
      {/* Added container */}
      <motion.div
        variants={fadeIn("easeInOutBack", 0.2)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0.9 }}
        className="ad-banner"
      >
        <Slider {...settings}>
          <div>
            <img src={DigitalHDAd} alt="Digital HD Ad" />
          </div>
          <div>
            <img src={FibreHomeAd} alt="Fibre Home Ad" />
          </div>
          <div>
            <img src={PaymentBannerAd} alt="Payment Banner Ad" />
          </div>
          <div>
            <img src={ResidentialAd} alt="Residential Ad" />
          </div>
        </Slider>
      </motion.div>
    </div>
  );
};

// Custom Previous Arrow Component
function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: "rgba(0,0,0,0.5)",
        borderRadius: "50%",
        width: "40px",
        height: "40px",
      }}
      onClick={onClick}
    >
      <FaChevronLeft color="white" size={20} />
    </div>
  );
}

// Custom Next Arrow Component
function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: "rgba(0,0,0,0.5)",
        borderRadius: "50%",
        width: "40px",
        height: "40px",
      }}
      onClick={onClick}
    >
      <FaChevronRight color="white" size={20} />
    </div>
  );
}

export default AdBanner;
