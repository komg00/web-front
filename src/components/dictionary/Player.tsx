import ClubPicker from "components/layout/ClubPicker";
import { players } from "data/dummy/player";
import React from "react";
import { HiOutlineSearch } from "react-icons/hi";

export default function Player() {
  return (
    <div className="flex-1">
      <ClubPicker />
      <div className="w-[350px] sm:w-4/5 relative flex items-center mx-auto my-6 xl:my-12">
        <input
          type="text"
          placeholder="궁금한 야구 선수가 있나요?"
          className="w-full border-light1 border-2 rounded-3xl text-xs lg:text-sm xl:text-base px-6 xl:px-10 py-3 xl:py-4"
        />
        <HiOutlineSearch
          size={26}
          className="text-dark2 cursor-pointer -ml-12"
        />
      </div>
      <div className="w-[350px] sm:w-4/5 flex flex-col gap-5 mx-auto mb-12">
        {players.map((player, index) => (
          <div className="w-full bg-white flex flex-col sm:flex-row p-9 gap-9 xl:gap-20 items-center">
            <img src={player.image_path} alt="path" className="w-40 xl:w-56" />
            <div className="flex flex-col gap-2">
              <div className="flex items-center">
                <h3 className="font-bold text-2xl xl:text-3xl">
                  {player.name}
                </h3>
                <img
                  src={player.logo_path}
                  alt="path"
                  className="w-11 xl:w-14 ml-1"
                />
              </div>
              <div className="flex flex-col lg:flex-row text-20px gap-1">
                <p>{player.birth_date} |</p>
                <p>{player.position} |</p>
                <p>{player.physique}</p>
              </div>
              <div className="flex flex-col lg:flex-row text-20px gap-1">
                <p>AVG/ERA: {player.avg} |</p>
                <p>AB/SHO: {player.ab} |</p>
                <p>HR/WPCT: {player.hr}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
