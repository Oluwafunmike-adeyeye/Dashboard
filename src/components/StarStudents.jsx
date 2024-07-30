"use client";

import { BiDotsHorizontalRounded } from 'react-icons/bi';
import { LuArrowUpRightSquare } from "react-icons/lu";
import Image from "next/image"



const students = [
  { name: 'Jameson Idirisou', grade: 'JSS 2', position: 'Grades 1st Position', imgSrc: '/assets/male.jpg' },
  { name: 'Shade Alalade', grade: 'JSS 3', position: 'Grades 1st Position', imgSrc: '/assets/female.jpg' },
  { name: 'Chimaka Nwosu', grade: 'JSS 1', position: 'Grades 1st Position', imgSrc: '/assets/female.jpg' },
  { name: 'Bolarinwa James', grade: 'SSS 1', position: 'Grades 1st Position', imgSrc: '/assets/male.jpg' },
  { name: 'Marvin Joe', grade: 'SSS 2', position: 'Grades 1st Position', imgSrc: '/assets/male.jpg' },
];

export default function StarStudents() {
  return (
    <div className="max-w-md mx-auto text-sm bg-white shadow-md rounded-lg p-4 w-[320px] h-[310px]">
      <h2 className="text-base font-semibold">Star Students</h2>
      <div className="text-gray-600 text-xs mb-4">Description</div>
      <div className="overflow-y-auto h-[210px]"> 
        <ul>
          {students.map((student, index) => (
            <li key={index} className="flex items-center gap-2 text- py-2 border-b border-gray-200">
                <Image 
                  src={student.imgSrc} 
                  alt={student.name}
                  width={20} 
                  height={20} 
                  className="w-10 h-10 rounded-full mr-4 object-cover" 
                />
                <div className='mr-4'>
                  <div className="text-gray-800 font-semibold text-sm">{student.name}</div>
                  <div className="text-gray-400 text-[9px]">{student.grade} • {student.position}</div>
                </div>
                <div className="flex gap-2 ml-6">
                    <button className="text-gray-400 hover:text-gray-600 focus:outline-none">
                        <LuArrowUpRightSquare className="w-4 h-4" />
                    </button>
                    <button className="text-gray-400 hover:text-gray-600 focus:outline-none">
                        <BiDotsHorizontalRounded className="w-5 h-5" />
                    </button>
                </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
