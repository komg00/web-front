import React from "react";
import Sidebar from "components/layout/Sidebar";
import { homeMenu } from "data/menu";
import ClubPicker from "components/layout/ClubPicker";
import WritePost from "components/home/WritePost";
import Feed from "components/home/Feed";

export default function Home() {
  return (
    <div className="bg-light3 flex" style={{ minHeight: "calc(100vh - 82px)" }}>
      <Sidebar menu={homeMenu} />
      <div className="flex-1">
        <ClubPicker />
        <main className="w-full flex flex-col justify-center items-center mb-12">
          <WritePost />
          <Feed />
        </main>
      </div>
    </div>
  );
}
