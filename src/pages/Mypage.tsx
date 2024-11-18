import React from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "components/layout/Sidebar";
import { mypageMenu } from "data/menu";

export default function Mypage() {
  return (
    <div className="bg-light3 flex" style={{ minHeight: "calc(100vh - 82px)" }}>
      <Sidebar menu={mypageMenu} />
      <div className="flex-1 py-8 pl-6 sm:py-12 sm:px-6 lg:py-20 lg:pl-3 xl:pl-10">
        <Outlet />
      </div>
    </div>
  );
}
