import React from "react";

export default function HomeVertical() {
  return (
    <div className="bg-white h-60 overflow-hidden w-full">
      {/* Gallery */}
      <div className="grid grid-cols-5 gap">
        <div className="flex flex-col w-52 h-52 bg-slate-500 rounded-lg" />
        <div className="flex flex-col w-72 h-72 bg-slate-500 rounded-lg" />
        <div className="flex flex-col w-52 h-52 bg-slate-500 rounded-lg" />
        <div className="flex flex-col w-72 h-72 bg-slate-500 rounded-lg" />
        <div className="flex flex-col w-52 h-52 bg-slate-500 rounded-lg" />
        <div className="flex flex-col w-72 h-72 bg-slate-500 rounded-lg" />
        <div className="flex flex-col w-52 h-52 bg-slate-500 rounded-lg" />
        <div className="flex flex-col w-72 h-72 bg-slate-500 rounded-lg" />
        <div className="flex flex-col w-52 h-52 bg-slate-500 rounded-lg" />
        <div className="flex flex-col w-72 h-72 bg-slate-500 rounded-lg" />
      </div>
    </div>
  );
}
