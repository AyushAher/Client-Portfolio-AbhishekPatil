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

const Main = () => {
  return (
    <div className="w-full h-full bg-gray-100 overflow-y-auto">
      <Routes>
        <Route path="/" element={<Work />} />
        <Route path="/about" element={<About />} />
        <Route path="/experience" element={<Experience />} />
        <Route path="/articles" element={<Article />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/project/EmailUtil" element={<EmailUtitlity />} />
        <Route path="/project/YamlProcessor" element={<YamlProcessor />} />
        <Route path="/project/CleanArch" element={<CleanArch />} />
      </Routes>
    </div>
  );
};

export default Main;
