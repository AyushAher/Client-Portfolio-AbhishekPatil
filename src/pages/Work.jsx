import { SparklesIcon } from "@heroicons/react/16/solid";
import React from "react";
import { ArrowUpRightIcon } from "@heroicons/react/24/outline";

const Work = () => {
  let array = [
    {
      title: "Secure JWT",
      date: "February 23, 2025",
      link: "https://github.com/Hyperspan/SecureJwt",
    },
    {
      title: "Clean Architecture Template",
      date: "March 25, 2024",
      link: "https://github.com/Hyperspan/Hyperspan.Base.Api",
    },
    {
      title: "Email Utility",
      date: "July 31, 2024",
      link: "https://github.com/Hyperspan/RamsonDevelopers.UtilEmail",
    },
    {
      title: "YAML Processor",
      date: "February 20, 2024",
      link: "https://github.com/AyushAher/Yaml_Processor",
    },
    {
      title: "Web design for Yoga Studio",
      date: "March 3, 2025",
      link: "/YOGA-Design.pdf",
    },
  ];
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

        <section className="mb-10">
          <div className="grid grid-cols-2 gap-6">
            {array
              .sort((a, b) => new Date(b.date) - new Date(a.date))
              .map((x) => (
                <div className="col-span-2 md:col-span-1 bg-white p-6  hover:outline hover:outline-1 hover:outline-gray-200">
                  <h4 className="articleName text-[20px] mb-2">{x.title}</h4>
                  <p className="date mb-8">{x.date}</p>
                  <a
                    href={x.link}
                    target="_blank"
                    className="group collaborate p-2 flex justify-start items-center border-b"
                  >
                    <span className="me-4">Read More</span>
                    <span className="icon  p-1 bg-white rounded-full relative h-6 w-6 overflow-hidden">
                      <ArrowUpRightIcon className="h-4 w-4  transition-transform duration-300 ease-in-out transform group-hover:translate-x-4 group-hover:-translate-y-4" />
                      <ArrowUpRightIcon className="absolute -left-4 top-full h-4 w-4  transition-transform duration-300 ease-in-out transform group-hover:translate-x-5 group-hover:-translate-y-5" />
                    </span>
                  </a>
                </div>
              ))}
          </div>
        </section>
      </div>
    </>
  );
};

export default Work;
