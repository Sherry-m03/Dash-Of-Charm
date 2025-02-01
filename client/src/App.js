import React from "react";
import Home from "./components/Home";
import Recipe from "./components/Recipe";
import RecipeDetails from "./components/RecipeDetails";
import About from "./components/About";
import Contact from "./components/Contact";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="recipes/*" element={<Recipe />} />
        <Route path="recipe-details/*" element={<RecipeDetails />} />
        <Route path="about/*" element={<About />} />
        <Route path="contact/*" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
