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
            <p className="">2024-Present</p>
          </div>
          <div className="col-span-5 md:col-span-4 p-4">
            <p className="mb-1">Sr. Dotnet Developer - Dotnet</p>
            <p className="mb-4">Jisa Softech</p>

            <p className="">
              Experienced in leading and mentoring junior developers, designing
              and implementing complex solutions, and ensuring high-quality
              coding standards through code reviews. Skilled in identifying and
              resolving technical challenges, meeting deadlines, and aligning
              solutions with client requirements. Strong collaborator with
              management and cross-functional teams, promoting clear
              communication and fostering a positive, growth-oriented team
              environment. Expertise includes modernizing codebases, developing
              scalable code, implementing CI/CD processes, and using Kubernetes,
              Docker, and AWS. Regularly document processes and technical
              methodologies and provide technical guidance to support long-term
              project stability and success.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-5 w-full border-b py-4">
          <div className="col-span-5 md:col-span-1 p-4">
            <p className="">2023-2024</p>
          </div>
          <div className="col-span-5 md:col-span-4 p-4">
            <p className="mb-1">Jr. Software Enginner</p>
            <p className="mb-4">Cohort Technologies</p>
            <p className="">
              Experienced in projects like School ERP and custom CRMs, utilizing
              technologies such as React, .NET Core, PostgreSQL, SQL Server, and
              .NET MVC. Improved performance by optimizing front-end assets to
              reduce load times and implemented CI pipelines for automated
              testing and deployment. Modernized legacy code for better
              architecture and maintainability, managed Windows servers, and
              oversaw GitHub repository standards, including branching
              strategies and coding practices. Proficient in establishing and
              maintaining codebases aligned with clean architecture principles.
            </p>
          </div>
        </div>
        <div className="grid grid-cols-5 w-full border-b py-4">
          <div className="col-span-5 md:col-span-1 p-4">
            <p className="">2021-2023</p>
          </div>
          <div className="col-span-5 md:col-span-4 p-4">
            <p className="mb-1">Jr. Web Developer </p>
            <p className="mb-4">Freelancer</p>
            <p className="">
              Specialized in analyzing clients' business processes to identify
              improvement opportunities and develop customized solutions.
              Collaborated with cross-functional teams to design and implement
              systems and technologies that enhance efficiency and productivity.
              Managed multiple IT projects simultaneously, ensuring timely,
              high-quality delivery within budget.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Experience;
