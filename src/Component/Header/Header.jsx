import React from "react";
import logo from "./logo.jpg";
import "./Header.css";
import { Link } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import { useState } from "react";

function Header() {
  const [show, setShow] = useState(false);
  const style = show ? { display: "block" } : { left: "-100%" };
  const handleLinkClick = () => {
    setShow(false);
  };
  return (
    <>
      <div className="container">
        <div className="header">
          <div className="logo">
            <a
              href="https://www.nitp.ac.in"
              className="notice-title"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={logo} alt="logo" />
            </a>
          </div>
          <div className="heading">
            <h2>Frontiers in Nanomaterials Sciences:</h2>
            <h2> Aspects in Biotechnology and Chemical Engineering</h2>
            <span>(Hybrid Mode)</span>
          </div>
          <div className="menu" onClick={() => setShow(!show)}>
            <GiHamburgerMenu />
          </div>
        </div>
        <div className="navbar" style={style}>
        <ul>
            <li>
              <Link to="/" className="link" onClick={handleLinkClick}>
                Home
              </Link>
            </li>
            <li>
              <Link to="/history" className="link" onClick={handleLinkClick}>
                History
              </Link>
            </li>
            <li>
              <Link to="/committees" className="link" onClick={handleLinkClick}>
                Committees
              </Link>
            </li>
            <li>
              <Link to="/callfor" className="link" onClick={handleLinkClick}>
                Call For Paper
              </Link>
            </li>
            <li>
              <Link to="/cameraready" className="link" onClick={handleLinkClick}>
                Camera-ready Paper
              </Link>
            </li>
            <li>
              <Link to="/programme" className="link" onClick={handleLinkClick}>
                Programme
              </Link>
            </li>
            <li>
              <Link to="/acceptedpaper" className="link" onClick={handleLinkClick}>
                Accepted Paper
              </Link>
            </li>
            <li>
              <Link to="/sponsor" className="link" onClick={handleLinkClick}>
              Sponsorship
              </Link>
            </li>
            <li>
              <Link to="/registration" className="link" onClick={handleLinkClick}>
                Registration
              </Link>
            </li>
            <li>
              <Link to="/contact" className="link" onClick={handleLinkClick}>
                Contact Us
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default Header;
