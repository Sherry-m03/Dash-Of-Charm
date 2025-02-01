import React, { useEffect, useState } from "react";
import Footer from "./Footer";
import Navbar from "./Navbar";
import Header from "./Header";
import SideBar from "./SideBar";
import { useLocation, useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();
  const [query, setQuery] = useState("");
  const [mealData, setMealData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const location = useLocation();
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

  useEffect(() => {
    async function fetchMealByName() {
      try {
        setLoading(true);
        setError(null);

        const response = await fetch(
          `https://www.themealdb.com/api/json/v1/1/search.php?s=${query}`
        );
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }
        const data = await response.json();
        setMealData(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    }
  }, [query]);

  const handleQuerySet = (q) => {
    navigate("/recipes", { state: q });
  };

  return (
    <div className="home">
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
          <Navbar setQuery={setQuery} />
          <Header />
          <div>
            <div className="home-intro">
              <div>
                <img id="home-thumb" src="Home-Thumb.jpg" alt="" />
                <div className="home-cake-time-dificulty">
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
                <div className="home-cake-header">Chocolate Cake Recipe</div>
                <div className="home-cake-info">
                  A chocolate cake is a rich, moist dessert made with cocoa or
                  melted chocolate, flour, sugar, eggs, and butter. Loved
                  worldwide, it features layers of fluffy cake, often paired
                  with creamy chocolate frosting or ganache. Perfect for
                  celebrations or indulgent treats, it's a timeless classic that
                  satisfies any chocolate craving.
                </div>
                <div className="home-more-recipe-div-2">
                  <div className="home-recipe-div-2">
                    <img
                      src="https://cdn.pixabay.com/photo/2017/03/14/08/04/pasta-2142229_640.jpg"
                      alt="Spicy Arrabiata Penne"
                    />
                    <div className="home-recipe-time-dificulty">
                      <div>
                        <img
                          src="https://uxwing.com/wp-content/themes/uxwing/download/time-and-date/clock-line-icon.png"
                          alt="time taken"
                        />
                        <p>25 minutes</p>
                      </div>
                      <div>
                        <img
                          src="https://uxwing.com/wp-content/themes/uxwing/download/hand-gestures/thumbs-up-line-icon.svg"
                          alt="dificulty"
                        />
                        <p>easy</p>
                      </div>
                    </div>
                    <h3>Spicy Arrabiata Penne</h3>
                    <p>
                      Ingredients: Penne rigate, Olive oil, Garlic, Chopped
                      tomatoes, Red chilli flakes, Italian seasoning, Basil,
                      Parmigiano-Reggiano
                    </p>
                    <div
                      onClick={() => handleQuerySet("Spicy Arrabiata Penne")}
                      id="home-recipe-nav-link"
                    >
                      <p>READ MORE </p>
                      <p>→</p>
                    </div>
                  </div>
                  <div className="home-recipe-div-2">
                    <img
                      src="https://images.pexels.com/photos/10295770/pexels-photo-10295770.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                      alt="Sushi"
                    />
                    <div className="home-recipe-time-dificulty">
                      <div>
                        <img
                          src="https://uxwing.com/wp-content/themes/uxwing/download/time-and-date/clock-line-icon.png"
                          alt="time taken"
                        />
                        <p>50 minutes</p>
                      </div>
                      <div>
                        <img
                          src="https://uxwing.com/wp-content/themes/uxwing/download/hand-gestures/thumbs-up-line-icon.svg"
                          alt="dificulty"
                        />
                        <p>medium</p>
                      </div>
                    </div>
                    <h3>Sushi Bites</h3>
                    <p>
                      Ingredients: Sushi Rice, Rice wine, Caster Sugar,
                      Mayonnaise, Rice wine, Soy Sauce, Cucumber, Rice Vinegar,
                      Nori seaweed sheets
                    </p>
                    <div
                      onClick={() => handleQuerySet("Sushi")}
                      id="home-recipe-nav-link"
                    >
                      <p>READ MORE </p>
                      <p>→</p>
                    </div>
                  </div>
                  <div className="home-recipe-div-2">
                    <img
                      src="https://cdn.pixabay.com/photo/2017/12/05/20/09/pizza-3000274_1280.jpg"
                      alt="Pizza Margherita"
                    />
                    <div className="home-recipe-time-dificulty">
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
                    <h3>Pizza Margherita</h3>
                    <p>
                      Ingredients: Plain Flour, Olive Oil, Passata, Mozzarella,
                      Yeast, Water, Sugar, Salt, Oregano, Basil, Black Pepper
                    </p>
                    <div
                      onClick={() => handleQuerySet("pizza")}
                      id="home-recipe-nav-link"
                    >
                      <p>READ MORE </p>
                      <p>→</p>
                    </div>
                  </div>
                  <div className="home-recipe-div-2">
                    <img
                      src="https://images.pexels.com/photos/12737917/pexels-photo-12737917.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                      alt="Dal Fry"
                    />
                    <div className="home-recipe-time-dificulty">
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
                        <p>Easy</p>
                      </div>
                    </div>
                    <h3>Dal Fry</h3>
                    <p>
                      Ingredients: Toor dal, Turmeric, Ghee, Chopped tomatoes,
                      Green Chili, Garam Masala, Mustard Seeds, Cumin seeds, Bay
                      Leaf, Ginger, Cilantro
                    </p>
                    <div
                      onClick={() => handleQuerySet("Dal Fry")}
                      id="home-recipe-nav-link"
                    >
                      <p>READ MORE </p>
                      <p>→</p>
                    </div>
                  </div>
                  <div className="home-recipe-div-2">
                    <img
                      src="https://images.pexels.com/photos/6896379/pexels-photo-6896379.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                      alt="chicken & halloumi burgers"
                    />
                    <div className="home-recipe-time-dificulty">
                      <div>
                        <img
                          src="https://uxwing.com/wp-content/themes/uxwing/download/time-and-date/clock-line-icon.png"
                          alt="time taken"
                        />
                        <p>35 minutes</p>
                      </div>
                      <div>
                        <img
                          src="https://uxwing.com/wp-content/themes/uxwing/download/hand-gestures/thumbs-up-line-icon.svg"
                          alt="dificulty"
                        />
                        <p>easy</p>
                      </div>
                    </div>
                    <h3>Chicken & Halloumi Burger</h3>
                    <p>
                      Ingredients: Chicken Breasts, Hotsauce, Lemon Juice,
                      Burger Buns, Cheese, Mayonnaise, Sour Cream, Lettuce, Red
                      Pepper
                    </p>
                    <div
                      onClick={() => handleQuerySet("Burger")}
                      id="home-recipe-nav-link"
                    >
                      <p>READ MORE </p>
                      <p>→</p>
                    </div>
                  </div>
                  <div className="home-recipe-div-2">
                    <img
                      src="https://images.pexels.com/photos/5639730/pexels-photo-5639730.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                      alt="Wontons"
                    />
                    <div className="home-recipe-time-dificulty">
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
                    <h3>Wontons</h3>
                    <p>
                      Ingredients: Cabbage, Garlic, Ginger, Soy Sauce, Sesame
                      Seed Oil, Carrots, Celery, Spring Onions, Wonton Wrap
                    </p>
                    <div
                      onClick={() => handleQuerySet("Wontons")}
                      id="home-recipe-nav-link"
                    >
                      <p>READ MORE </p>
                      <p>→</p>
                    </div>
                  </div>
                </div>
              </div>
              <SideBar handleQuerySet={handleQuerySet} />
            </div>
            <Footer />
          </div>
        </>
      )}
    </div>
  );
}
