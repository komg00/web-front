import React, { useEffect, useState } from "react";
import {
  HiOutlineChat,
  HiOutlineCog,
  HiOutlineBell,
  HiOutlineSearch,
} from "react-icons/hi";
import { IconType } from "react-icons";
import { useNavigate } from "react-router-dom";
import { getMemberInfo, MemberInfo } from "api/memberApi";

type MenuItem = {
  title: string;
  icon: IconType;
  link?: string;
};

type Props = {
  menu: MenuItem[];
};

export default function Sidebar({ menu }: Props) {
  const navigate = useNavigate();

  const [memberInfo, setMemberInfo] = useState<MemberInfo | null>(null);
  const [error, setError] = useState<string | null>(null);
  useEffect(() => {
    const fetchMemberInfo = async () => {
      try {
        const data = await getMemberInfo();
        setMemberInfo(data);
        console.log(data);
      } catch (error: any) {
        setError("Failed to fetch member info.");
        console.error("Error:", error.message);
      }
    };

    fetchMemberInfo();
  }, []);

  if (error) {
    return <div>{error}</div>;
  }

  if (!memberInfo) {
    return <div>Loading...</div>;
  }
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
            className="w-full aspect-square flex flex-col justify-center items-center bg-white border-dark3 border rounded-2xl p-2 cursor-pointer"
            onClick={() => item.link && navigate(item.link)}
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
            src={memberInfo?.profileImageUrl}
            alt="profile"
            className="w-11 h-11 xl:w-[55px] xl:h-[55px] border rounded-full mr-1"
          />
          <div className="w-full flex flex-col ml-1">
            <p className="font-bold sm:text-sm xl:text-lg">
              {memberInfo?.username}
            </p>
            <p>
              <span className="text-dark2 sm:text-sm font-bold">
                {`LV${memberInfo.level}.`}
              </span>
              <span className="text-dark3 sm:text-sm">뉴비1</span>
            </p>
          </div>
        </div>

        <div className="flex ml-4 relative items-center">
          <p className="flex text-dark1 font-bold">LV1.</p>
          <p className="text-dark3">뉴비2 까지</p>
          <p className="text-dark1 font-semibold text-xl absolute right-3">
            {`${memberInfo.nextLevelExp}%`}
          </p>
        </div>
        <div className="h-4 sm:h-5 xl:h-6 relative bg-light3 rounded-3xl mx-3">
          <div className="w-6 h-full bg-dark3 rounded-3xl" />
        </div>
        <div className="w-full h-14 mt-7 bg-main2" />
      </div>
    </div>
  );
}
