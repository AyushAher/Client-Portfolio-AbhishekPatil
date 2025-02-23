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
          <div className="flex  justify-around flex-wrap gap-2">
            <div className="w-[20rem] bg-black text-white rounded-3xl px-2">
              <Link to={"/project1"}>
                <div className="px-3 mt-3 pt-3 relative">
                  <div className="flex justify-center">
                    <img
                      src="/base-api.jpg"
                      alt="Project 2 Mockup"
                      className="w-40"
                    />
                  </div>
                  <p className=" m-0 mt-3 py-2 text-lg">
                    Clean Architecture Template
                  </p>
                </div>
              </Link>
            </div>
            <div className="w-[20rem] bg-black text-white rounded-3xl px-2">
              <Link to={"/project1"}>
                <div className="px-3 mt-3 pt-3 relative">
                  <div className="flex justify-center">
                    <img
                      src="/base-api.jpg"
                      alt="Project 2 Mockup"
                      className="w-40"
                    />
                  </div>
                  <p className=" m-0 mt-3 py-2 text-lg">Email Utility </p>
                </div>
              </Link>
            </div>
            <div className="w-[20rem] bg-black text-white rounded-3xl px-2">
              <Link to={"/project1"}>
                <div className="px-3 mt-3 pt-3 relative">
                  <div className="flex justify-center">
                    <img
                      src="/base-api.jpg"
                      alt="Project 2 Mockup"
                      className="w-40"
                    />
                  </div>
                  <p className=" m-0 mt-3 py-2 text-lg">YAML Processor</p>
                </div>
              </Link>
            </div>
            <div className="w-[20rem] bg-black text-white rounded-3xl px-2">
              <Link to={"/project1"}>
                <div className="px-3 mt-3 pt-3 relative">
                  <div className="flex justify-center">
                    <img
                      src="/base-api.jpg"
                      alt="Project 2 Mockup"
                      className="w-40"
                    />
                  </div>
                  <p className=" m-0 mt-3 py-2 text-lg">Secure JWT </p>
                </div>
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Work;
