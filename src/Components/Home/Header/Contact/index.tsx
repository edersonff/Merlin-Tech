import React from "react";
import {
  XCircleIcon as XCircleIconSolid,
  MapPinIcon,
  ChatBubbleOvalLeftIcon,
} from "@heroicons/react/20/solid";

export default function HeaderContact() {
  return (
    <div className="w-full p-2 center text-white">
      <div
        className="flex items-center justify-end gap-4 content"
        style={{
          fontSize: "0.65rem",
        }}
      >
        <div className="flex items-center justify-center">
          <ChatBubbleOvalLeftIcon className="h-4 w-4" />
          <span className="ml-2">+55 11 99999-9999</span>
        </div>
        <div className="flex items-center justify-center ml-4">
          <MapPinIcon className="h-4 w-4" />
          <span className="ml-2">Willy Dorow 29, Rau, Jaraguá do Sul</span>
        </div>
      </div>
    </div>
  );
}
