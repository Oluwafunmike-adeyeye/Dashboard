"use client";

import { BiDotsHorizontalRounded } from 'react-icons/bi';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const data = {
  labels: ['Pry 1', 'Pry 2', 'Pry 3', 'Pry 4', 'Pry 5', 'Pry 6'],
  datasets: [
    {
      label: 'Students Enrolled',
      data: [80, 90, 70, 75, 80, 95],
      backgroundColor: '#06b6d4',
    },
  ],
};

const options = {
  responsive: true,
  plugins: {
    legend: {
      display: false,
    },
    title: {
      display: false,
    },
  },
  scales: {
    x: {
      grid: {
        display: false, // Remove vertical grid lines
      },
    },
    y: {
      grid: {
        display: true, // Keep horizontal grid lines
      },
      ticks: {
        beginAtZero: true, // Ensures the y-axis starts at zero
      },
    },
  },
};

const EnrollmentChart = () => {
  return (
    <div className="bg-white text-gray-900 w-[320px] h-[310px] p-4 rounded-lg shadow-md">
      <div className='flex justify-between items-center'>
        <h2 className="text-base font-bold">Enrollment by grade level</h2>
        <button className="text-gray-400 hover:text-gray-600 focus:outline-none">
          <BiDotsHorizontalRounded className="w-5 h-5" />
        </button>
      </div>
      <p className="text-xs text-gray-500 mb-8">Description</p>
      <Bar data={data} options={options} />
      <div className="mt-8 text-blue-500 text-sm cursor-pointer">View details</div>
    </div>
  );
};

export default EnrollmentChart;
