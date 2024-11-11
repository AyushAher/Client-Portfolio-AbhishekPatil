import { SparklesIcon } from "@heroicons/react/16/solid";
import { ArrowUpRightIcon } from "@heroicons/react/24/outline";
import React from "react";
import { Link } from "react-router-dom";
import me from "../assets/me.jpg";

const About = () => {
  let skillsArray = [
    "Dotnet Development",
    "AWS",
    "Docker",
    "Swarm",
    "Kubernetes",
    "React(TS/JS)",
    "Bootstrap",
    "Angular",
    "Project Management",
    "Team Leader",
    "Mentoring",
    "PostgreSQL",
    "MYSQL",
    "Linux",
    "Windows Server",
  ];
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
          <div className="col-span-6 md:col-span-2">
            <img src={me} alt="User image" className="w-full h-auto" />
          </div>
          <div className="col-span-6 md:col-span-4 flex flex-col justify-center items-start my-8 md:my-0 md:mx-8">
            <div className="mb-8">
              <p className="mb-4">
                With 4 years in full-stack development, I have honed a broad
                skill set for managing complex software projects. My technical
                expertise spans .NET Core, React, Angular, TypeScript, basic
                Python, Linux, MySQL, and PostgreSQL, equipping me to build and
                deploy tailored, high-performance solutions. Skilled in version
                control (Git/GitHub), CI/CD pipelines, Docker deployment, and
                clean architecture, I ensure scalable, top-quality codebases.
                Proficient in Bootstrap, I design responsive interfaces that
                work seamlessly across platforms and handle data complexities
                efficiently with MySQL and PostgreSQL.
              </p>
              <p>
                I thrive in collaborative settings, aligning technical solutions
                with business goals to achieve impactful outcomes. Committed to
                continuous learning, I stay updated on emerging technologies,
                combining technical skill with adaptability and problem-solving.
                My approach emphasizes innovation and excellence, making me a
                valuable contributor in dynamic software development
                environments.
              </p>
            </div>
            <div className="mb-16">
              <Link to="/contact">
                <button className="bg-white group py-2 ps-4 pe-2 flex justify-start items-center border rounded-full">
                  <span className="me-4">LET'S COLLABORATE</span>
                  <span className="icon  p-1 bg-black rounded-full relative h-6 w-6 overflow-hidden">
                    <ArrowUpRightIcon className="h-4 w-4 text-white transition-transform duration-300 ease-in-out transform group-hover:translate-x-4 group-hover:-translate-y-4" />
                    <ArrowUpRightIcon className="absolute -left-4 top-full h-4 w-4 text-white transition-transform duration-300 ease-in-out transform group-hover:translate-x-5 group-hover:-translate-y-5" />
                  </span>
                </button>
              </Link>
            </div>
            <div className="grid grid-cols-3 gap-4 w-full">
              <div className="col-span-3 md:col-span-1">
                <div className="flex items-center justify-start gap-4 md:block">
                  <p className="text-5xl mb-4">7+</p>
                  <p className="mb-4 md:mb-0">Projects Completed</p>
                </div>
              </div>
              <div className="col-span-3 md:col-span-1">
                <div className="flex items-center justify-start gap-4 md:block">
                  <p className="text-5xl mb-4">3+</p>
                  <p className="mb-4 md:mb-0">Years Of Experience</p>
                </div>
              </div>
              <div className="col-span-3 md:col-span-1">
                <div className="flex items-center justify-start gap-4 md:block">
                  <p className="text-5xl mb-4">2+</p>
                  <p className="mb-4 md:mb-0">Ongoing Projects</p>
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
          <div className="col-span-3 md:col-span-1 bg-white px-8 py-4">
            <h4 className="py-4 border-b text-xl">Discovery & Planning</h4>
            <p className="py-4">
              I immerse myself in understanding the project's objectives, target
              audience, and unique requirements.
            </p>
          </div>
          <div className="col-span-3 md:col-span-1 bg-white px-8 py-4">
            <h4 className="py-4 border-b text-xl">
              Development & Implementation
            </h4>
            <p className="py-4">
              I immerse myself in understanding the project's objectives, target
              audience, and unique requirements.
            </p>
          </div>
          <div className="col-span-3 md:col-span-1 bg-white px-8 py-4">
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
        {skillsArray.map((skill) => (
          <div className="group p-8 border-b flex items-center justify-between">
            <p className="text-3xl">{skill}</p>
            <span className="icon  p-1 bg-white rounded-full relative h-6 w-6 overflow-hidden">
              <ArrowUpRightIcon className="h-4 w-4  transition-transform duration-300 ease-in-out transform group-hover:translate-x-4 group-hover:-translate-y-4" />
              <ArrowUpRightIcon className="absolute -left-4 top-full h-4 w-4  transition-transform duration-300 ease-in-out transform group-hover:translate-x-5 group-hover:-translate-y-5" />
            </span>
          </div>
        ))}
      </section>

      <section className="header pt-2 mb-12">
        <p className="flex items-center justify-start text-center mb-4">
          <span className="icon me-3">
            {<SparklesIcon className="h-4 w-4" />}
          </span>
          <span className="">My Skills</span>
        </p>
        <h1 className="text-5xl">What I am good at</h1>
      </section>

      <section className="border mb-12">
        {skillsArray.map((skill) => (
          <div className="group p-8 border-b flex items-center justify-between">
            <p className="text-3xl">{skill}</p>
            <span className="icon  p-1 bg-white rounded-full relative h-6 w-6 overflow-hidden">
              <ArrowUpRightIcon className="h-4 w-4  transition-transform duration-300 ease-in-out transform group-hover:translate-x-4 group-hover:-translate-y-4" />
              <ArrowUpRightIcon className="absolute -left-4 top-full h-4 w-4  transition-transform duration-300 ease-in-out transform group-hover:translate-x-5 group-hover:-translate-y-5" />
            </span>
          </div>
        ))}
      </section>
    </div>
  );
};

export default About;
