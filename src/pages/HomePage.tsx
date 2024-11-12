import React from "react";
import Sidebar from "components/layout/Sidebar";
import { homeMenu } from "data/menu";

export default function Home() {
  return (
    <div
      className=" bg-light3 flex"
      style={{ minHeight: "calc(100vh - 82px)" }}
    >
      <Sidebar menu={homeMenu} />
      <div>test</div>
    </div>
  );
}
