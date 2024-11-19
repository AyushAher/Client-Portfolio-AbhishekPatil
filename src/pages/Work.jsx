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
          <div className="grid grid-cols-3 gap-2">
            <Link
              to={"/project1"}
              className="col-span-4 sm:col-span-2 xl:col-span-1 bg-black text-white rounded-3xl px-6 overflow-hidden relative group"
            >
              <div className="px-3 pt-3 relative">
                <p className="name m-0 mb-3 py-2 text-lg">
                  Clean Architecture Template
                </p>
                <img
                  src="https://avatars.githubusercontent.com/u/142732832?s=200&v=4"
                  alt="Project 2 Mockup"
                  className="w-80"
                />
              </div>
              <img
                src="https://avatars.githubusercontent.com/u/142732832?s=200&v=4"
                alt="Hover Image"
                className="absolute top-0 left-0 bg-black w-80 object-cover transition-opacity duration-500 ease-in-out opacity-0 group-hover:opacity-100"
              />
            </Link>
            <Link
              to={"/project1"}
              className="col-span-4 sm:col-span-2 xl:col-span-1 bg-black text-white rounded-3xl px-6 overflow-hidden relative group"
            >
              <div className="px-3 pt-3 relative">
                <p className="name m-0 mb-3 py-2 text-lg">Email Utility </p>
                <img
                  src="https://avatars.githubusercontent.com/u/142732832?s=200&v=4"
                  alt="Project 2 Mockup"
                  className="w-80"
                />
              </div>
              <img
                src="https://avatars.githubusercontent.com/u/142732832?s=200&v=4"
                alt="Hover Image"
                className="absolute top-0 left-0 bg-black w-80 object-cover transition-opacity duration-500 ease-in-out opacity-0 group-hover:opacity-100"
              />
            </Link>
            <Link
              to={"/project1"}
              className="col-span-4 sm:col-span-2 xl:col-span-1 bg-black text-white rounded-3xl px-6 overflow-hidden relative group"
            >
              <div className="px-3 pt-3 relative">
                <p className="name m-0 mb-3 py-2 text-lg">YAML processor</p>
                <img
                  src="https://avatars.githubusercontent.com/u/142732832?s=200&v=4"
                  alt="Project 2 Mockup"
                  className="w-80"
                />
              </div>
              <img
                src="https://avatars.githubusercontent.com/u/142732832?s=200&v=4"
                alt="Hover Image"
                className="absolute top-0 left-0 bg-black w-80 object-cover transition-opacity duration-500 ease-in-out opacity-0 group-hover:opacity-100"
              />
            </Link>
          </div>
        </section>
      </div>
    </>
  );
};

export default Work;
