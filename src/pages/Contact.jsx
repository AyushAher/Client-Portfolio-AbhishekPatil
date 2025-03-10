import { SparklesIcon } from "@heroicons/react/16/solid";
import {
  ArrowUpRightIcon,
  AtSymbolIcon,
  PhoneIcon,
  UserCircleIcon,
} from "@heroicons/react/24/outline";
import React from "react";
import github from "../assets/github.png";
import linkedin from "../assets/linkedin.png";

const Contact = () => {
  return (
    <div className="mt-16 mx-8">
      <section className="header pt-2 mb-16">
        <p className="flex items-center justify-start text-center mb-4">
          <span className="icon me-3">
            {<SparklesIcon className="h-4 w-4" />}
          </span>
          <span className="">Meet Ayush</span>
        </p>
        <h1 className="text-4xl">Contact Me</h1>
      </section>

      <section className="mb-4">
        <div className="grid grid-cols-6 gap-12">
          <div className="col-span-8 xl:col-span-2 bg-white dark:bg-dark border p-8 w-full">
            <div className="flex flex-col justify-between items-start w-full h-full">
              <div className="mb-6">
                <p className="text-xl mb-2">Get in Touch</p>
                <p className="">Thank you for your time.</p>
              </div>
              <div className="w-full">
                <div className="w-full py-4 border-b">
                  <div className="flex flex-wrap gap-2 overflow-hidden justify-between items-center w-full">
                    <p className="email">Email</p>
                    <p>
                      <a
                        href="mailto:ayushaher118@gmail.com"
                        className="text-ellipsis"
                      >
                        ayushaher118@gmail.com
                      </a>
                      <br />
                      <a
                        href="mailto:developers.ramson@gmail.com"
                        className="text-ellipsis"
                      >
                        developers.ramson@gmail.com
                      </a>
                    </p>
                  </div>
                </div>
                <div className=" w-full py-4 border-b">
                  <div className="flex flex-wrap gap-2 overflow-hidden justify-between items-center w-full">
                    <p className="email">Phone no.</p>
                    <a href="tel:+91 8237482904" className="">
                      +91-8237482904
                    </a>
                  </div>
                </div>
                <div className="w-full py-4 border-b">
                  <div className="flex flex-wrap gap-2 overflow-hidden justify-between items-center w-full">
                    <p className="email">Let's Connect</p>
                    <div className="flex items-center justify-center gap-2">
                      <a href="https://github.com/AyushAher" className="">
                        <img src={github} alt="github" width={32} height={32} />
                      </a>
                      <a
                        href="https://www.linkedin.com/in/ayushaher118/"
                        className=""
                      >
                        <img
                          src={linkedin}
                          alt="github"
                          width={32}
                          height={32}
                        />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-span-4 xl:col-span-4">
            <form action="">
              <h3 className="text-2xl mb-8">Send a message</h3>
              <div className="relative w-full">
                <UserCircleIcon className="absolute left-2 top-[1.25em] transform -translate-y-1/2 h-6 w-6 text-gray-400" />
                <input
                  type="text"
                  name=""
                  id=""
                  className="w-full h-10 mb-6 ps-12 bg-transparent border-b border-black focus-visible:outline-none"
                  placeholder="Full Name"
                />
              </div>
              <div className="flex flex-nowrap md:flex-wrap xl:flex-nowrap items-center justify-between gap-x-6 mb-6">
                <div className="relative w-full">
                  <AtSymbolIcon className="absolute left-2 top-[1.25em] transform -translate-y-1/2 h-6 w-6 text-gray-400" />
                  <input
                    type="Email"
                    name=""
                    id=""
                    className="w-full h-10 mb-6 ps-12 bg-transparent border-b border-black focus-visible:outline-none"
                    placeholder="Email"
                  />
                </div>
                <div className="relative w-full">
                  <PhoneIcon className="absolute left-2 top-[1.25em] transform -translate-y-1/2 h-6 w-6 text-gray-400" />
                  <input
                    type="tel"
                    name=""
                    id=""
                    className="w-full h-10 mb-6 ps-12 bg-transparent border-b border-black focus-visible:outline-none"
                    placeholder="7760710432"
                  />
                </div>
              </div>
              <textarea
                name=""
                id="desc"
                rows={6}
                placeholder="Write your message here"
                className="w-full mb-6 px-4 bg-transparent border-b border-black focus-visible:outline-none resize-none h-auto"
              ></textarea>

              <button className="group bg-white dark:bg-dark dark:text-light-text py-2 ps-4 pe-2 flex justify-start items-center border rounded-full">
                <span className="me-3">Submit</span>
                <span className="icon  p-1 bg-black dark:bg-white dark:text-black rounded-full relative h-6 w-6 overflow-hidden">
                  <ArrowUpRightIcon className="h-4 w-4 text-white dark:text-black  transition-transform duration-300 ease-in-out transform group-hover:translate-x-4 group-hover:-translate-y-4" />
                  <ArrowUpRightIcon className="absolute  text-white dark:text-black -left-4 top-full h-4 w-4  transition-transform duration-300 ease-in-out transform group-hover:translate-x-5 group-hover:-translate-y-5" />
                </span>
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
