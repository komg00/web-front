import React from "react";
import Sidebar from "components/layout/Sidebar";
import { homeMenu } from "data/menu";
import ClubPicker from "components/layout/ClubPicker";

export default function Home() {
  return (
    <div className="bg-light3 flex" style={{ minHeight: "calc(100vh - 82px)" }}>
      <Sidebar menu={homeMenu} />
      <div className="flex-1">
        <ClubPicker />
      </div>
    </div>
  );
}
