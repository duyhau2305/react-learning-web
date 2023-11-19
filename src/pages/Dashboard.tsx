import React from 'react';
import { FaHome, FaCalendarAlt, FaFileAlt, FaChalkboardTeacher , FaTasks, FaPencilAlt} from 'react-icons/fa';
import CoursesEnrolled from './CouresEnrolled';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css'

const Dashboard = () => {
  return (
    <div className="bg-gray-100 min-h-screen flex mt-40">
      {/* Sidebar */}
      <div className="w-1/8  p-5 bg-primary text-white">
        <h2 className="font-semibold text-xl mb-5 text-white">My Home</h2>
        <nav className="space-y-3">
          <a href="#" className="flex items-center space-x-2 hover:text-blue-300">
            <FaHome /><span>Dashboard</span>
          </a>
          <a href="#" className="flex items-center space-x-2 hover:text-blue-300">
            <FaCalendarAlt /><span>Calendar</span>
          </a>
          <a href="#" className="flex items-center space-x-2 hover:text-blue-300">
            <FaFileAlt /><span>Private Files</span>
          </a>
          <a href="#" className="flex items-center space-x-2 hover:text-blue-300">
            <FaChalkboardTeacher /><span>My Courses</span>
          </a>
          {/* Additional navigation items */}
          <a href="#" className="flex items-center space-x-2 hover:text-blue-300">
            <FaTasks /><span>Assignments</span>
          </a>
          <a href="#" className="flex items-center space-x-2 hover:text-blue-300">
            <FaPencilAlt /><span>Exams</span>
          </a>
        </nav>
        
      </div>

      {/* Main Content Area */}
      <div className=" w-5/8 flex-1 ">
        <CoursesEnrolled />
        {/* Insert other components like CourseDetail or additional content here */}
      </div>

      {/* Right Sidebar for Calendar or Other Widgets */}
      <div className=" w-2/8 bg-white p-5">
        <Calendar/>
      </div>
    </div>
  );
};
export default Dashboard;