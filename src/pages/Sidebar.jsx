import React, { useState } from "react";
import {
  ComputerDesktopIcon,
  IdentificationIcon,
  BriefcaseIcon,
  BuildingLibraryIcon,
  ChatBubbleBottomCenterTextIcon,
  Bars3Icon,
} from "@heroicons/react/24/outline";
import { Link } from "react-router-dom";

const Sidebar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen((menuOpen) => !menuOpen);
  };

  return (
    <div className="lg:w-[22rem] lg:h-full flex flex-col justify-between">
      <ul className="">
        <li className="nav-item flex items-center px-6 my-2 lg:px-3 lg:ps-8 lg:mt-16 lg:mb-4">
          <Link
            to="/"
            className="w-full inline-flex items-center justify-start nav-link p-2"
          >
            <img
              src="http://via.placeholder.com/48"
              alt=""
              width={48}
              height={48}
              className="object-fill rounded-full me-4"
            ></img>
            <div className="">
              <p className="m-0 text-sm font-semibold">Abhishek Patil</p>
              <p className="m-0 text-sm">Full Stack Developer</p>
            </div>
          </Link>

          <button className="sidebar-toggle lg:hidden" onClick={toggleMenu}>
            {<Bars3Icon className="h-6 w-6" />}
          </button>
        </li>
        <li className="relative">
          <ul
            className={`menu w-full absolute top-full left-0 z-20 bg-white  ${
              menuOpen ? "block" : "hidden"
            } lg:block`}
          >
            <li
              className={`nav-item px-6 lg:px-3 lg:ps-8 ${
                menuOpen ? "block" : "hidden"
              } lg:block `}
            >
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
            <li
              className={`nav-item px-6 lg:px-3 lg:ps-8 ${
                menuOpen ? "block" : "hidden"
              } lg:block `}
            >
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
            <li
              className={`nav-item px-6 lg:px-3 lg:ps-8 ${
                menuOpen ? "block" : "hidden"
              } lg:block `}
            >
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
            <li
              className={`nav-item px-6 lg:px-3 lg:ps-8 ${
                menuOpen ? "block" : "hidden"
              } lg:block `}
            >
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
            <li
              className={`nav-item px-6 lg:px-3 lg:ps-8 ${
                menuOpen ? "block" : "hidden"
              } lg:block `}
            >
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
        </li>
      </ul>
      <ul className="">
        <li
          className={`nav-item px-6 lg:px-3 lg:ps-8 my-4 ${
            menuOpen ? "block" : "hidden"
          } lg:block `}
        >
          <p className="w-full inline-flex items-center justify-start nav-link p-2 ps-4 py-3  ">
            <span className="icon font-semibold me-1">&#xa9;</span>
            <span className="icon text-sm">2024</span>
          </p>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
