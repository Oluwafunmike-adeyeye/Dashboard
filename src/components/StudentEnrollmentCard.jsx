"use client";

import { BiDotsHorizontalRounded } from 'react-icons/bi';
import { Doughnut } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';

ChartJS.register(ArcElement, Tooltip, Legend);

const data = {
  labels: ['Students Enrolled 72%', 'Students Withdrawn 28%'],
  datasets: [
    {
      label: 'Student Enrollment',
      data: [72, 28],
      backgroundColor: ['#06b6d4', '#D1D5DB'],
    },
  ],
};

const options = {
  responsive: true,
  maintainAspectRatio: false, 
  cutout: '70%',
  rotation: -90,
  circumference: 180,
  plugins: {
    legend: {
      position: 'right',
      labels: {
        boxWidth: 10, 
        padding: 5,   
        color: '#111827', 
      },
    },
    tooltip: {
      callbacks: {
        label: function (tooltipItem) {
          return `${tooltipItem.label}: ${tooltipItem.raw}%`;
        },
      },
    },
  },
};

const StudentEnrollmentCard = () => {
  return (
    <div className="bg-white text-gray-900 rounded-lg shadow px-4 pt-4 pb-2 w-[320px] h-[310px]">
      <div className="flex justify-between items-center font-bold">
        <h2 className="text-base font-bold">Student Enrollment</h2>
        <div className="relative">
          <button className="text-gray-400 hover:text-gray-600 focus:outline-none">
            <BiDotsHorizontalRounded className="w-5 h-5" />
          </button>
        </div>
      </div>
      <p className="text-gray-500 mb-3 text-xs">Description</p>
      <div className="mb-3 flex gap-2 text-sm">
        <button className="text-gray-900 font-semibold border-b-2 border-[#06b6d4]">7 days</button>
        <button className="text-gray-400">30 days</button>
        <button className="text-gray-400">60 days</button>
      </div>
      <div className="relative w-full h-[120px] mb-2"> 
        <Doughnut data={data} options={options} />
      </div>
      <div className="flex justify-between text-gray-500 text-xs mb-4">
        <div className='flex gap-2 items-center'>
          <span className='h-4 w-4 bg-[#06b6d4]'></span>
          <p>Total Student Enrollment</p>
        </div>
        <div className='flex gap-2 items-center'>
          <span className='h-4 w-4 bg-gray-400'></span>
          <p>Students Withdrawn</p>
        </div>
      </div>
      <button className="mt-4 text-blue-500 text-sm">View details</button>
    </div>
  );
};

export default StudentEnrollmentCard;
