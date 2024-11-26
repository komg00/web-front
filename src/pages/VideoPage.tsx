import React from "react";
import { Outlet } from "react-router-dom";

export default function VideoPage() {
  return (
    <div className="bg-light3 flex" style={{ minHeight: "calc(100vh - 82px)" }}>
      <div className="flex-1">
        <Outlet />
      </div>
    </div>
  );
}
