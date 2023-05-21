import { MagnifyingGlassIcon } from "@heroicons/react/20/solid";
import React from "react";

export default function HomeSearch() {
  return (
    <div className="w-full center">
      <div className="content flex items-center shadow-[5px_5px_0px_0px_#646464] border border-gray-500 rounded-full bg-white px-8 py-4 gap-x-7">
        <MagnifyingGlassIcon className="h-8 w-8" />
        <span className="text-xl lg:text-3xl font-light">Empreender é </span>
        <span className="text-xl lg:text-3xl font-bold">
          solucionar problemas
        </span>
      </div>
    </div>
  );
}
