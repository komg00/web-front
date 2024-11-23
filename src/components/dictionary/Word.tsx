import React from "react";

type WordItem = {
  term: string;
  meaning: string;
};

type Props = {
  word: WordItem[];
};

export default function Word({ word }: Props) {
  return (
    <div className="m-10 xl:m-20">
      {word.map((item, index) => (
        <div
          key={index}
          className="w-full flex flex-col xl:flex-row bg-white p-6 lg:p-10 my-8 xl:items-center"
        >
          <div className="w-36 xl:w-52 flex items-center mb-5 xl:m-0">
            <img
              src="/assets/images/baseball_icon.svg"
              alt="icon"
              className="size-8 lg:size-10 xl:size-12 mr-3"
            />
            <h1 className="font-bold text-xl lg:text-2xl xl:text-3xl">
              {item.term}
            </h1>
          </div>
          <p className="flex-1 text-lg lg:text-xl xl:text-22 p-0 xl:pr-10">
            {item.meaning}
          </p>
        </div>
      ))}
    </div>
  );
}
