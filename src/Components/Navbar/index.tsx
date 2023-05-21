import React, { useState } from "react";
import { motion } from "framer-motion";
import { tabs } from "./tabs";
import Image from "next/image";
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
    <nav className="w-full center">
      <div className="content flex flex-wrap items-center justify-between py-4">
        <a href="https://Merlin.com/" className="flex items-center">
          <Image
            src="/Merlin/Logo-w.png"
            width={130}
            height={130}
            alt="Merlin Logo"
          />
        </a>
        <ul className="flex gap-x-6 text-xs">
          {tabs.map((tab) => (
            <li key={tab.name}>
              <a
                href={tab.path}
                className="py-2 pl-3 pr-4 text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 "
              >
                {tab.name}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
