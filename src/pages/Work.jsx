import { SparklesIcon } from "@heroicons/react/16/solid";
import React from "react";

import { Link } from "react-router-dom";

const Work = () => {
  return (
    <>
      <div className="my-16 mx-8">
        <section className="header pt-2 mb-16">
          <p className="flex items-center justify-start text-center mb-4">
            <span className="icon me-3">
              {<SparklesIcon className="h-4 w-4" />}
            </span>
            <span className="">CREATIONS</span>
          </p>
          <h1 className="text-5xl">My Work</h1>
        </section>

        <section className="">
          <div className="grid grid-cols-4 gap-2">
            <Link
              to={"/project1"}
              className="col-span-4 sm:col-span-2 xl:col-span-1 bg-red-100 px-6 overflow-hidden relative group"
            >
              <div className="px-3 pt-3 relative">
                <p className="name m-0 mb-3 py-2 text-lg">Project 1</p>
                <img
                  src="http://via.placeholder.com/320x320"
                  alt="Project 2 Mockup"
                  className="w-full h-auto"
                />
              </div>
              <img
                src="http://via.placeholder.com/320x320"
                alt="Hover Image"
                className="absolute top-0 left-0 w-full h-full object-cover transition-opacity duration-500 ease-in-out opacity-0 group-hover:opacity-100"
              />
            </Link>

            <Link
              to={"/project2"}
              className="col-span-4 sm:col-span-2 xl:col-span-1 bg-blue-100 px-6 overflow-hidden relative group"
            >
              <div className="px-3 pt-3 relative">
                <p className="name m-0 mb-3 py-2 text-lg">Project 2</p>
                <img
                  src="http://via.placeholder.com/320x320"
                  alt="Project 2 Mockup"
                  className="w-full h-auto"
                />
              </div>
              <img
                src="http://via.placeholder.com/320x320"
                alt="Hover Image"
                className="absolute top-0 left-0 w-full h-full object-cover transition-opacity duration-500 ease-in-out opacity-0 group-hover:opacity-100"
              />
            </Link>

            <Link
              to={"/project3"}
              className="col-span-4 sm:col-span-2 xl:col-span-1 bg-green-100 px-6 overflow-hidden relative group"
            >
              <div className="px-3 pt-3 relative">
                <p className="name m-0 mb-3 py-2 text-lg">Project 3</p>
                <img
                  src="http://via.placeholder.com/320x320"
                  alt="Project 3 Mockup"
                  className="w-full h-auto"
                />
              </div>
              <img
                src="http://via.placeholder.com/320x320"
                alt="Hover Image"
                className="absolute top-0 left-0 w-full h-full object-cover transition-opacity duration-500 ease-in-out opacity-0 group-hover:opacity-100"
              />
            </Link>

            <Link
              to={"/project4"}
              className="col-span-4 sm:col-span-2 xl:col-span-1 bg-yellow-100 px-6 overflow-hidden relative group"
            >
              <div className="px-3 pt-3 relative">
                <p className="name m-0 mb-3 py-2 text-lg">Project 4</p>
                <img
                  src="http://via.placeholder.com/320x320"
                  alt="Project 4 Mockup"
                  className="w-full h-auto"
                />
              </div>
              <img
                src="http://via.placeholder.com/320x320"
                alt="Hover Image"
                className="absolute top-0 left-0 w-full h-full object-cover transition-opacity duration-500 ease-in-out opacity-0 group-hover:opacity-100"
              />
            </Link>

            <Link
              to={"/project5"}
              className="col-span-4 sm:col-span-2 xl:col-span-1 bg-purple-100 px-6 overflow-hidden relative group"
            >
              <div className="px-3 pt-3 relative">
                <p className="name m-0 mb-3 py-2 text-lg">Project 5</p>
                <img
                  src="http://via.placeholder.com/320x320"
                  alt="Project 5 Mockup"
                  className="w-full h-auto"
                />
              </div>
              <img
                src="http://via.placeholder.com/320x320"
                alt="Hover Image"
                className="absolute top-0 left-0 w-full h-full object-cover transition-opacity duration-500 ease-in-out opacity-0 group-hover:opacity-100"
              />
            </Link>

            <Link
              to={"/project6"}
              className="col-span-4 sm:col-span-2 xl:col-span-1 bg-pink-100 px-6 overflow-hidden relative group"
            >
              <div className="px-3 pt-3 relative">
                <p className="name m-0 mb-3 py-2 text-lg">Project 6</p>
                <img
                  src="http://via.placeholder.com/320x320"
                  alt="Project 6 Mockup"
                  className="w-full h-auto"
                />
              </div>
              <img
                src="http://via.placeholder.com/320x320"
                alt="Hover Image"
                className="absolute top-0 left-0 w-full h-full object-cover transition-opacity duration-500 ease-in-out opacity-0 group-hover:opacity-100"
              />
            </Link>
          </div>
        </section>
      </div>
    </>
  );
};

export default Work;
