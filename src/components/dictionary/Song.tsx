import React from "react";
import { songs } from "data/dummy/song";

export default function Song() {
  return (
    <div className="flex-1">
      <div className="w-full h-32 sm:h-48 xl:h-64 bg-dark2 flex flex-row text-white items-baseline justify-between px-7 sm:px-16 xl:px-24">
        <h1 className="font-bold text-3xl sm:text-4xl xl:text-5xl mt-16 sm:mt-28 xl:mt-40">
          KIA TIGERS
        </h1>
        <p className="sm:text-lg xl:text-2xl">구단 바꾸기</p>
      </div>
      <div className="flex flex-col gap-7 xl:gap-9 p-7 sm:p-12 xl:px-36 xl:pt-16">
        <div className="flex text-base xl:text-xl font-bold text-center">
          <div className="w-20 xl:w-24 rounded-xl bg-dark1 p-2 text-white mr-3">
            팀
          </div>
          <div className="w-20 xl:w-24 rounded-xl bg-light2 p-2">선수</div>
        </div>
        <p className="text-dark4 border-b-2 pb-3 text-lg xl:text-xl">총 34곡</p>
        {songs.map((item, index) => (
          <div key={index} className="flex">
            <div className="bg-kia rounded-3xl size-16 xl:size-20 flex items-center justify-center ml-0 sm:ml-2 mr-3 xl:mr-5">
              <p className=" text-white font-bold text-xl xl:text-2xl">KIA</p>
            </div>
            <div className="flex flex-col justify-center gap-y-1">
              <h1 className="text-xl xl:text-2xl font-bold">{item.title}</h1>
              <p className="p-0 text-lg xl:text-xl text-gray text-dark4">
                {item.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
