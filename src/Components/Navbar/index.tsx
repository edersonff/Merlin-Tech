import React, { useCallback, useEffect, useState } from "react";
import { tabs } from "./tabs";
import Image from "next/image";
import { useRouter } from "next/router";
import Link from "next/link";
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
      <div className="content flex lg:flex-row flex-col flex-wrap items-center lg:justify-between justify-center py-4 screen-p gap-y-4">
        <Link
          href="/"
          className="flex items-center text-primary text-base font-extrabold font-['Montserrat'] tracking-wide"
        >
          Merlin
        </Link>
        <div className="center uppercase text-[9px] font-bold">
          <NavbarTabs />
          <a
            href="#contact-us"
            className="text-primary opacity-50 ml-7 p-2.5 px-6 rounded-[5px] border border-black border-opacity-30"
          >
            Contact Us
          </a>
        </div>
      </div>
    </nav>
  );
}

export function NavbarTabs() {
  const routename = useRouter().pathname;

  const className = useCallback(
    (path: string) => {
      if (routename === path) {
        return "";
      }
      return "opacity-50";
    },
    [routename]
  );

  return (
    <ul className="flex gap-x-5">
      {tabs.map((tab) => (
        <a
          key={tab.name}
          href={tab.path}
          className={
            "py-2 lg:pl-3 lg:pr-4 rounded md:p-0 relative text-primary " +
            className(tab.path)
          }
        >
          {tab.name}
          {routename === tab.path && (
            <div className="absolute rounded-full h-1 w-1 bg-primary -bottom-3 left-1/2 transform -translate-x-1/2" />
          )}
        </a>
      ))}
    </ul>
  );
}
