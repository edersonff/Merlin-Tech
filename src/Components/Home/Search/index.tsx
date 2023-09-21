import { MagnifyingGlassIcon } from "@heroicons/react/20/solid";
import React, { useEffect, useRef, useState } from "react";
import { searchData } from "./data";
import SearchItem from "./Item";

export default function HomeSearch() {
  const [currentWord, setCurrentWord] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      if (currentWord === searchData.length - 1) {
        setCurrentWord(0);
      } else {
        setCurrentWord((prev) => prev + 1);
      }
    }, 2000);

    return () => {
      clearInterval(interval);
    };
  }, [currentWord]);

  return (
    <div className="w-full center">
      <div className="content relative top-0 left-0 flex transition-all shadow-[5px_5px_0px_0px_#646464] border border-gray-500 rounded-full bg-white px-8 py-4 gap-x-7 overflow-hidden search-home">
        <MagnifyingGlassIcon className="h-8 w-8" />
        <span className="text-xl lg:text-3xl font-light">
          Entrepreneurship is{" "}
        </span>
        <div className="relative center h-full flex-1">
          {searchData.map((word, index) => (
            <SearchItem
              key={index}
              word={word}
              isCurrent={index === currentWord}
              isLast={
                index ===
                (currentWord === 0 ? searchData.length - 1 : currentWord - 1)
              }
            />
          ))}
        </div>
      </div>
    </div>
  );
}
