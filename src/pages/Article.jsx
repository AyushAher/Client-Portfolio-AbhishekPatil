import { SparklesIcon } from "@heroicons/react/16/solid";
import { ArrowUpRightIcon } from "@heroicons/react/24/outline";
import React from "react";

const Article = () => {
  let array = [
    {
      title: "Secure JWT",
      date: "February 23, 2025",
      link: "https://www.linkedin.com/pulse/secure-jwt-ayush-aher-v89df/?trackingId=LkuNVLWIRDSBXoZ5Z1IbZg%3D%3D",
    },
    {
      title: "AngularJS vs. Angular: A Tale of Two Frameworks",
      date: "June 24, 2024",
      link: "https://www.linkedin.com/pulse/angularjs-vs-angular-tale-two-frameworks-ayush-aher-rxumf/?trackingId=NXGkRcPISwKlEeXTHhaHdg%3D%3D",
    },
    {
      title: "OpenVPN: Secure Remote Access to Home Lab",
      date: "June 16, 2024",
      link: "https://www.linkedin.com/pulse/openvpn-secure-remote-access-home-lab-ayush-aher-xnwqf/?trackingId=NXGkRcPISwKlEeXTHhaHdg%3D%3D",
    },
    {
      title:
        ".NET Dev Showdown: Docker Swarm vs. Kubernetes for Containerized Apps",
      date: "May 11, 2024",
      link: "https://www.linkedin.com/pulse/net-dev-showdown-docker-swarm-vs-kubernetes-apps-ayush-aher-ftmnf/?trackingId=NXGkRcPISwKlEeXTHhaHdg%3D%3D",
    },
    {
      title:
        "Establishing a Secure Multi-User Environment on Your Linux Server: Leveraging SSH Key Authentication",
      date: "April 23, 2024",
      link: "https://www.linkedin.com/pulse/establishing-secure-multi-user-environment-your-linux-ayush-aher-ofijf/?trackingId=NXGkRcPISwKlEeXTHhaHdg%3D%3D",
    },
    {
      title: "Level Up Your .NET Game: Must-Know Architecture Patterns",
      date: "April 20, 2024",
      link: "https://www.linkedin.com/pulse/level-up-your-net-game-must-know-architecture-patterns-ayush-aher-4hy0f/?trackingId=NXGkRcPISwKlEeXTHhaHdg%3D%3D",
    },
    {
      title: "Why Tech Consultants Rule the Digital Age",
      date: "April 17, 2024",
      link: "https://www.linkedin.com/pulse/why-tech-consultants-rule-digital-age-ayush-aher-ifq8f/?trackingId=NXGkRcPISwKlEeXTHhaHdg%3D%3D",
    },
  ];
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
          {array.map((x) => (
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

      {/* <div className="flex items-center justify-center">
        <button className="group bg-white py-2 ps-4 pe-2 flex justify-start items-center border rounded-full">
          <span className="me-3">Next</span>
          <span className="icon  p-1 bg-black rounded-full relative h-6 w-6 overflow-hidden">
            <ArrowUpRightIcon className="h-4 w-4 text-white  transition-transform duration-300 ease-in-out transform group-hover:translate-x-4 group-hover:-translate-y-4" />
            <ArrowUpRightIcon className="absolute  text-white -left-4 top-full h-4 w-4  transition-transform duration-300 ease-in-out transform group-hover:translate-x-5 group-hover:-translate-y-5" />
          </span>
        </button>
      </div> */}
    </div>
  );
};

export default Article;
