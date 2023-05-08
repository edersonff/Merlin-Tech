import React, { useState } from "react";
import { motion } from "framer-motion";
import { tabs } from "./tabs";
export default function Navbar() {
  const [showSidebar, setShowSidebar] = useState(false);
  const [windowWidth, setWindowWidth] = useState(0);

  React.useEffect(() => {
    setWindowWidth(window.innerWidth);
  }, []);

  const toggleSidebar = () => {
    setShowSidebar(!showSidebar);
  };

  return (
    <nav className="bg-white/50 sticky w-full z-20 top-0 left-0 border-b border-gray-200 backdrop-blur-md">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <a href="https://Merlin.com/" className="flex items-center">
          <img src="/Merlin/Logo.png" className="h-8 mr-3" alt="Merlin Logo" />
        </a>
        <div className="flex md:order-2">
          <button
            type="button"
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center mr-3 md:mr-0 "
          >
            Vamos lá
          </button>
          <button
            data-collapse-toggle="navbar-sticky"
            type="button"
            className="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
            aria-controls="navbar-sticky"
            aria-expanded="false"
            onClick={toggleSidebar}
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-6 h-6"
              aria-hidden="true"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                clip-rule="evenodd"
              ></path>
            </svg>
          </button>
        </div>
        <motion.div
          className={
            "items-center justify-between w-full md:flex md:w-auto md:order-1 md:flex-grow md:ml-10 md:pr-0 md:space-x-8 overflow-hidden " +
            (showSidebar ? "flex" : "hidden")
          }
          animate={{ height: showSidebar || windowWidth > 768 ? "auto" : 0 }}
        >
          <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg md:flex-row md:space-x-8 md:mt-0 md:border-0 justify-center">
            {tabs.map((tab) => (
              <li key={tab.name}>
                <a
                  href={tab.path}
                  className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 "
                >
                  {tab.name}
                </a>
              </li>
            ))}
          </ul>
        </motion.div>
      </div>
    </nav>
  );
}
