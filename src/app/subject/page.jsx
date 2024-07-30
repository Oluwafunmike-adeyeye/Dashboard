"use client";

import { BsArrowsExpandVertical } from "react-icons/bs";


const page = () => {
    return (
      <div className="container mx-auto">
        <div className="w-[240px] h-full bg-gray-100">
          <header className="text-gray-900">
            <div className='flex justify-between items-center p-4'>
              <h1 className="text-xl font-bold">Subjects</h1>
              <BsArrowsExpandVertical size={22} />
            </div>
            <div className='h-[1px] w-full bg-gray-300'></div>
          </header>
          <ul className="pl-6 mt-2 space-y-1">
            <li>All Subjects</li>
            <li>Subjects</li>
          </ul>
          <ul className="pl-6 mt-6 space-y-1">
            <span className="font-bold">More</span>
            {Array.from({ length: 5 }).map((_, index) => (
              <li key={index}>
                ********** 
              </li>
            ))}
          </ul>
        </div>
        
      </div>
    )
  }
  
  export default page