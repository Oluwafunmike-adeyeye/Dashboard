



const CheckboxMenu = () => {
  return (
    <div className="pl-10 pr-4 pt-6 text-sm">
      <div className="mb-8">
        <label className="flex items-center justify-between mb-3">
          <span className="">Student Enrollment</span>
          <input type="checkbox" className="form-checkbox h-5 w-5 text-blue-700 bg-gray-300" />
        </label>
        <label className="flex items-center justify-between mb-3">
          <span className="">Enrollment by Grade</span>
          <input type="checkbox" className="form-checkbox h-5 w-5 text-blue-700 bg-gray-300" />
        </label>
      </div>

      <div className="mb-8">
        <label className="flex items-center justify-between mb-2 font-bold">
          <h3>Performance Statistics</h3>
          <input type="checkbox" className="form-checkbox h-5 w-5 text-blue-700 bg-gray-300" />
        </label>
        <div className="space-y-2">
          <label className="flex items-center justify-between mb-3">
            <span className="">Show Staff Stats</span>
            <input type="checkbox" className="form-checkbox h-5 w-5 text-blue-700 bg-gray-300" />
          </label>
          <label className="flex items-center justify-between mb-3">
            <span className="">Show Recent Activities</span>
            <input type="checkbox" className="form-checkbox h-5 w-5 text-blue-700 bg-gray-300" />
          </label>
          <label className="flex items-center justify-between mb-3">
            <span className="">Show Subjects Stats</span>
            <input type="checkbox" className="form-checkbox h-5 w-5 text-blue-700 bg-gray-300" />
          </label>
          <label className="flex items-center justify-between mb-3">
            <span className="">Show Class Stats</span>
            <input type="checkbox" className="form-checkbox h-5 w-5 text-blue-700 bg-gray-300" />
          </label>
        </div>
      </div>

      <div>
        <label className="flex items-center justify-between mb-2 font-bold">
          <h3>Events & Schedules</h3>
          <input type="checkbox" className="form-checkbox h-5 w-5 text-blue-700 bg-gray-300" />
        </label>
        <div className="space-y-2">
          <label className="flex items-center justify-between mb-3">
            <span className="">Show General Events</span>
            <input type="checkbox" className="form-checkbox h-5 w-5 text-blue-700 bg-gray-300" />
          </label>
          <label className="flex items-center justify-between mb-3">
            <span className="">Show Staff Events</span>
            <input type="checkbox" className="form-checkbox h-5 w-5 text-blue-700 bg-gray-300" />
          </label>
          <label className="flex items-center justify-between mb-3">
            <span className="">Show Student Events</span>
            <input type="checkbox" className="form-checkbox h-5 w-5 text-blue-700 bg-gray-300" />
          </label>
          <label className="flex items-center justify-between mb-3">
            <span className="">Show Holiday Events</span>
            <input type="checkbox" className="form-checkbox h-5 w-5 text-blue-700 bg-gray-300" />
          </label>
        </div>
      </div>
    </div>
  );
};

export default CheckboxMenu;
