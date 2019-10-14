import React from "react"
import { Link } from "gatsby"
import LogoURL from "../images/SEMJS_logo.png";

import "./footer.styles.css"

/*
-meetup page
*/

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-logo-wrapper">
        <img src={LogoURL} alt="SEM JS logo" />
        <span className="footer-logo-wrapper__text">
          SEMjs
        </span>
      </div>
      <div className="footer-nav-links">
        <Link to="/">
          Home
        </Link>
        <a href="https://www.meetup.com/SEM-JS/">
          Meetup Page
        </a>
      </div>
      <span className="yellow">
      © {new Date().getFullYear()}
      </span>
      {` `}
    </footer>
  )
}
