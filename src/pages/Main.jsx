import React from "react";
import { Route, Routes } from "react-router-dom";
import Work from "./Work";
import About from "./About";
import Experience from "./Experience";
import Contact from "./Contact";
import Article from "./Article";
import Project1 from "./Project1";
import Project2 from "./Project2";
import Project3 from "./Project3";
import Project4 from "./Project4";
import Project5 from "./Project5";
import Project6 from "./Project6";

const Main = () => {
  return (
    <div className="w-full h-full bg-gray-100 overflow-y-auto">
      <Routes>
        <Route path="/" element={<Work />} />
        <Route path="/about" element={<About />} />
        <Route path="/experience" element={<Experience />} />
        <Route path="/articles" element={<Article />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/project1" element={<Project1 />} />
        <Route path="/project2" element={<Project2 />} />
        <Route path="/project3" element={<Project3 />} />
        <Route path="/project4" element={<Project4 />} />
        <Route path="/project5" element={<Project5 />} />
        <Route path="/project6" element={<Project6 />} />
      </Routes>
    </div>
  );
};

export default Main;
