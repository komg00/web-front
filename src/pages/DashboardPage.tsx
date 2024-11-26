import React from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "components/layout/Sidebar";
import { dashboardMenu } from "data/menu";

export default function DashboardPage() {
  return (
    <div className="bg-light3 flex" style={{ minHeight: "calc(100vh - 82px)" }}>
      <Sidebar menu={dashboardMenu} />
      <div className="flex-1">
        <Outlet />
      </div>
    </div>
  );
}
