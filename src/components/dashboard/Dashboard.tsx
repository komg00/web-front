import React from "react";
import { matchInfo } from "data/dummy/dashboard";
import Scoreboard from "./Scoreboard";

export default function Dashboard() {
  return (
    <div className="w-full">
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
