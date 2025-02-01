import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";
import Header from "./Header";
import Footer from "./Footer";
import SideBar from "./SideBar";
import CustomImages from "./CustomImages";
import TagImages from "./TagImages";

import { useLocation } from "react-router-dom";

export default function RecipeDetails() {
  const location = useLocation();
  const [loading, setLoading] = useState(true);
  const [meal, setMeal] = useState([]);

  useEffect(() => {
    setLoading(true);

    const meal = location.state?.meal;
    setMeal(meal);
    const timeout = setTimeout(() => {
      setLoading(false);
    }, 3000);

    return () => clearTimeout(timeout);
  }, [location.pathname]);

  console.log(meal);
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
    let interval;

    if (loading) {
      interval = setInterval(() => {
        setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
      }, 500);
    }
    return () => clearInterval(interval);
  }, [loading, images.length]);

  const ingredients = [];
  for (let i = 1; i <= 20; i++) {
    const ingredient = meal[`strIngredient${i}`];
    const measure = meal[`strMeasure${i}`];

    if (ingredient && ingredient.trim() !== "") {
      ingredients.push(`${measure} ${ingredient}`);
    }
  }
  console.log(ingredients);

  const instructions = meal.strInstructions
    ?.split("\n")
    .filter((line) => line.trim() !== "");

  const getCustomImage = (idMeal, fallbackUrl) => {
    const customImage = CustomImages.find((img) => img.idMeal === idMeal);
    return customImage ? customImage.imageUrl : fallbackUrl;
  };

  const tagCheck = TagImages.find(
    (img) => img.tag === meal.strCategory?.toLowerCase()
  );
  const tagImage = tagCheck ? tagCheck.imageURL : [];
  console.log(tagCheck);

  return (
    <div className="recipe-details">
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
            <div className="rd-disp">
              <div>
                <img
                  id="home-thumb"
                  src={getCustomImage(meal.idMeal, meal.strMealThumb)}
                  alt=""
                />
                <div className="rd-recipe-detail-icons">
                  <div className="rd-recipe-detail-icons-details">
                    <div id="icon-details">
                      <img
                        src="https://uxwing.com/wp-content/themes/uxwing/download/time-and-date/clock-line-icon.png"
                        alt=""
                      />
                      <p>30 minutes</p>
                    </div>
                    <div id="icon-details">
                      <img
                        src="https://uxwing.com/wp-content/themes/uxwing/download/hand-gestures/thumbs-up-line-icon.svg"
                        alt=""
                      />
                      <p>easy</p>
                    </div>
                    <div id="icon-details">
                      <img
                        src="https://uxwing.com/wp-content/themes/uxwing/download/household-and-furniture/kitchen-spoons-icon.svg"
                        alt=""
                      />
                      <p>serves 1</p>
                    </div>
                    <div id="icon-details">
                      <img
                        src="https://uxwing.com/wp-content/themes/uxwing/download/e-commerce-currency-shopping/tag-line-icon.png"
                        alt=""
                      />
                      <p>{meal.strCategory}</p>
                    </div>
                  </div>
                </div>
                <h3 className="rd-summary">
                  Lorem ipsum dolor sit amet, consec tetuipisicing elit, sed do
                  eiusmod tempor dunt ut labore et dolore magna aliqut enim ad
                  minim veniamquis nostrud exercitation ullamco oris nisi ut
                  aliquip ex ea commodnsequat. Duis auolor in reprehenderit in
                  voluptate velit esse cillum dolore eu
                </h3>
                {ingredients.length > 0 && (
                  <>
                    <div className="rd-ingredients">
                      <h2>Ingredients</h2>
                      <div className="rd-ingredients-div"></div>
                    </div>

                    <div className="rd-ingredients-list">
                      {/* <input></input> */}
                      {ingredients?.map((item, index) => (
                        <div key={index} className="ingredient">
                          <div className="checkbox">
                            <input type="checkbox"></input>
                          </div>
                          <div className="ingredient-detail">
                            <p>{item}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </>
                )}

                <div className="rd-ingredients">
                  <h2>Instructions</h2>
                  <div className="rd-ingredients-div"></div>
                </div>

                <div className="rd-instruction">
                  {instructions?.map((step, index) => (
                    <div className="rd-instruction-steps" key={index}>
                      <div className="rd-step-no">
                        <p>{index + 1}.</p>
                      </div>
                      <div className="rd-step">
                        <p>{step}</p>
                        {index === 1 && (
                          <div id="cooking-process-img">
                            <img src="cook1.png" alt="" />
                            <img src="cook2.png" alt="" />
                            <img src="cook3.png" alt="" />
                            <img src="cook4.png" alt="" />
                          </div>
                        )}
                        {index === instructions.length - 1 && (
                          <div id="cooking-process-img">
                            {tagImage?.map((img) => (
                              <img src={img} alt="" />
                            ))}
                          </div>
                        )}
                      </div>
                    </div>
                  ))}
                </div>

                <div className="rd-ingredients">
                  <h2>You like:</h2>
                  <div className="rd-ingredients-div"></div>
                </div>
              </div>
              <SideBar />
            </div>
          </div>
        </>
      )}
    </div>
  );
}
