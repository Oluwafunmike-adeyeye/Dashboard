"use clients";

import { BsArrowsExpandVertical } from "react-icons/bs";
import CheckboxMenu from "../components/CheckboxMenu";
import StudentEnrollmentCard from "../components/StudentEnrollmentCard";
import EnrollmentChart from "../components/EnrollmentChart";
import Fourcard from "../components/Fourcards";
import PerformanceStats from "../components/PerformanceStats";
import Events from "../components/Events";
import StarStudents from "../components/StarStudents";

const Home = () => {
  return (
    <div className="container mx-auto flex">
      <div className="w-[280px] h-full bg-gray-100">
        <header>
          <div className="flex justify-between items-center p-4">
            <h2>Overview</h2>
            <BsArrowsExpandVertical size={22} />
          </div>
          <div className='h-[1px] w-full bg-gray-300'></div>
        </header>
        <CheckboxMenu />
      </div>
      <div className="w-full">
        <div className="flex justify-center gap-12 items-center text-gray-900 text-xs bg-[#06b6d4] p-3">
          <p>Your free trial ends in 7 days. Upgrade to a plan now</p>
          <p className="font-semibold">X</p>
        </div>
        <div className="flex m-4 gap-4 pr-4">
          <StudentEnrollmentCard />
          <EnrollmentChart />
          <Fourcard />
        </div>
        <div className="flex m-4 gap-4 pr-4">
          <PerformanceStats />
          <Events />
          <StarStudents />
        </div>
      </div>
    </div>
  )
}

export default Home;