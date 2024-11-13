import React from "react";
import { clubs } from "data/clubs";
import { homeMenu } from "data/menu";
import { HiOutlinePhotograph } from "react-icons/hi";

export default function WritePost() {
  return (
    <div className="min-w-[440px] md:min-w-[520px] lg:min-w-xl xl:min-w-[700px] mx-2 md:mx-0 my-10 p-6 md:p-10 bg-white">
      <div className="flex justify-center items-center xl:px-4">
        <img
          src="/assets/images/default_profile.svg"
          alt="profile"
          className="w-[60px] xl:w-[70px]"
        />
        <textarea
          className="flex-1 ml-1 lg:ml-4 p-1 md:p-3"
          placeholder="내용을 입력해주세요"
        />
      </div>

      <div className="w-auto flex justify-between items-center my-4 xl:px-5 mt-8 md:mt-10">
        <div className="flex justify-center items-center">
          <label
            htmlFor="club"
            className="xl:mx-2 text-xs md:text-base xl:text-lg"
          >
            구단
          </label>
          <select
            id="club"
            className="p-2 border rounded-md text-xs md:text-base xl:text-lg"
          >
            <option>전체</option>
            {clubs.map((club) => (
              <option>{club.title}</option>
            ))}
          </select>
        </div>
        <div className="flex justify-center items-center">
          <label
            htmlFor="category"
            className="mx-1 xl:mx-2 text-xs md:text-base xl:text-lg"
          >
            카테고리
          </label>
          <select
            id="category"
            defaultValue={"잡담/수다"}
            className="p-2 border rounded-md text-xs md:text-base xl:text-lg"
          >
            {homeMenu.map((menu) => (
              <option>{menu.title}</option>
            ))}
          </select>
        </div>
        <HiOutlinePhotograph className="size-9 md:size-10" color="#CCC" />
        <button className="bg-main2 text-white px-3 md:px-4 py-1.5 md:py-2 rounded-2xl text-xs md:text-base xl:text-lg">
          올리기
        </button>
      </div>
    </div>
  );
}
