import React from "react";
import profile from "../assets/profile.jpg";
import {
  ComputerDesktopIcon,
  IdentificationIcon,
  BriefcaseIcon,
  BuildingLibraryIcon,
  ChatBubbleBottomCenterTextIcon,
} from "@heroicons/react/24/outline";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="w-96 h-full py-3 px-3 ps-8 pt-16">
      <nav className="h-full flex flex-col justify-between items-start">
        <ul className="">
          <li className="nav-item">
            <a
              href=""
              className="w-full inline-flex items-center justify-start nav-link p-2 mb-4"
            >
              <img
                src={profile}
                alt=""
                width={48}
                height={48}
                className="object-fill rounded-full me-4"
              ></img>
              <div className="">
                <p className="m-0 text-sm font-semibold">Abhishek Patil</p>
                <p className="m-0 text-sm">Full Stack Developer</p>
              </div>
            </a>
          </li>
          <li className="nav-item">
            <Link
              to="/"
              className="w-full inline-flex items-center justify-start nav-link p-2 ps-4 py-3"
            >
              <span className="icon">
                {<ComputerDesktopIcon className="w-6 h-6 me-4" />}
              </span>
              <span className="icon">My Works</span>
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/about"
              className="w-full inline-flex items-center justify-start  nav-link p-2 ps-4 py-3"
            >
              <span className="icon">
                {<IdentificationIcon className="h-6 w-6 me-4" />}
              </span>
              <span className="icon">About Me</span>
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/experience"
              className="w-full inline-flex items-center justify-start  nav-link p-2 ps-4 py-3"
            >
              <span className="icon">
                {<BriefcaseIcon className="h-6 w-6 me-4" />}
              </span>
              <span className="icon">Experience</span>
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/articles"
              className="w-full inline-flex items-center justify-start  nav-link p-2 ps-4 py-3"
            >
              <span className="icon">
                {<BuildingLibraryIcon className="h-6 w-6 me-4" />}
              </span>
              <span className="icon">Articles</span>
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/contact"
              className="w-full inline-flex items-center justify-start  nav-link p-2 ps-4 py-3"
            >
              <span className="icon">
                {<ChatBubbleBottomCenterTextIcon className="h-6 w-6 me-4" />}
              </span>
              <span className="icon">Contact</span>
            </Link>
          </li>
        </ul>
        <ul>
          <li className="nav-item">
            <p className="w-full inline-flex items-center justify-start nav-link p-2 ps-4 py-3  ">
              <span className="icon font-semibold me-1">&#xa9;</span>
              <span className="icon text-sm">2024</span>
            </p>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;
