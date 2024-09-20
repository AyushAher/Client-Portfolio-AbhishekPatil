import { SparklesIcon } from "@heroicons/react/16/solid";
import React from "react";

const Contact = () => {
  return (
    <div className="mt-16 mx-8">
      <section className="header pt-2 mb-8">
        <p className="flex items-center justify-start text-center mb-4">
          <span className="icon me-3">
            {<SparklesIcon className="h-4 w-4" />}
          </span>
          <span className="">Meet Abhishek</span>
        </p>
        <h1 className="text-4xl">About Me</h1>
      </section>

      <section className="">
        <div className="grid grid-cols-5 gap-8">
          <div className="col-span-1 bg-white border p-8">
            <div className="flex flex-col justify-between items-start">
              <p className="Contact Details"></p>

              <div className="">
                <p className="">
                  <span className="email">EMAIL</span>
                  <a href="mailto:abhishekpatil@gmail.com" className=""></a>
                </p>
              </div>
            </div>
          </div>
          <div className="col-span-4"></div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
