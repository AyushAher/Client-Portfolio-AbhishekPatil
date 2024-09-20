import { SparklesIcon } from "@heroicons/react/16/solid";
import { ArrowUpRightIcon } from "@heroicons/react/24/outline";
import React from "react";

const About = () => {
  return (
    <div className="mt-16 mx-8">
      <section className="header pt-2 mb-12">
        <p className="flex items-center justify-start text-center mb-4">
          <span className="icon me-3">
            {<SparklesIcon className="h-4 w-4" />}
          </span>
          <span className="">Meet Abhishek</span>
        </p>
        <h1 className="text-5xl">About Me</h1>
      </section>

      <section className="mb-16">
        <div className="grid grid-cols-6">
          <div className="col-span-2">
            <img
              src="https://via.placeholder.com/400"
              alt="User image"
              className="w-full h-auto"
            />
          </div>
          <div className="col-span-4 flex flex-col justify-center items-start p-10">
            <div className="mb-8">
              <p className="mb-4">
                I'm Abhishek, a passionate web developer and software engineer
                with a relentless curiosity for technology and a drive to create
                impactful digital solutions. I've honed my skills in web
                development, and beyond, constantly expand my knowledge.
              </p>
              <p className="">
                My journey in the world of technology began with a fascination
                for coding and a desire to bring ideas to life in the digital
                realm.
              </p>
            </div>
            <div className="mb-16">
              <button className="collaborate bg-white px-6 py-3 flex justify-start items-center">
                <span className="me-4">LET'S COLLABORATE</span>
                <span className="icon">
                  {<ArrowUpRightIcon className="h-4 w-4" />}
                </span>
              </button>
            </div>
            <div className="grid grid-cols-3 gap-4 w-full">
              <div className="col-span-1">
                <div className="">
                  <p className="text-5xl mb-4">5+</p>
                  <p className="">Projects Completed</p>
                </div>
              </div>
              <div className="col-span-1">
                <div className="">
                  <p className="text-5xl mb-4">2+</p>
                  <p className="">Years Of Experience</p>
                </div>
              </div>
              <div className="col-span-1">
                <div className="">
                  <p className="text-5xl mb-4">4+</p>
                  <p className="">Ongoing Projects</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="header pt-2 mb-12">
        <p className="flex items-center justify-start text-center mb-4">
          <span className="icon me-3">
            {<SparklesIcon className="h-4 w-4" />}
          </span>
          <span className="">Tech Evolution</span>
        </p>
        <h1 className="text-5xl">Work Process</h1>
      </section>

      <section className="mb-16">
        <div className="grid grid-cols-3 gap-6">
          <div className="col-span-1 bg-white px-8 py-4">
            <h4 className="py-4 border-b text-xl">Discovery & Planning</h4>
            <p className="py-4">
              I immerse myself in understanding the project's objectives, target
              audience, and unique requirements.
            </p>
          </div>
          <div className="col-span-1 bg-white px-8 py-4">
            <h4 className="py-4 border-b text-xl">
              Development & Implementation
            </h4>
            <p className="py-4">
              I immerse myself in understanding the project's objectives, target
              audience, and unique requirements.
            </p>
          </div>
          <div className="col-span-1 bg-white px-8 py-4">
            <h4 className="py-4 border-b text-xl">Testing & Deployment</h4>
            <p className="py-4">
              From functional assessments to usability checks, to ensure the
              project meets the highest standards.
            </p>
          </div>
        </div>
      </section>

      <section className="header pt-2 mb-12">
        <p className="flex items-center justify-start text-center mb-4">
          <span className="icon me-3">
            {<SparklesIcon className="h-4 w-4" />}
          </span>
          <span className="">Our Services</span>
        </p>
        <h1 className="text-5xl">What I Do</h1>
      </section>

      <section className="border mb-12">
        <div className="p-8 border-b flex items-center justify-between">
          <p className="text-3xl">Dot Net Development</p>
          <span className="icon p-2 bg-white rounded-full">
            {<ArrowUpRightIcon className="h-4 w-4" />}
          </span>
        </div>
        <div className="p-8 border-b flex items-center justify-between">
          <p className="text-3xl">AWS Integration</p>
          <span className="icon p-2 bg-white rounded-full">
            {<ArrowUpRightIcon className="h-4 w-4" />}
          </span>
        </div>
        <div className="p-8 border-b flex items-center justify-between">
          <p className="text-3xl">Full Stack Development</p>
          <span className="icon p-2 bg-white rounded-full">
            {<ArrowUpRightIcon className="h-4 w-4" />}
          </span>
        </div>
      </section>
    </div>
  );
};

export default About;
