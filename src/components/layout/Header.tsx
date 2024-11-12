import React from "react";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="w-full flex items-center justify-between px-9 py-4 bg-white border-b-2 border-gray-200">
      <img src={"/assets/images/logo.svg"} alt="logo" />
      <div className="flex items-center space-x-14">
        <Link
          to="/home"
          className="dark2 hover:text-black hover:font-semibold text-xl"
        >
          Home
        </Link>
        <Link
          to="/goods"
          className="dark2 hover:text-black hover:font-semibold text-xl"
        >
          Goods
        </Link>
        <Link
          to="/dictionary"
          className="dark2 hover:text-black hover:font-semibold text-xl"
        >
          Dictionary
        </Link>
        <Link
          to="/dashboard"
          className="dark2 hover:text-black hover:font-semibold text-lg"
        >
          Dashboard
        </Link>
      </div>
      <div className="flex items-center justify-center space-x-3">
        <button className="dark2 hover:black mx-2">Sign In</button>
        <img src={"/assets/images/chat.svg"} alt="chat" />
        <img src={"/assets/images/default_profile.svg"} alt="profile" />
      </div>
    </header>
  );
}
