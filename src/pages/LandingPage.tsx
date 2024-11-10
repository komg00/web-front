import React from "react";
import { features } from "../data/features";

export default function Landing() {
  return (
    <>
      <section className="relative w-full flex flex-col lg:flex-row bg-lightGreen py-20 lg:py-44">
        <div className="w-full flex flex-col px-6 lg:px-36 text-center lg:text-left">
          <h1 className="text-4xl lg:text-6xl font-bold dark1 mb-4">YAONG</h1>
          <h2 className="text-2xl lg:text-4xl font-bold dark1 mb-4">
            야구보러 옹기종기
          </h2>
          <p className="my-6 dark1 text-lg lg:text-xl font-medium">
            야옹은 야린이부터 야구 고수까지 전국의 모든 KBO 팬들과 함께합니다.
            <br />
            경기 정보, 굿즈 구매, 야구 사전, 커뮤니티 기능까지
            <br />
            야옹 서비스 내에서 모두 누려보세요!
          </p>
          <div className="mt-4 flex flex-row justify-center items-center lg:justify-start">
            <button className="w-1/3 md:w-36 h-16 mr-6 bg-main2 text-white text-lg font-semibold hover:scale-105 transform transition duration-300">
              Sign Up →
            </button>
            <button className="w-1/3 md:w-36 h-16 border-2 border-main2 text-green-600 text-lg font-semibold hover:scale-105 transform transition duration-300">
              Sign In
            </button>
          </div>
        </div>
        <img
          src={"/assets/images/background.svg"}
          alt="background"
          className="hidden lg:block absolute lg:w-[650px] lg:h-[650px] xl:w-[900px] xl:h-[800px] top-0 right-0"
        />
      </section>

      <section className="w-full flex flex-col bg-lightGreen pt-12 xl:pt-60 pb-16 lg:pb-32 text-center">
        <h1 className="mt-4 text-3xl lg:text-5xl font-bold text-black lg:leading-snug">
          야옹은 천만 KBO 팬들을 위한 <br />
          통합 플랫폼입니다
        </h1>
        <p className="m-5 text-xl lg:text-xl text-dark2">
          야옹이 제공하는 4가지 기능들을 자유롭게 사용할 수 있어요
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 lg:gap-12 max-w-screen-xl mx-auto my-8 px-4">
          {features.map((feature, index) => (
            <div
              key={index}
              className="flex flex-row mx-6 md:mx-0 my-1 md:my-0 bg-white p-6 rounded-2xl shadow-md text-left transform hover:scale-105 transition-transform duration-300"
            >
              <div className="w-14 h-14 flex-shrink-0 mr-1">
                <img
                  src={feature.imagePath}
                  alt="number"
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="flex flex-col ml-3">
                <h3 className="text-xl lg:text-2xl font-semibold text-black">
                  {feature.title}
                </h3>
                <p className="mt-3 text-md lg:text-lg text-dark2">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>
      <footer className="w-full flex flex-col md:flex-row justify-around py-8 lg:py-12 items-center bg-white">
        <img
          src={"/assets/images/footer_logo.svg"}
          alt="logo"
          className="mb-4 lg:mb-0"
        />
        <div className="flex flex-row gap-10">
          <p className="text-gray-900 text-lg lg:text-xl">Teams</p>
          <p className="text-gray-900 text-lg lg:text-xl">Privacy</p>
          <p className="text-gray-900 text-lg lg:text-xl">Cookies</p>
        </div>
        <h2 className="text-dark1 font-bold text-lg lg:text-2xl mt-4 md:mt-0">
          Cloud Project Team F
        </h2>
      </footer>
    </>
  );
}
