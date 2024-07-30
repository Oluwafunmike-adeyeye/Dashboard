"use client";

import { IoIosSearch, IoIosNotificationsOutline } from "react-icons/io";
import { BiStopwatch } from "react-icons/bi";

const Header = () => {
  return (
    <div className="bg-gray-900 text-white p-5 flex justify-between items-center">
      <h2>Schole</h2>
      <div className="flex items-center border border-white rounded-2xl px-2 w-[400px] text-sm">
        <IoIosSearch size={22} />
        <input type="text" placeholder="Search" className="p-2 bg-gray-900" />
      </div>
      <div className="flex items-center px-2">
        <div className="rounded-full border border-white p-2 bg-gray-500 mx-2"><IoIosNotificationsOutline size={22} /></div>
        <div className="rounded-full p-2 bg-white text-gray-900"><BiStopwatch size={22} /></div>
        <div className="flex flex-col items-start ml-2">
          <span className="text-[13px]">Daytona Intl. School</span>
          <span className="text-[10px]">Adeyemi Lawanson (Admin)</span>
        </div>
      </div>
    </div>
  );
};

export default Header;
