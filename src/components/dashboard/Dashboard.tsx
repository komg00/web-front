import React from "react";
import { teamInfo, matchInfo, scoreboard } from "data/dummy/dashboard";
import Scoreboard from "./Scoreboard";

export default function Dashboard() {
  return (
    <div className="w-full">
      <div className="flex flex-col bg-white px-14 py-1 xl:py-4 text-dark1">
        <h1 className="text-[45px] font-bold px-10 pt-4">{teamInfo.name}</h1>
        <div className="w-4/5 flex text-22px px-16 pt-3 my-1 justify-between items-center">
          <div className="flex flex-col items-center">
            <p className="text-dark2">경기</p>
            <p className="font-bold">{teamInfo.games}</p>
          </div>
          <div className="flex flex-col items-center">
            <p className="text-dark2">승</p>
            <p className="font-bold">{teamInfo.wins}</p>
          </div>
          <div className="flex flex-col items-center">
            <p className="text-dark2">패</p>
            <p className="font-bold">{teamInfo.defeats}</p>
          </div>
          <div className="flex flex-col items-center">
            <p className="text-dark2">무</p>
            <p className="font-bold">{teamInfo.ties}</p>
          </div>
          <div className="flex flex-col items-center">
            <p className="text-dark2">승률</p>
            <p className="font-bold">{teamInfo.winRate}</p>
          </div>
          <div className="flex flex-col items-center">
            <p className="text-dark2">최근 10경기</p>
            <p className="font-bold">{teamInfo.recentGames}</p>
          </div>
        </div>
      </div>

      <div className="mx-16 mt-16 mb-2">
        <div className="bg-white shadow-sm my-8 px-24 py-10 flex justify-between items-center">
          <div className="flex items-center pl-10">
            <div className="flex flex-col text-xl">
              <p className="font-bold text-2xl ml-auto">{matchInfo.homeTeam}</p>
              <p>투. {matchInfo.pitcherHome}</p>
            </div>
            <img
              src={matchInfo.homeLogo}
              alt="home logo"
              className="w-36 ml-10"
            />
          </div>
          <h1 className="text-4xl font-bold">{matchInfo.homeScore}</h1>

          <div className="flex flex-col items-center text-xl gap-1">
            <p className="w-full text-2xl font-bold bg-green-600 text-white px-8 py-1 rounded-lg text-center">
              {matchInfo.inning}
            </p>
            <p className="text-dark2">{matchInfo.date}</p>
            <p className="text-dark2">{matchInfo.time}</p>
            <p className="text-dark2">{matchInfo.stadium}</p>
          </div>

          <h1 className="text-4xl font-bold">{matchInfo.awayScore}</h1>
          <div className="flex items-center text-xl pr-10">
            <img
              src={matchInfo.awayLogo}
              alt="home logo"
              className="w-36 mr-10"
            />
            <div className="flex flex-col">
              <p className="font-bold text-2xl">{matchInfo.awayTeam}</p>
              <p>투. {matchInfo.pitcherAway}</p>
            </div>
          </div>
        </div>
      </div>

      <Scoreboard />
    </div>
  );
}
