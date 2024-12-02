import React from "react";
import { clubs } from "data/clubs";

export default function ClubPicker() {
  return (
    <div className="w-full h-16 xl:h-19 sticky top-[73px] bg-white flex gap-4 xl:gap-6 mb-auto mx-auto px-2 justify-center items-center border-b-2 border-gray-200 overflow-x-auto ">
      <p className="text-dark1 text-xs lg:text-base xl:text-lg ml-1 whitespace-nowrap">
        ALL
      </p>
      {clubs.map((club, index) => (
        <div className="flex items-center ">
          <img
            key={index}
            src={club.imagePath}
            alt={club.title}
            className="w-8 h-8"
          />
          <p className="hidden md:block text-dark1 text-xs lg:text-base xl:text-lg ml-0 lg:ml-1 whitespace-nowrap">
            {club.title}
          </p>
        </div>
      ))}
    </div>
  );
}
