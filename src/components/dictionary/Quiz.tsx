import React from "react";

type Props = {};

export default function Quiz() {
  return (
    <div className="flex-1">
      <div className="w-full py-4 lg:py-6 flex justify-around items-center bg-white">
        <h1 className="font-bold text-lg sm:text-2xl lg:text-3xl">
          오늘의 야구 퀴즈
        </h1>
        <div className="w-3/6 flex flex-col items-center m-1">
          <div className="w-full flex mr-2 lg:mr-0">
            <div className="w-full flex justify-between text-base sm:text-lg lg:text-xl">
              <div className="flex">
                <p className="text-dark1 font-bold">LV06. </p>
                <p className="text-dark3 ml-1">야린이5 까지</p>
              </div>
              <div className="text-dark1 font-bold">72%</div>
            </div>
          </div>
          <div className="w-full h-4 sm:h-5 xl:h-8 relative bg-light3 rounded-3xl mt-2 mr-2 lg:mr-0">
            <div className="w-9/12 h-full bg-dark3 rounded-3xl" />
          </div>
        </div>
      </div>
      <div className="w-[350px] sm:w-4/6 sm:h-4/6 flex flex-col bg-white mx-auto my-20 p-8 lg:p-16 items-center justify-center">
        <h1 className="font-bold text-lg sm:text-2xl xl:text-27px">
          Q. 투수가 던진 공이 스트라이크존을 넘어간 경우를 뜻하는 용어는
          무엇일까요?
        </h1>
        <div className="w-full sm:w-4/5 xl:w-3/5 flex flex-col gap-5 text-center font-semibold text-base sm:text-22px my-12">
          <div className="rounded-md border p-4 xl:p-6">아웃</div>
          <div className="rounded-md border p-4 xl:p-6">볼</div>
          <div className="rounded-md border p-4 xl:p-6 bg-main2 text-white">
            스트라이크
          </div>
          <div className="rounded-md border p-4 xl:p-6">홈런</div>
        </div>
      </div>
    </div>
  );
}
