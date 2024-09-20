import { SparklesIcon } from "@heroicons/react/16/solid";
import React from "react";
import mockup1 from "../assets/mock1.jpg";
import mockup2 from "../assets/mock2.jpg";
import { Link } from "react-router-dom";

const Work = () => {
  return (
    <>
      <div className="mt-16 mx-8">
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
          <div className="grid grid-cols-4 gap-4">
            <Link
              to={"/"}
              className="col-span-1 bg-red-100 h-80 px-6 overflow-hidden relative group"
            >
              <div className="p-3 z-10 relative">
                <p className="name m-0 mb-3 py-2 text-lg font-semibold">
                  Project 1
                </p>
                <img
                  src="https://via.placeholder.com/150"
                  alt="Project 1 Mockup"
                  className="w-full h-auto"
                />
              </div>

              {/* Second Image that appears on hover */}
              <img
                src="https://via.placeholder.com/300"
                alt="Hover Image"
                className="absolute top-0 left-0 w-full h-full object-cover transition-opacity duration-500 ease-in-out opacity-0 group-hover:opacity-100"
              />
            </Link>
            <Link
              to={"/"}
              className="col-span-1 bg-blue-100 h-80 px-6 overflow-hidden relative group"
            >
              <div className="p-3 z-10 relative">
                <p className="name m-0 mb-3 py-2">Project 2</p>
                <img
                  src="https://via.placeholder.com/150"
                  alt="Project 2 Mockup"
                  className="w-full h-auto"
                />
              </div>
              <img
                src="https://via.placeholder.com/300"
                alt="Hover Image"
                className="absolute top-0 left-0 w-full h-full object-cover transition-opacity duration-500 ease-in-out opacity-0 group-hover:opacity-100"
              />
            </Link>

            <Link
              to={"/"}
              className="col-span-1 bg-green-100 h-80 px-6 overflow-hidden relative group"
            >
              <div className="p-3 z-10 relative">
                <p className="name m-0 mb-3 py-2">Project 3</p>
                <img
                  src="https://via.placeholder.com/150"
                  alt="Project 3 Mockup"
                  className="w-full h-auto"
                />
              </div>
              <img
                src="https://via.placeholder.com/300"
                alt="Hover Image"
                className="absolute top-0 left-0 w-full h-full object-cover transition-opacity duration-500 ease-in-out opacity-0 group-hover:opacity-100"
              />
            </Link>

            <Link
              to={"/"}
              className="col-span-1 bg-yellow-100 h-80 px-6 overflow-hidden relative group"
            >
              <div className="p-3 z-10 relative">
                <p className="name m-0 mb-3 py-2">Project 4</p>
                <img
                  src="https://via.placeholder.com/150"
                  alt="Project 4 Mockup"
                  className="w-full h-auto"
                />
              </div>
              <img
                src="https://via.placeholder.com/300"
                alt="Hover Image"
                className="absolute top-0 left-0 w-full h-full object-cover transition-opacity duration-500 ease-in-out opacity-0 group-hover:opacity-100"
              />
            </Link>

            <Link
              to={"/"}
              className="col-span-1 bg-purple-100 h-80 px-6 overflow-hidden relative group"
            >
              <div className="p-3 z-10 relative">
                <p className="name m-0 mb-3 py-2">Project 5</p>
                <img
                  src="https://via.placeholder.com/150"
                  alt="Project 5 Mockup"
                  className="w-full h-auto"
                />
              </div>
              <img
                src="https://via.placeholder.com/300"
                alt="Hover Image"
                className="absolute top-0 left-0 w-full h-full object-cover transition-opacity duration-500 ease-in-out opacity-0 group-hover:opacity-100"
              />
            </Link>

            <Link
              to={"/"}
              className="col-span-1 bg-pink-100 h-80 px-6 overflow-hidden relative group"
            >
              <div className="p-3 z-10 relative">
                <p className="name m-0 mb-3 py-2">Project 6</p>
                <img
                  src="https://via.placeholder.com/150"
                  alt="Project 6 Mockup"
                  className="w-full h-auto"
                />
              </div>
              <img
                src="https://via.placeholder.com/300"
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
