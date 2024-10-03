import { SparklesIcon } from "@heroicons/react/16/solid";
import React from "react";

const Experience = () => {
  return (
    <div className="mt-16 mx-8">
      <section className="header pt-2 mb-8">
        <p className="flex items-center justify-start text-center mb-4">
          <span className="icon me-3">
            {<SparklesIcon className="h-4 w-4" />}
          </span>
          <span className="">My Story</span>
        </p>
        <h1 className="text-5xl">Experience</h1>
      </section>

      <section className="">
        <div className="grid grid-cols-5 w-full border-b py-4">
          <div className="col-span-5 md:col-span-1 p-4">
            <p className="">2023-Present</p>
          </div>
          <div className="col-span-5 md:col-span-4 p-4">
            <p className="mb-1">Dot Net Developer</p>
            <p className="mb-4">Jisa Softech</p>

            <p className="">
              Lead development team in creating custom web solutions for
              clients. Developed responsive websites using HTML, CSS,
              JavaScript, and WordPress. Collaborated with designers to
              implement pixel-perfect designs and optimize user experience.
              Managed project timelines and communicated progress to clients.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-5 w-full border-b py-4">
          <div className="col-span-5 md:col-span-1 p-4">
            <p className="">2022-2023</p>
          </div>
          <div className="col-span-5 md:col-span-4 p-4">
            <p className="mb-1">Dot Net Developer</p>
            <p className="mb-4">Persistant Systems</p>

            <p className="">
              Developed and maintained e-commerce websites using PHP, MySQL, and
              Laravel framework. Implemented custom features and enhancements to
              improve user experience and site performance. Collaborated with
              cross-functional teams including designers, marketers, and QA
              testers.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Experience;
