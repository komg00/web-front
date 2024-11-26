import React from "react";

export default function BallCount() {
  return (
    <div className="flex flex-col w-[100px] space-y-2">
      <div className="relative w-20 h-20 ml-4">
        <div className="absolute top-1 left-1 w-8 h-8 bg-gray-300 transform rotate-45 origin-bottom-right"></div>
        <div className="absolute top-1.5 right-2.5 w-8 h-8 bg-yellow-400 transform rotate-45 origin-bottom-left"></div>
        <div className="absolute bottom-2.5 left-0.5 w-8 h-8 bg-gray-300 transform rotate-45 origin-top-right"></div>
      </div>

      <div className="grid grid-cols-4 font-bold text-xl items-center">
        <h1>B</h1>
        <div className="w-5 h-5 rounded-full bg-green-400"></div>
        <div className="w-5 h-5 rounded-full bg-green-400"></div>
        <div className="w-5 h-5 rounded-full bg-gray-300"></div>
        <h1>S</h1>
        <div className="w-5 h-5 rounded-full bg-yellow-400"></div>
        <div className="w-5 h-5 rounded-full bg-yellow-400"></div>
        <div className="w-5 h-5 rounded-full bg-gray-300"></div>
        <h1>O</h1>
        <div className="w-5 h-5 rounded-full bg-red-400"></div>
        <div className="w-5 h-5 rounded-full bg-gray-300"></div>
        <div className="w-5 h-5 rounded-full bg-gray-300"></div>
      </div>
    </div>
  );
}
