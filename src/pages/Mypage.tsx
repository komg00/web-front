import React from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "components/layout/Sidebar";
import { mypageMenu } from "data/menu";

export default function Mypage() {
  return (
    <div
      className="bg-light3 flex mt-[74px]"
      style={{ minHeight: "calc(100vh - 74px)" }}
    >
      <Sidebar menu={mypageMenu} />
      <div className="flex-1">
        <Outlet />
      </div>
    </div>
  );
}
