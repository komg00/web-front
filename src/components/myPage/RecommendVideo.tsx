import React from "react";
import { recommend_video } from "data/dummy/video";

export default function RecommendVideo() {
  const repeatedVideos = recommend_video.concat(
    recommend_video,
    recommend_video
  );
  return (
    <div className="w-full">
      <div className="w-full p-4 lg:py-8 lg:pl-20 bg-white border-b">
        <h1 className="font-bold text-2xl lg:text-3xl">맞춤 동영상</h1>
      </div>
      <div
        className="mx-8 my-10 bg-white p-5 mb-10 grid gap-6"
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
        }}
      >
        {repeatedVideos.map((item, index) => (
          <div
            key={`${item.index}-${index}`}
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
