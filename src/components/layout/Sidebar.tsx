import React from "react";

import {
  HiOutlineChat,
  HiOutlineCog,
  HiOutlineBell,
  HiOutlineSearch,
} from "react-icons/hi";
import { IconType } from "react-icons";

type MenuItem = {
  title: string;
  icon: IconType;
};

type Props = {
  menu: MenuItem[];
};

export default function Sidebar({ menu }: Props) {
  return (
    <div className="hidden md:flex relative w-[260px] xl:w-[310px] bg-white flex-col items-center border-r-2 border-gray-200">
      <div className="flex gap-4 xl:gap-8 mt-9 xl:mt-11 mb-4 xl:mb-6">
        <HiOutlineChat size={35} color="#333" />
        <HiOutlineCog size={35} color="#333" />
        <HiOutlineBell size={35} color="#333" />
      </div>

      <div className="relative w-full flex items-center my-1 px-2 xl:px-4">
        <input
          type="text"
          placeholder="게시글을 검색하세요"
          className="w-full border-light1 border-2 rounded-3xl text-xs xl:text-base px-3 py-2"
        />
        <HiOutlineSearch
          size={26}
          className="xl:absolute right-7 text-dark2 cursor-pointer ml-2"
        />
      </div>

      <div className="w-full grid grid-cols-2 gap-4 xl:gap-5 my-8 p-4">
        {menu.map((item, index) => (
          <div
            key={index}
            className="w-full aspect-square flex flex-col justify-center items-center bg-white border-dark3 border rounded-2xl p-2"
          >
            <item.icon
              size={60}
              color="#99"
              className="xl:size-65 text-dark3"
            />
            <p className="text-dark3 text-12px xl:text-base font-bold mt-1 hidden sm:block">
              {item.title}
            </p>
          </div>
        ))}
      </div>

      <div className="hidden mt-auto items-stretch sm:flex w-full flex-col gap-3">
        <div className="w-full flex items-center mx-3 lg:ml-5">
          <img
            src="/assets/images/profile.svg"
            alt="profile"
            className="w-11 xl:w-[65px]"
          />
          <div className="w-full flex flex-col ml-1">
            <p className="font-bold sm:text-sm xl:text-lg">
              도규는유명한MZ투수
            </p>
            <p>
              <span className="text-dark2 sm:text-sm xl:font-bold">LV05. </span>
              <span className="text-dark3 sm:text-sm">뉴비1</span>
            </p>
          </div>
        </div>

        <p className="hidden xl:relative mx-6">
          <span className="text-dark1 font-bold text-lg">LV06. </span>
          <span className="text-dark3 text-lg">야린이5 까지</span>
          <span className="text-dark1 font-bold text-xl absolute right-0">
            72%
          </span>
        </p>
        <div className="h-4 xl:h-6 mx-3 xl:mx-5 bg-dark3 rounded-3xl" />
        <div className="w-full h-14 mt-7 bg-main2" />
      </div>
    </div>
  );
}
