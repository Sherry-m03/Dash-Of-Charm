import React, { useEffect, useState } from "react";
import Header from "./Header";
import Navbar from "./Navbar";
import SideBar from "./SideBar";
import Footer from "./Footer";
import { useLocation, useNavigate } from "react-router-dom";

export default function About() {
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
              <div>
                <h2 id="about-page-info-header">
                  Welcome! I’m Shreya, a Fullstack Developer
                </h2>
                <img
                  id="home-thumb"
                  src="https://images.pexels.com/photos/3178818/pexels-photo-3178818.jpeg?auto=compress&cs=tinysrgb&w=600"
                  alt=""
                />
                <p id="about-page-info-p">
                  Hi, I’m Shreya, a dedicated full-stack web developer
                  passionate about transforming ideas into intuitive and
                  high-performing digital solutions. I specialize in creating
                  user-friendly applications using technologies like JavaScript,
                  Node.js, React, and PostgreSQL. With a strong foundation built
                  through hands-on projects, I’ve honed my skills in front-end
                  and back-end development, responsive design, and API
                  integration. My focus is on delivering seamless functionality
                  and engaging user experiences, and I’m always excited to learn
                  and implement the latest industry practices.
                </p>
                <div className="about-page-skills-tab">My Skills</div>
                <div className="about-page-skills">
                  <img
                    src="https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/react-js-icon.png"
                    alt=""
                  />
                  <img
                    src="https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/node-js-icon.png"
                    alt=""
                  />
                  <img
                    src="https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/express-js-icon.png"
                    alt=""
                  />
                  <img
                    src="https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/postgresql-icon.png"
                    alt=""
                  />
                  <img
                    src="https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/javascript-programming-language-icon.png"
                    alt=""
                  />
                </div>
                <p id="about-page-info-p">
                  Beyond coding, I enjoy exploring spoken languages like Korean
                  and Thai, reflecting my curiosity and passion for continuous
                  learning. I believe that creativity and problem-solving go
                  hand in hand, and I strive to bring both to every project I
                  undertake. With a Bachelor’s degree from IIIT Naya Raipur and
                  a proactive approach to learning, I’m eager to contribute my
                  skills to meaningful projects, collaborate with innovative
                  teams, and grow as a developer. Let’s connect and build
                  something amazing together!
                </p>
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
