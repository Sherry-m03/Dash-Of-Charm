import React from "react";
import { Link } from "react-router-dom";

export default function SideBar({ handleQuerySet }) {
  const handleSendQuery = (sentQuery) => {
    handleQuerySet(sentQuery);
  };
  return (
    <div className="home-intro-info">
      <div className="home-about-me">
        <h3 className="home-about-me-head">ABOUT ME</h3>
        <img
          className="home-about-me-chef"
          src="Shreya_Profile_pic.png"
          alt="woman chef"
        />
        <p className="home-about-me-info">
          A home chef with a heart for comfort food, blending love and fresh
          ingredients to create meals that bring families together.
        </p>
        <h2 className="home-about-me-sign">Sherry</h2>
      </div>
      <div className="home-social-media">
        <h3 className="home-media-head">FIND ME ON</h3>
        <div className="home-media-icons">
          <Link to="https://www.linkedin.com/in/shreya-masta/">
            <img
              src="https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/linkedin-square-icon.png"
              alt="linkedIn"
            />
          </Link>
          <Link to="https://shreya-masta.onrender.com/">
            <img
              src="https://uxwing.com/wp-content/themes/uxwing/download/location-travel-map/world-globe-line-icon.png"
              alt="linkedI</Link>n"
            />
          </Link>
          <Link to="https://github.com/Sherry-m03">
            <img
              src="https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/github-icon.png"
              alt="linkedIn"
            />
          </Link>
        </div>
      </div>
      <div className="home-healthy-food">
        <div
          onClick={() => handleSendQuery("dessert")}
          className="home-food-div"
        >
          DESSERT
        </div>
      </div>
      <div className="home-breakfast-food">
        <div
          className="home-food-div"
          onClick={() => handleSendQuery("breakfast")}
        >
          BREAKFAST
        </div>
      </div>
      <div className="home-more-recipes">
        <h3 className="home-more-recipes-head">MORE RECIPES</h3>
        <div
          onClick={() => handleSendQuery("Salted Caramel Cheescake")}
          className="home-recipe"
        >
          <img
            src="https://www.themealdb.com/images/media/meals/xqrwyr1511133646.jpg"
            alt=""
          />
          <div className="home-recipe-info">
            <h3>Salted Caramel Cheescake</h3>
            <p>January 29, 2025</p>
          </div>
        </div>
        <div
          onClick={() => handleSendQuery("Chocolate Raspberry Brownies")}
          className="home-recipe"
        >
          <img
            src="https://images.pexels.com/photos/3026804/pexels-photo-3026804.jpeg?auto=compress&cs=tinysrgb&w=600"
            alt=""
          />
          <div className="home-recipe-info">
            <h3>Chocolate Raspberry Brownies</h3>
            <p>January 29, 2025</p>
          </div>
        </div>
        <div
          onClick={() => handleSendQuery("Peanut Butter Cookies")}
          className="home-recipe"
        >
          <img
            src="https://images.pexels.com/photos/9368675/pexels-photo-9368675.jpeg?auto=compress&cs=tinysrgb&w=600"
            alt=""
          />
          <div className="home-recipe-info">
            <h3>Peanut Butter Cookies</h3>
            <p>January 29, 2025</p>
          </div>
        </div>
      </div>
      <div className="home-more-categories">
        <h3 className="home-more-categories-head">CATEGORIES</h3>
        <div className="home-more-category-names">
          <div
            onClick={() => handleSendQuery("miscellaneous")}
            className="home-category"
          >
            <img src="Cat_6.png" alt="" />
            <p>Popular</p>
          </div>
          <div
            onClick={() => handleSendQuery("pizza")}
            className="home-category"
          >
            <img style={{ objectFit: "cover" }} src="Cat_4.png" alt="" />
            <p>Pizza</p>
          </div>
          <div
            onClick={() => handleSendQuery("vegetarian")}
            className="home-category"
          >
            <img src="Cat_5.png" alt="" />
            <p>Vegetarian</p>
          </div>
          <div className="home-category">
            <img src="Cat_1.png" alt="" />
            <p>Lunch</p>
          </div>
          <div className="home-category">
            <img src="Cat_3.png" alt="" />
            <p>Dessert</p>
          </div>
          <div className="home-category">
            <img src="Cat_2.png" alt="" />
            <p>Indian</p>
          </div>
        </div>
      </div>
    </div>
  );
}
