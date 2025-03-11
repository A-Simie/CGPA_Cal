import { useState } from "react";
import {
  Home,
  GraduationCap,
  Mail,
  Settings,
  LogOut,
  Menu,
} from "lucide-react";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative">
      {/* Background overlay when sidebar is expanded */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm transition-all duration-300"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Sidebar Container */}
      <div
        className={`fixed top-0 left-0 h-full bg-black text-white transition-all duration-300 p-5 rounded-r-2xl 
        ${isOpen ? "w-64 shadow-2xl" : "w-20"}`}
      >
        {/* Menu Toggle Button */}
        <button
          className="absolute top-5 right-5 p-2 rounded-full bg-gray-800 hover:bg-gray-700"
          onClick={() => setIsOpen(!isOpen)}
        >
          <Menu size={24} />
        </button>

        {/* Sidebar Content */}
        <div className="flex flex-col items-center mt-10 space-y-8">
          {/* Logo */}
          <div className="text-3xl font-bold">F.</div>

          {/* Navigation Icons */}
          <div className="flex flex-col space-y-6 flex-1 w-full">
            <SidebarIcon
              icon={<Home size={24} />}
              text="Home"
              isOpen={isOpen}
            />
            <SidebarIcon
              icon={<GraduationCap size={24} />}
              text="Courses"
              isOpen={isOpen}
            />
            <SidebarIcon
              icon={<Mail size={24} />}
              text="Messages"
              isOpen={isOpen}
            />
            <SidebarIcon
              icon={<Settings size={24} />}
              text="Settings"
              isOpen={isOpen}
            />
          </div>

          {/* Logout Icon */}
          <SidebarIcon
            icon={<LogOut size={24} />}
            text="Logout"
            isOpen={isOpen}
          />
        </div>
      </div>
    </div>
  );
};

// Sidebar Icon Component
// eslint-disable-next-line react/prop-types
const SidebarIcon = ({ icon, text, isOpen }) => {
  return (
    <div className="flex items-center space-x-3 p-3 rounded-lg hover:bg-gray-700 transition duration-300 cursor-pointer w-full">
      {icon}
      {isOpen && <span className="text-lg">{text}</span>}
    </div>
  );
};

export default Sidebar;
