import React from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "components/layout/Sidebar";
import { dictionaryMenu } from "data/menu";

export default function Dictionarypage() {
  return (
    <div className="bg-light3 flex" style={{ minHeight: "calc(100vh - 82px)" }}>
      <Sidebar menu={dictionaryMenu} />
      <Outlet />
    </div>
  );
}
