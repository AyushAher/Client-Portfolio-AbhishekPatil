import React from "react";
import { Route, Routes } from "react-router-dom";
import Work from "./Work";
import About from "./About";
import Experience from "./Experience";
import Contact from "./Contact";
import Article from "./Article";
import CleanArch from "./projects/CleanArch";
import EmailUtitlity from "./projects/EmailUtitlity";
import YamlProcessor from "./projects/YamlProcessor";
import TechBlogs from "./TechBlogs";

const Main = () => {
  return (
    <div className="w-full h-full bg-gray-100 dark:bg-dark dark:text-light-text overflow-y-auto">
      <Routes>
        <Route path="/" element={<About />} />
        <Route path="/work" element={<Work />} />
        <Route path="/experience" element={<Experience />} />
        <Route path="/articles" element={<Article />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/blogs" element={<TechBlogs />} />
        <Route path="/project/EmailUtil" element={<EmailUtitlity />} />
        <Route path="/project/YamlProcessor" element={<YamlProcessor />} />
        <Route path="/project/CleanArch" element={<CleanArch />} />
      </Routes>
    </div>
  );
};

export default Main;
