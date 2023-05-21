import {
  BuildingOfficeIcon,
  ComputerDesktopIcon,
  CpuChipIcon,
  DevicePhoneMobileIcon,
  PhoneIcon,
} from "@heroicons/react/20/solid";
import React from "react";

export default function ThreeDItems() {
  return (
    <div className="flex justify-between">
      <ThreeItem>
        <DevicePhoneMobileIcon className="w-12 h-12" />
      </ThreeItem>
      <ThreeItem>
        <ComputerDesktopIcon className="w-12 h-12" />
      </ThreeItem>
      <ThreeItem>
        <CpuChipIcon className="w-12 h-12" />
      </ThreeItem>
      <ThreeItem>
        <BuildingOfficeIcon className="w-12 h-12" />
      </ThreeItem>
    </div>
  );
}

export function ThreeItem({ children }: { children: React.ReactNode }) {
  return (
    <button
      id="teste"
      className="w-20 h-20 relative hover:bg-white/20 transition-all duration-300"
    >
      <img
        className="w-full h-full object-cover object-center absolute top-0 left-0 -z-10"
        onDragStart={(e) => e.preventDefault()}
        src={"/Images/Visual/UnlinedCircle.svg"}
        alt="Unlined-Circle"
      />
      <div className="w-full h-full flex items-center justify-center">
        {children}
      </div>
    </button>
  );
}
