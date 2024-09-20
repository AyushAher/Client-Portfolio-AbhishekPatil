import React from "react";
import { Route, Routes } from "react-router-dom";
import Work from "./Work";
import About from "./About";
import Experience from "./Experience";
import Contact from "./Contact";
import Article from "./Article";

const Main = () => {
  return (
    <div className="w-full h-full bg-gray-100 overflow-y-auto">
      <Routes>
        <Route path="/" element={<Work />} />
        <Route path="/about" element={<About />} />
        <Route path="/experience" element={<Experience />} />
        <Route path="/articles" element={<Article />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  );
};

export default Main;
