import { SparklesIcon } from "@heroicons/react/24/solid";

import React from "react";
import { ArrowUpRightIcon } from "@heroicons/react/24/outline";

const Project2 = () => {
  return (
    <>
      <div className="mt-16 mx-8">
        <section className="header pt-2 mb-16">
          <p className="flex items-center justify-start text-center mb-4">
            <span className="icon me-3">
              {<SparklesIcon className="h-4 w-4" />}
            </span>
            <span className="">Ecommerce</span>
          </p>
          <h1 className="text-5xl">Project 1</h1>
        </section>

        <section className="">
          <div className="w-full h-[640px] px-24 pt-24 bg-blue-100 overflow-hidden ">
            <img
              src="http://via.placeholder.com/1280x720"
              alt="Project 1 Mockup"
              className="w-full h-auto"
            />
          </div>

          <div className="flex items-start justify-between my-6">
            <div className="flex justify-start items-start gap-4">
              <p className="">
                <span className="block font-medium mb-2">Client</span>
                <span className="">Self</span>
              </p>
              <p className="">
                <span className="block font-medium mb-2">Tools</span>
                <span className="">.Net-MVC, Full-Stack </span>
              </p>
              <p className="">
                <span className="block font-medium mb-2">Year</span>
                <span className="">2024</span>
              </p>
            </div>
            <a href="">
              <button className="bg-white group py-2 ps-4 pe-2 flex justify-start items-center border rounded-full">
                <span className="me-4">VISIT WEBSITE</span>
                <span className="icon  p-1 bg-black rounded-full relative h-6 w-6 overflow-hidden">
                  <ArrowUpRightIcon className="h-4 w-4 text-white transition-transform duration-300 ease-in-out transform group-hover:translate-x-4 group-hover:-translate-y-4" />
                  <ArrowUpRightIcon className="absolute -left-4 top-full h-4 w-4 text-white transition-transform duration-300 ease-in-out transform group-hover:translate-x-5 group-hover:-translate-y-5" />
                </span>
              </button>
            </a>
          </div>

          <div className="mb-12">
            <p className="">
              <span className="block font-medium mb-2">Project Overview</span>
              <span className="">
                We are committed to delivering innovative solutions that empower
                businesses to thrive in today's digital landscape.Our project
                aims to revolutionize the way organizations operate, leveraging
                cutting-edge technology and strategic insights to drive
                sustainable growth and success.
              </span>
            </p>
          </div>
        </section>
      </div>
    </>
  );
};

export default Project2;
