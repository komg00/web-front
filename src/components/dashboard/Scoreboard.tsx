import React from "react";
import { scoreboard } from "data/dummy/dashboard";
import BallCount from "./BallCount";

export default function Scoreboard() {
  return (
    <div className="bg-white mx-16 my-4 p-6">
      <h2 className="text-2xl font-bold mb-4 text-center">스코어보드</h2>
      <div className="overflow-x-auto flex p-6 text-xl">
        <BallCount />
        <table className="table-auto w-full ml-6 my-2 text-center border-collapse">
          <thead>
            <tr className="bg-gray-200">
              {[
                "",
                1,
                2,
                3,
                4,
                5,
                6,
                7,
                8,
                9,
                10,
                11,
                12,
                13,
                14,
                15,
                "R",
                "H",
                "E",
                "B",
              ].map((col, idx) => (
                <th key={idx} className="px-2 py-1">
                  {col}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {scoreboard.map((row, idx) => (
              <tr key={idx}>
                <td className="font-bold">{row.team}</td>
                {row.scores.map((val, index) => (
                  <td key={index} className="px-2 py-1">
                    {val}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
