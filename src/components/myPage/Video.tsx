import { recommend_video, team_video } from "data/dummy/video";
import React from "react";

export default function Video() {
  return (
    <div className="flex-1">
      <div className="mr-5 bg-white flex p-4 sm:py-6 sm:px-10 my-6 border items-center justify-between">
        <h2 className="font-bold text-22px sm:text-3xl">맞춤 동영상</h2>
        <p className="text-dark3 text-lg sm:text-2xl font-bold cursor-pointer">
          + 더보기
        </p>
      </div>
      <div
        className="mr-5 bg-white p-5 mb-10 grid gap-6"
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
        }}
      >
        {recommend_video.map((item, index) => (
          <div
            key={item.index}
            className="min-w-64 xl:max-w-96 mt-5 flex-shrink-0 flex flex-col"
          >
            <img src={item.image_path} alt="path" />
            <h3 className="w-full whitespace-pre-wrap my-2 font-bold text-xl xl:text-2xl line-clamp-2">
              {item.title}
            </h3>
          </div>
        ))}
      </div>
      <div className="mr-5 bg-white flex p-4 sm:py-6 sm:px-10 my-6 border items-center justify-between">
        <h2 className="font-bold text-22px sm:text-3xl">
          KIA 타이거즈 관련 영상
        </h2>
        <p className="text-dark3 text-lg sm:text-2xl font-bold cursor-pointer">
          + 더보기
        </p>
      </div>
      <div
        className="mr-5 bg-white p-5 mb-10 grid gap-6"
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
        }}
      >
        {team_video.map((item, index) => (
          <div
            key={item.index}
            className="min-w-64 xl:max-w-96 mt-5 flex-shrink-0 flex flex-col"
          >
            <img src={item.image_path} alt="path" />
            <h3 className="w-full whitespace-pre-wrap my-2 font-bold text-xl xl:text-2xl line-clamp-2">
              {item.title}
            </h3>
          </div>
        ))}
      </div>
    </div>
  );
}
