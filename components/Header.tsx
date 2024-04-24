import React from "react";
import Logo from "./Logo";
import MainNav from "./MainNav";
import Profile from "./Profile";

export default function Header() {
  return (
    <header className=" py-4 border-b w-full">
      <div className="max-w-[1600px] mx-auto flex items-center justify-between gap-8">
        <Logo />
        <MainNav />
        <Profile />
      </div>
    </header>
  );
}
