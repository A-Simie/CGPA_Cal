import { useState } from "react";
import {
  Home,
  GraduationCap,
  Mail,
  Settings,
  LogOut,
  ChevronRight,
  ChevronLeft,
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
        className={`fixed left-3 top-3 min-h-[calc(100vh-1.5rem)] bg-black text-white transition-all duration-300 rounded-2xl py-6 px-2 flex flex-col justify-between
        ${isOpen ? "w-64 shadow-2xl px-5" : "w-20"}`}
      >
        {/* Top Section */}
        <div className="flex flex-col items-center space-y-8">
          {/* Logo */}
          <div className="text-3xl font-bold">F.</div>

          {/* Navigation Icons */}

          <div
            className="flex flex-col space-y-6 w-full h-[70vh] overflow-y-auto"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            <SidebarIcon
              icon={<Home size={24} />}
              text="Home"
              isOpen={isOpen}
            />
            <SidebarIcon
              icon={<Home size={24} />}
              text="Home"
              isOpen={isOpen}
            />
            <SidebarIcon
              icon={<Home size={24} />}
              text="Home"
              isOpen={isOpen}
            />
            <SidebarIcon
              icon={<Home size={24} />}
              text="Home"
              isOpen={isOpen}
            />
            <SidebarIcon
              icon={<Home size={24} />}
              text="Home"
              isOpen={isOpen}
            />
            <SidebarIcon
              icon={<Home size={24} />}
              text="Home"
              isOpen={isOpen}
            />
            <SidebarIcon
              icon={<Home size={24} />}
              text="Home"
              isOpen={isOpen}
            />
            <SidebarIcon
              icon={<Home size={24} />}
              text="Home"
              isOpen={isOpen}
            />
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
        </div>

        {/* Bottom Section - Logout */}
        <div className="mt-auto">
          <SidebarIcon
            icon={<LogOut size={24} />}
            text="Logout"
            isOpen={isOpen}
          />
        </div>
      </div>

      {/* Toggle Button */}
      <button
        className={`absolute top-1/2 transform -translate-y-1/2 p-2 bg-gray-800 hover:bg-gray-700 rounded-full shadow-lg transition-all duration-300
        ${isOpen ? "left-[15.5rem]" : "left-[4.5rem]"}`}
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? (
          <ChevronLeft className="text-white" size={24} />
        ) : (
          <ChevronRight className="text-white" size={24} />
        )}
      </button>
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
