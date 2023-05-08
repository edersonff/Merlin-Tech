import React from "react";
import { motion } from "framer-motion";
import { NavbarListProps } from "./types";
import { tabs } from "../tabs";

export default function ListNavbar({ isVisibleSidebar }: NavbarListProps) {
  return (
    <motion.div
      className={
        "items-center justify-between w-full md:flex md:w-auto md:order-1 md:flex-grow md:ml-10 md:pr-0 md:space-x-8 overflow-hidden " +
        (isVisibleSidebar ? "flex" : "hidden")
      }
      animate={{ height: isVisibleSidebar ? "auto" : 0 }}
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
  );
}
