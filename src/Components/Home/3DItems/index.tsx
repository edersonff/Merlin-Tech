import Phone from "@/Components/Geral/3D/Phone";
import {
  BuildingOfficeIcon,
  ComputerDesktopIcon,
  CpuChipIcon,
  DevicePhoneMobileIcon,
  PhoneIcon,
} from "@heroicons/react/20/solid";
import React, { useState } from "react";

export default function ThreeDItems() {
  const [showItem, setShowItem] = useState(-1);

  const handleDimiss = () => {
    setShowItem(-1);
  };

  const handleSetItem = (index: number) => {
    return () => {
      setShowItem(index);
    };
  };

  return (
    <div className="flex justify-between">
      <div className="absolute left-0 w-full">
        <div className="relative w-full">
          <Phone show={showItem === 0} />
        </div>
      </div>
      <ThreeItem onMouseEnter={handleSetItem(0)}>
        <DevicePhoneMobileIcon className="w-12 h-12" />
      </ThreeItem>
      <ThreeItem onMouseEnter={handleSetItem(1)}>
        <ComputerDesktopIcon className="w-12 h-12" />
      </ThreeItem>
      <ThreeItem onMouseEnter={handleSetItem(2)}>
        <CpuChipIcon className="w-12 h-12" />
      </ThreeItem>
      <ThreeItem onMouseEnter={handleSetItem(3)}>
        <BuildingOfficeIcon className="w-12 h-12" />
      </ThreeItem>
    </div>
  );
}

export function ThreeItem({
  children,
  ...rest
}: { children: React.ReactNode } & React.HTMLAttributes<HTMLButtonElement>) {
  return (
    <button
      id="teste"
      className="w-20 h-20 relative hover:bg-white/20 transition-all duration-300 select-none"
      {...rest}
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
