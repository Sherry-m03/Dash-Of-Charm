import React, { useEffect, useState } from "react";
import CustomImages from "./CustomImages";
import Navbar from "./Navbar";
import Header from "./Header";
import Footer from "./Footer";
import { useLocation, useNavigate } from "react-router-dom";

export default function Recipe() {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  const categories = [
    "Chicken",
    "Dessert",
    "Miscellaneous",
    "Pasta",
    "Seafood",
    "Side",
    "Starter",
    "Vegan",
    "Vegetarian",
    "Breakfast",
  ];

  const [meals, setMeals] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("");
  const [mealQuery, setMealQuery] = useState("");
  const [categoryMeals, setCategoryMeals] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const mealsPerPage = 9;

  const location = useLocation();
  const navigate = useNavigate();
  const query = location.state || "";
  useEffect(() => {
    if (query) {
      if (categories.find((q) => q.toLowerCase() === query.toLowerCase()))
        setSelectedCategory(query);
      else setMealQuery(query);
      setInputValue("");
    }
  }, [query, selectedCategory]);

  useEffect(() => {
    console.log(mealQuery);
  }, [mealQuery]);

  // useEffect(() => {
  //   const fetchRandomMeals = async () => {
  //     try {
  //       setLoading(true);
  //       const response = await fetch(`http://localhost:3001/random`);
  //       const data = await response.json();
  //       setMeals(data);
  //     } catch {
  //       console.error("Error fetching meals.");
  //     } finally {
  //       setLoading(false);
  //     }
  //   };
  //   fetchRandomMeals();
  // }, []);

  useEffect(() => {
    const fetchMealsPerLetter = async () => {
      const letters = "abcdefghijklmnopqrstuvwxyz";
      let fetchedMeals = [];
      const limit = 5;
      try {
        setLoading(true);
        for (const letter of letters) {
          const response = await fetch(
            `https://www.themealdb.com/api/json/v1/1/search.php?f=${letter}`
          );
          const data = await response.json();
          if (data.meals) {
            const filteredMeals = data.meals.filter(
              (meal) =>
                !meal.strMeal.toLowerCase().includes("beef") &&
                !meal.strMeal.toLowerCase().includes("pork") &&
                !meal.strMeal.toLowerCase().includes("goat")
            );
            fetchedMeals.push(...filteredMeals.slice(0, limit));
          }
        }
        setMeals(fetchedMeals);
      } catch {
        console.error("Error fetching meals.");
      } finally {
        setLoading(false);
      }
    };
    fetchMealsPerLetter();
  }, []);

  useEffect(() => {
    const fetchCategoryMeals = async () => {
      try {
        setLoading(true);
        const response = await fetch(
          `https://www.themealdb.com/api/json/v1/1/filter.php?c=${selectedCategory}`
        );
        const data = await response.json();
        setCategoryMeals(data.meals || []);
      } catch (error) {
        console.error("Error fetching category meals:", error);
      } finally {
        setLoading(false);
      }
    };

    const fetchHomeMeals = async () => {
      try {
        setLoading(true);
        const response = await fetch(
          `https://www.themealdb.com/api/json/v1/1/search.php?s=${mealQuery}`
        );
        const data = await response.json();
        setCategoryMeals(data.meals || []);
      } catch (error) {
        console.error("Error fetching home meals:", error);
      } finally {
        setLoading(false);
      }
    };

    if (selectedCategory) {
      fetchCategoryMeals();
    } else if (mealQuery) {
      fetchHomeMeals();
    }
  }, [selectedCategory, mealQuery]);

  console.log(meals);
  console.log(categoryMeals);

  const handleCheckboxChange = (category) => {
    setSelectedCategory(category === selectedCategory ? null : category);
    setCurrentPage(1);
  };

  const displayedMeals = categoryMeals.length > 0 ? categoryMeals : meals;

  const totalPages = Math.ceil(displayedMeals.length / mealsPerPage);
  const indexOfLastMeal = currentPage * mealsPerPage;
  const indexOfFirstMeal = indexOfLastMeal - mealsPerPage;
  const currentMeals = displayedMeals.slice(indexOfFirstMeal, indexOfLastMeal);

  const handleNext = () => {
    if (currentPage < totalPages) setCurrentPage(currentPage + 1);
  };

  const handlePrev = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };

  const getCustomImage = (idMeal, fallbackUrl) => {
    const customImage = CustomImages.find((img) => img.idMeal === idMeal);
    return customImage ? customImage.imageUrl : fallbackUrl;
  };

  const handleQueryChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleEnterPress = (e) => {
    if (e.key === "Enter") {
      setMealQuery(inputValue);
      setInputValue("");
    }
  };

  const handleSearchClick = () => {
    setMealQuery(inputValue);
    setInputValue("");
  };

  const getNavQuery = (value) => {
    setMealQuery(value);
  };

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

  const getRecipeDeatils = async (idOfMeal) => {
    try {
      const response = await fetch(
        `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${idOfMeal}`
      );
      const data = await response.json();
      const MealToGet = data.meals[0];
      console.log(MealToGet);
      console.log(idOfMeal);
      navigate("/recipe-details", { state: { meal: MealToGet } });
    } catch (error) {
      console.error("Error navigating to recipe details:", error);
    }
  };

  return (
    <div className="all-recipes-div">
      <Navbar getNavQuery={getNavQuery} />
      <Header />
      <div className="all-recipes">
        <div className="all-recipes-top-tab">
          <div className="top-tab-search-div">
            <img
              src="https://uxwing.com/wp-content/themes/uxwing/download/user-interface/search-magnifying-glass-white-icon.svg"
              alt="search"
              onClick={handleSearchClick}
            />
          </div>
          <input
            type="text"
            value={inputValue}
            onChange={handleQueryChange}
            onKeyDown={handleEnterPress}
            className="top-tab-input"
          ></input>
        </div>
        <div className="all-disp-div">
          {!loading && (
            <div className="disp-filters">
              <h2>Filter Recipes:</h2>
              <p>Check a box below to narrow recipe search results</p>
              <h3>Filter by Categories</h3>
              {categories.map((category) => (
                <div key={category}>
                  <label
                    style={{
                      color:
                        selectedCategory === category ? "#060606" : "#6b6768",
                      cursor: "pointer",
                    }}
                  >
                    <input
                      type="checkbox"
                      value={category}
                      checked={selectedCategory === category}
                      onChange={() => handleCheckboxChange(category)}
                      style={{ marginRight: "8px" }}
                    />
                    {category}
                  </label>
                </div>
              ))}
            </div>
          )}
          <div className="recipe-display-div">
            {loading && (
              <div className="loader-container">
                <img
                  src={images[currentImageIndex]}
                  alt="Loading..."
                  className="loader-image"
                />
              </div>
            )}
            {!loading && (
              <>
                <div className="recipe-display-pagination">
                  <button onClick={handlePrev} disabled={currentPage === 1}>
                    <img
                      src="https://uxwing.com/wp-content/themes/uxwing/download/arrow-direction/thin-chevron-round-left-icon.svg"
                      alt="next page"
                    />
                  </button>
                  <span>
                    Page {currentPage} of {totalPages}
                  </span>
                  <button
                    onClick={handleNext}
                    disabled={currentPage === totalPages}
                  >
                    <img
                      src="https://uxwing.com/wp-content/themes/uxwing/download/arrow-direction/thin-chevron-round-right-icon.svg"
                      alt="next page"
                    />
                  </button>
                </div>
                <div className="meal-grid">
                  {loading && <p>Loading...</p>}
                  {currentMeals.map((meal, index) => (
                    <div key={meal.idMeal} className="meal-card">
                      <img
                        style={{ objectFit: "cover" }}
                        src={getCustomImage(meal.idMeal, meal.strMealThumb)}
                        alt={meal.strMeal}
                        onClick={() => getRecipeDeatils(meal.idMeal)}
                      />

                      <div className="meal-card-time-diff">
                        <div>
                          <img
                            src="https://uxwing.com/wp-content/themes/uxwing/download/time-and-date/clock-line-icon.png"
                            alt="time taken"
                          />
                          <p>30 minutes</p>
                        </div>
                        <div>
                          <img
                            src="https://uxwing.com/wp-content/themes/uxwing/download/hand-gestures/thumbs-up-line-icon.svg"
                            alt="dificulty"
                          />
                          <p>medium</p>
                        </div>
                      </div>
                      <h3>{meal.strMeal}</h3>
                    </div>
                  ))}
                </div>
              </>
            )}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
