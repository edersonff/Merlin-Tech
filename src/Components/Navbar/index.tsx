import React, { useEffect, useState } from "react";
import { tabs } from "./tabs";
import Image from "next/image";
export default function Navbar() {
  const [showSidebar, setShowSidebar] = useState(false);
  const [windowWidth, setWindowWidth] = useState(0);

  useEffect(() => {
    setWindowWidth(window.innerWidth);
  }, []);

  const toggleSidebar = () => {
    setShowSidebar(!showSidebar);
  };

  return (
    <nav className="w-full center">
      <div className="content flex flex-wrap items-center justify-between py-4 screen-p gap-y-4">
        <a href="https://merlin.app.br/" className="flex items-center">
          <Image
            src="/merlin/Logo-w.png"
            width={130}
            height={130}
            alt="Merlin Logo"
            title="Merlin Logo"
            loading="eager"
          />
        </a>
        <ul className="flex gap-x-6 text-xs">
          {tabs.map((tab) => (
            <li key={tab.name}>
              <a
                href={tab.path}
                className="py-2 lg:pl-3 lg:pr-4 text-white rounded hover:text-purple-200 md:p-0 "
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
