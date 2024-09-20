import { SparklesIcon } from "@heroicons/react/16/solid";
import { ArrowUpRightIcon } from "@heroicons/react/24/outline";
import React from "react";

const Article = () => {
  return (
    <div className="mt-16 mx-8">
      <section className="header pt-2 mb-8">
        <p className="flex items-center justify-start text-center mb-4">
          <span className="icon me-3">
            {<SparklesIcon className="h-4 w-4" />}
          </span>
          <span className="">Blogs</span>
        </p>
        <h1 className="text-4xl">Articles & Resources</h1>
      </section>

      <section className="mb-10">
        <div className="grid grid-cols-2 gap-6">
          <div className="col-span-1 bg-white p-6">
            <button className="border rounded-full p-2 px-6 mb-6">Auth</button>
            <h4 className="articleName text-[20px] mb-2">
              The Importance of website performance optimization
            </h4>
            <p className="date mb-8">May 8, 2024</p>
            <button className="collaborate p-2 flex justify-start items-center border-b">
              <span className="me-4">Read More</span>
              <span className="icon">
                {<ArrowUpRightIcon className="h-4 w-4" />}
              </span>
            </button>
          </div>
          <div className="col-span-1 bg-white p-6">
            <button className="border rounded-full p-2 px-6 mb-6">Auth</button>
            <h4 className="articleName text-[20px] mb-2">
              The Importance of website performance optimization
            </h4>
            <p className="date mb-8">May 8, 2024</p>
            <button className="collaborate p-2 flex justify-start items-center border-b">
              <span className="me-4">Read More</span>
              <span className="icon">
                {<ArrowUpRightIcon className="h-4 w-4" />}
              </span>
            </button>
          </div>
          <div className="col-span-1 bg-white p-6">
            <button className="border rounded-full p-2 px-6 mb-6">Auth</button>
            <h4 className="articleName text-[20px] mb-2">
              The Importance of website performance optimization
            </h4>
            <p className="date mb-8">May 8, 2024</p>
            <button className="collaborate p-2 flex justify-start items-center border-b">
              <span className="me-4">Read More</span>
              <span className="icon">
                {<ArrowUpRightIcon className="h-4 w-4" />}
              </span>
            </button>
          </div>
        </div>
      </section>

      <div className="flex items-center justify-center">
        <button className="bg-white py-2 ps-4 pe-2 flex justify-start items-center border rounded-full">
          <span className="me-3">Next</span>
          <span className="icon p-1 bg-black rounded-full">
            {<ArrowUpRightIcon className="h-4 w-4 text-white" />}
          </span>
        </button>
      </div>
    </div>
  );
};

export default Article;