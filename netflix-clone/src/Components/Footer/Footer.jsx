import React from "react";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import YouTubeIcon from "@mui/icons-material/YouTube";
import "./footer.css";

const Footer = () => {
  return (
    <div className="footer_outer_container">
      <div className="footer_inner_container">

        {/* Social Icons */}
        <div className="footer_icons">
          <FacebookIcon className="icon" />
          <InstagramIcon className="icon" />
          <TwitterIcon className="icon" />
          <YouTubeIcon className="icon" />
        </div>

        {/* Footer Links */}
        <div className="footer_links">
          <ul>
            <li>Audio Description</li>
            <li>Investor Relations</li>
            <li>Legal Notices</li>
          </ul>

          <ul>
            <li>Help Center</li>
            <li>Jobs</li>
            <li>Cookie Preferences</li>
          </ul>

          <ul>
            <li>Gift Cards</li>
            <li>Terms of Use</li>
            <li>Privacy</li>
          </ul>

          <ul>
            <li>Media Center</li>
            <li>Contact Us</li>
            <li>Speed Test</li>
          </ul>
        </div>

        {/* Language Selector */}
        <div className="footer_language">
          <select>
            <option>English</option>
            <option>Amharic</option>
            <option>French</option>
            <option>Spanish</option>
          </select>
        </div>

        <p className="footer_copy">© 2024 Netflix Clone</p>
      </div>
    </div>
  );
};

export default Footer;
