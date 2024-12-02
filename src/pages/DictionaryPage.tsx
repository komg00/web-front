import React from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "components/layout/Sidebar";
import { dictionaryMenu } from "data/menu";

export default function Dictionarypage() {
  return (
    <div className="bg-light3 flex mt-[74px]">
      <Sidebar menu={dictionaryMenu} />
      <Outlet />
    </div>
  );
}
