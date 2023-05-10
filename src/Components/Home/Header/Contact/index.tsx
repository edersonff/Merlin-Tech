import React from "react";
import {
  PhoneIcon,
  RocketLaunchIcon,
  ShieldCheckIcon,
  UserGroupIcon,
  ViewGridIcon,
  XIcon,
  XCircleIcon,
  XCircleIcon as XCircleIconSolid,
} from "@heroicons/react/20/solid";

export default function HeaderContact() {
  return (
    <div className="w-full p-2 bg-white border-b border-gray-200">
      <div
        className="flex items-center justify-center gap-4"
        style={{
          fontSize: "0.75rem",
        }}
      >
        <div className="flex items-center justify-center">
          <PhoneIcon className="h-5 w-5 text-gray-400" />
          <span className="ml-2 text-gray-400">+55 11 99999-9999</span>
        </div>
        <div className="flex items-center justify-center ml-4">
          <RocketLaunchIcon className="h-5 w-5 text-gray-400" />
          <span className="ml-2 text-gray-400">@merliny</span>
        </div>
      </div>
    </div>
  );
}
