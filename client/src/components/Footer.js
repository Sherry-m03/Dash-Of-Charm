import React from "react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <div className="footer">
      <p>Made with ❤ by Shreya Masta</p>
      <div className="media-icons">
        <Link to="https://www.linkedin.com/in/shreya-masta/">
          <img
            src="https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/linkedin-app-white-icon.png"
            alt="linkedIn"
          />
        </Link>
        <Link to="https://shreya-masta.onrender.com/">
          <img
            src="https://uxwing.com/wp-content/themes/uxwing/download/location-travel-map/world-globe-white-icon.svg"
            alt="linkedIn"
          />
        </Link>
        <Link to="https://github.com/Sherry-m03">
          <img
            src="https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/github-white-icon.png"
            alt="linkedIn"
          />
        </Link>
      </div>
    </div>
  );
}
