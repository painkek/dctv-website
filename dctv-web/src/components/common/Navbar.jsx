import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom"; // Import useLocation
import "./Navbar.css";
import logo from "../../assets/logo/DCTV_Transparent.png";

// SVG for Hamburger Menu (Animated)
const HamburgerIcon = ({ isOpen }) => (
  <svg
    width="30"
    height="30"
    viewBox="0 0 100 80"
    fill="white"
    className={`hamburger-icon ${isOpen ? "open" : ""}`}
  >
    <rect width="100" height="10" rx="5"></rect>
    <rect y="30" width="100" height="10" rx="5"></rect>
    <rect y="60" width="100" height="10" rx="5"></rect>
  </svg>
);

const Navbar = () => {
  const location = useLocation(); // get current route
  const [hidden, setHidden] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  let lastScrollY = window.scrollY;

  const handleScroll = () => {
    if (window.scrollY > lastScrollY) {
      setHidden(true);
    } else {
      setHidden(false);
    }
    lastScrollY = window.scrollY;
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  // determine navbar background based on the route
  const navbarStyle =
    location.pathname === "/"
      ? { background: "rgba(8, 29, 39, 0.7)", backdropFilter: "blur(10px)" }
      : { background: "#082230" };

  return (
    <nav className={`container ${hidden ? "hidden" : ""}`} style={navbarStyle}>
      <img className="logo" src={logo} alt="logo" />
      <div className="hamburger" onClick={toggleMenu}>
        <HamburgerIcon isOpen={isMenuOpen} />
      </div>
      <ul className={`nav-links ${isMenuOpen ? "active" : ""}`}>
        <li>
          <Link to="/" onClick={closeMenu}>
            Home
          </Link>
        </li>
        <li>
          <Link to="/plans" onClick={closeMenu}>
            Plans
          </Link>
        </li>
        <li>
          <Link to="/support" onClick={closeMenu}>
            Support
          </Link>
        </li>
        <li>
          <Link to="/branches" onClick={closeMenu}>
            Branches
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
