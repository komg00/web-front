import React from "react";
import { FiThumbsUp, FiMessageSquare } from "react-icons/fi";

export default function Feed() {
  return (
    <div className="min-w-[440px] md:min-w-[520px] lg:min-w-xl xl:min-w-[700px] mx-2 md:mx-0 p-6 md:p-10 md:py-6 bg-white">
      <div className="flex items-center xl:px-4 mt-2">
        <img
          src="/assets/images/default_profile.svg"
          alt="profile"
          className="w-[60px] xl:w-[70px]"
        />
        <div className="flex flex-col ml-1 md:ml-4 text-dark1">
          <p className="font-extrabold">망곰</p>
          <p>
            10.04 <span>01:09</span>
          </p>
        </div>
      </div>
      <div className="px-2 py-1 md:px-2.5 xl:px-6">
        <p className="my-2 text-dark1">원정팀 시야 참고하세용!!</p>
        <img
          src={"/assets/images/sample.jpg"}
          alt="sample"
          className="w-80 h-80"
        />
        <div className="flex items-center gap-1.5 mt-5">
          <FiThumbsUp size={23} color="#333" />
          <span className="mr-2">3</span>
          <FiMessageSquare size={23} color="#333" />
          <span>3</span>
        </div>
      </div>
    </div>
  );
}
