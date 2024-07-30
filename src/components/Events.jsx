"use client";

import { BiDotsHorizontalRounded } from 'react-icons/bi';
import { LuArrowUpRightSquare } from "react-icons/lu";

const events = [
  { date: 'Apr 10, 2024', description: 'Senior Students PTA Meeting' },
  { date: 'May 10, 2024', description: 'Lecture free week' },
  { date: 'June 10, 2024', description: 'Examination Start' },
  { date: 'July 10, 2024', description: 'Founders Day event' },
  { date: 'July 10, 2024', description: 'Founders Day event' },
];

export default function Events() {
  return (
    <div className="max-w-md mx-auto text-gray-900 bg-white text-sm shadow-md rounded-lg p-4 w-[320px] h-[310px]">
      <h2 className="font-semibold text-base">Events & Schedules</h2>
      <div className="text-gray-600 text-xs mb-4">Description</div>
      <div className="overflow-y-auto h-[210px]"> 
        <ul>
          {events.map((event, index) => (
            <li key={index} className="flex flex-col justify-between py-2 border-b border-gray-200">
              <div className="flex justify-between items-center">
                <span className="text-gray-800 bg-[#06b6d4] px-2 rounded-2xl text-[9px]">{event.date}</span>
                <div className='flex gap-4'>
                    <button className="text-gray-400 hover:text-gray-600 focus:outline-none">
                        <LuArrowUpRightSquare className="w-4 h-4" />
                    </button>
                    <button className="text-gray-400 hover:text-gray-600 focus:outline-none">
                        <BiDotsHorizontalRounded className="w-5 h-5" />
                    </button>
                </div>
              </div>
              <div className="text-gray-600 text-xs mt-2">{event.description}</div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
