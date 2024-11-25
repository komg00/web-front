import { recommend_video, team_video } from "data/dummy/video";
import React from "react";

export default function Video() {
  return (
    <div className="flex-1 mx-5 mt-10">
      <div className="bg-white flex py-8 px-12 my-6 border items-center justify-between">
        <h2 className="font-bold text-4xl">맞춤 동영상</h2>
        <p className="text-dark3 text-2xl font-bold cursor-pointer">+ 더보기</p>
      </div>
      <div className="flex bg-white p-5 mb-20">
        {recommend_video.map((item, index) => (
          <div
            key={item.index}
            className="w-80 xl:w-96 mx-3 mt-5 flex flex-col"
          >
            <img src={item.image_path} alt="path" />
            <h3 className="w-full whitespace-pre-wrap my-2 font-bold text-xl xl:text-2xl">
              {item.title}
            </h3>
          </div>
        ))}
      </div>
      <div className="bg-white flex py-8 px-12 my-6 border items-center justify-between">
        <h2 className="font-bold text-4xl">KIA 타이거즈 관련 영상</h2>
        <p className="text-dark3 text-2xl font-bold cursor-pointer">+ 더보기</p>
      </div>
      <div className="w-full flex bg-white p-5 mb-18">
        {team_video.map((item, index) => (
          <div
            key={item.index}
            className="w-80 xl:w-96 mx-3 mt-5 flex flex-col"
          >
            <img src={item.image_path} alt="path" />
            <h3 className="w-full whitespace-pre-wrap my-2 font-bold text-xl xl:text-2xl">
              {item.title}
            </h3>
          </div>
        ))}
      </div>
    </div>
  );
}
