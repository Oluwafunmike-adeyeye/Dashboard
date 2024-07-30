import Link from 'next/link';
import { FaUserGraduate, FaChalkboardTeacher, FaBook } from 'react-icons/fa';
import { GoHome } from "react-icons/go";
import { RiFileUserLine, RiMoneyDollarBoxLine } from "react-icons/ri";
import { TbChartBar } from "react-icons/tb";
import { MdOutlineCalendarMonth } from "react-icons/md";
import { HiOutlineCog6Tooth } from "react-icons/hi2";
import { BsQuestionSquare } from "react-icons/bs";
import { SlLogout } from "react-icons/sl";

const SideNav = () => {
  return (
    <div className="flex flex-col h-full w-32 text-sm bg-gray-300 text-gray-900 overflow-y-auto overflow-x-hidden relative">
      <nav className="flex-1">
        <ul className="text-sm">
          <li className="">
            <Link href="/" className="flex flex-col items-center p-2 hover:bg-gray-800 hover:text-white">
              <GoHome size={20} className="mr-1" />
              Overview
            </Link>
          </li>
          <li className="">
            <Link href="/students" className="flex flex-col items-center p-2 hover:bg-gray-800 hover:text-white">
              <FaUserGraduate size={20} className="mr-1" />
              Students
            </Link>
          </li>
          <li className="">
            <Link href="/classes" className="flex flex-col items-center p-2 hover:bg-gray-800 hover:text-white">
              <FaChalkboardTeacher size={20} className="mr-1" />
              Classes
            </Link>
          </li>
          <li>
            <Link href="/subject" className="flex flex-col items-center p-2 hover:bg-gray-800 hover:text-white">
                <FaBook size={20} className="mr-1" />
                Subjects
            </Link> 
          </li>
          <li className="">
            <Link href="/staff" className="flex flex-col items-center p-2 hover:bg-gray-800 hover:text-white">
              <RiFileUserLine size={20} className="mr-1" />
              Staff
            </Link>
          </li>
          <li className="">
            <Link href="/finance" className="flex flex-col items-center p-2 hover:bg-gray-800 hover:text-white">
              <RiMoneyDollarBoxLine size={20} className="mr-1" />
              Finance
            </Link>
          </li>
          <li className="">
            <Link href="/reports" className="flex flex-col items-center p-2 hover:bg-gray-800 hover:text-white">
              <TbChartBar size={20} className="mr-1" />
              Reports
            </Link>
          </li>
          <li className="">
            <Link href="/calendar" className="flex flex-col items-center p-2 hover:bg-gray-800 hover:text-white">
              <MdOutlineCalendarMonth size={20} className="mr-1" />
              Calendar
            </Link>
          </li>
          <li className="">
            <Link href="/addons" className="flex flex-col items-center p-2 hover:bg-gray-800 hover:text-white">
              <div className="bg-[blue] rounded-full h-4 w-4"></div>
              Add On's
            </Link>
          </li>
        </ul>
        <ul className='mt-6 pt-4'>
          <li className="">
            <Link href="/settings" className="flex flex-col items-center p-2 hover:bg-gray-800 hover:text-white">
              <HiOutlineCog6Tooth size={20} className="mr-1" />
              Settings
            </Link>
          </li>
          <li className="">
            <Link href="/help" className="flex flex-col items-center text-[12px] p-2 hover:bg-gray-800 hover:text-white ">
              <BsQuestionSquare size={20} className="mr-1" />
              Help Center
            </Link>
          </li>
          <li className="">
            <Link href="/logout" className="flex flex-col items-center p-2 hover:bg-gray-800 hover:text-white">
              <SlLogout size={20} className="mr-1" />
              Log Out
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default SideNav;
