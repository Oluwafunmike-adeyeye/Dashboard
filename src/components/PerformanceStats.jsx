"use client";

import React from 'react';
import { Doughnut } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { BiDotsHorizontalRounded } from 'react-icons/bi';
import { LuArrowUpRightSquare } from "react-icons/lu";

ChartJS.register(ArcElement, Tooltip, Legend);

const PerformanceStats = () => {
  const stats = [
    { title: 'Overall student attendance rate', highest: 'Pry 1 Highest', lowest: 'Pry 1 Lowest', rate: "70%" },
    { title: 'Overall staff performance rating', highest: 'Pry 1 Highest', lowest: 'Pry 1 Lowest', rate: "70%" },
    { title: 'Overall Staff attendance rate', highest: 'Pry 1 Highest', lowest: 'Pry 1 Lowest', rate: "70%" },
    { title: 'Overall attendance rate', highest: 'Pry 1 Highest', lowest: 'Pry 1 Lowest', rate: "70%" },
  ];

  return (
    <div className="max-w-md mx-auto bg-white rounded-lg text-sm text-gray-900 shadow-md overflow-hidden md:max-w-2xl w-[320px] h-[310px] p-4">
        <div className="text-base font-semibold">Some Performance Statistics</div>
        <p className="text-gray-400 text-xs">Description</p>
        <div className='overflow-y-auto h-[210px]'>
          <ul className="mt-6 space-y-4">
            {stats.map((stat, index) => {
              const rateNumber = parseFloat(stat.rate);
              const remaining = 100 - rateNumber;

              return (
                <li key={index} className="flex items-center space-x-2">
                  <div className="w-[50px] h-[50px]">
                    <Doughnut
                      data={{
                        labels: ['Achieved', 'Remaining'],
                        datasets: [
                          {
                            data: [rateNumber, remaining],
                            backgroundColor: ['#3b82f6', '#e5e7eb'],
                            hoverBackgroundColor: ['#2563eb', '#d1d5db'],
                          },
                        ],
                      }}
                      options={{
                        responsive: true,
                        maintainAspectRatio: false,
                        cutout: '60%',
                        rotation: -Math.PI / 2,
                        plugins: {
                          legend: { display: false },
                        },
                      }}
                    />
                  </div>
                  <div>
                    <div className='flex gap-2 items-center'>
                      <h3 className="text-gray-900 text-[10px] font-semibold">{stat.title}</h3>
                      <button className="text-gray-400 hover:text-gray-600 focus:outline-none">
                        <LuArrowUpRightSquare className="w-4 h-4" />
                      </button>
                      <button className="text-gray-400 hover:text-gray-600 focus:outline-none">
                        <BiDotsHorizontalRounded className="w-5 h-5" />
                      </button>
                    </div>
                    
                    <div className='flex gap-4 items-center'>
                      <div>
                        <p className="text-gray-400 text-[9px]">{stat.highest}</p>
                        <p className='text-base font-bold'>{stat.rate}</p>   
                      </div>
                      <div>
                        <p className="text-gray-400 text-[9px]">{stat.lowest}</p>
                        <p className='text-base font-bold text-red-600'>{stat.rate}</p>
                      </div>
                    </div>
                  </div>
                  
                </li>
              );
            })}
          </ul>
        </div>
    </div>
  );
};

export default PerformanceStats;
