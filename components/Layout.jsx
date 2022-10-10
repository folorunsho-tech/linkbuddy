import React from "react";
import SideBar from "./LayoutComponents/SideBar";
import Header from "./LayoutComponents/Header";
import UserLink from "./LayoutComponents/UserLink";
const Layout = ({ children }) => {
  return (
    <div className="flex flex-col w-full bg-slate-900  text-gray-100 md:grid md:grid-cols-12">
      <SideBar />
      <nav className="flex flex-col md:flex-row h-fit w-full md:col-start-2 md:col-end-13">
        <Header />
        <UserLink />
      </nav>
      <div className="md:col-start-2 md:col-end-12 h-screen p-3">
        {children}
      </div>
    </div>
  );
};

export default Layout;
