import React, { useEffect, useState } from "react";
import Header from "./Header";
import Navbar from "./Navbar";
import SideBar from "./SideBar";
import Footer from "./Footer";
import { Link, useLocation, useNavigate } from "react-router-dom";

export default function Contact() {
  const location = useLocation();
  const navigate = useNavigate();

  const [loading, setLoading] = useState(true);
  const images = [
    "load1.png",
    "load2.png",
    "load3.png",
    "load4.png",
    "load5.png",
    "load6.png",
    "load7.png",
    "load8.png",
    "load9.png",
  ];
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    setLoading(true);

    const timeout = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timeout);
  }, [location.pathname]);

  useEffect(() => {
    let interval;

    if (loading) {
      interval = setInterval(() => {
        setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
      }, 500);
    }
    return () => clearInterval(interval);
  }, [loading, images.length]);

  const handleQuerySet = (q) => {
    navigate("/recipes", { state: q });
  };

  return (
    <div className="about-page">
      {loading ? (
        <div className="loader">
          <img
            src={images[currentImageIndex]}
            alt="Loading..."
            className="loader-image"
          />
        </div>
      ) : (
        <>
          <Navbar />
          <Header />
          <div className="rd-disp-div">
            <div className="all-recipes-top-tab"></div>
            <div className="about-page-info">
              <div className="contact-page">
                <h2 id="about-page-info-header">Contact Information</h2>
                <div className="about-page-skills-tab">Reach me at:</div>
                <div className="contact-page-info">
                  <div className="contact-page-contact">
                    <img
                      src="https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/gmail-icon.png"
                      alt=""
                    />
                    <p>shreyamasta99@gmail.com</p>
                  </div>
                  <Link to="https://www.linkedin.com/in/shreya-masta/">
                    <div className="contact-page-contact">
                      <img
                        src="https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/linkedin-app-icon.svg"
                        alt=""
                      />
                      <p>/shreya-masta </p>
                    </div>
                  </Link>
                  <Link to="https://github.com/Sherry-m03">
                    <div className="contact-page-contact">
                      <img
                        src="https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/github-icon.png"
                        alt=""
                      />
                      <p> /Sherry-m03</p>
                    </div>
                  </Link>
                </div>
              </div>
              <SideBar handleQuerySet={handleQuerySet} />
            </div>
          </div>
          <Footer />
        </>
      )}
    </div>
  );
}
