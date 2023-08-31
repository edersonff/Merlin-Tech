import React from "react";
import {
  XCircleIcon as XCircleIconSolid,
  MapPinIcon,
  ChatBubbleOvalLeftIcon,
} from "@heroicons/react/20/solid";
import Link from "next/link";

export default function HeaderContact() {
  return (
    <div className="w-full p-2 center text-white">
      <div
        className="flex items-center justify-end gap-4 content"
        style={{
          fontSize: "0.65rem",
        }}
      >
        <Link
          href="https://api.whatsapp.com/send?phone=5547996556538&text=Ol%C3%A1%2C%20gostaria%20de%20saber%20mais%20sobre%20os%20servi%C3%A7os%20da%20empresa."
          passHref
          target="_blank"
          className="flex items-center justify-center"
        >
          <ChatBubbleOvalLeftIcon className="h-4 w-4" />
          <span className="ml-2">47 99655-6538</span>
        </Link>
        <div className="flex items-center justify-center ml-4">
          <MapPinIcon className="h-4 w-4" />
          <span className="ml-2">Willy Dorow 29, Rau, Jaraguá do Sul</span>
        </div>
      </div>
    </div>
  );
}
