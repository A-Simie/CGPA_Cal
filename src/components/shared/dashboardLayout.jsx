// Layout.jsx
import { useState } from "react";
import {
  Home,
  GraduationCap,
  Mail,
  Settings,
  LogOut,
  ChevronRight,
  ChevronLeft,
  Menu,
  Search,
  Bell,
  User,
  Calculator,
} from "lucide-react";
import { Link, Outlet } from "react-router-dom";

// Sidebar Icon Component
// eslint-disable-next-line react/prop-types
const SidebarIcon = ({ icon, text, isOpen, to }) => {
  return (
    <Link to={to} className="w-full">
      <div className="flex items-center space-x-3 p-3 rounded-lg hover:bg-gray-700 transition duration-300 cursor-pointer w-full">
        {icon}
        {isOpen && <span className="text-lg">{text}</span>}
      </div>
    </Link>
  );
};

// Desktop Sidebar Component
const DesktopSidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="hidden md:block relative">
      {/* Background overlay when sidebar is expanded */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm transition-all duration-300"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Sidebar Container */}
      <div
        className={`fixed left-3 top-3 h-[95vh] bg-black text-white transition-all duration-300 rounded-2xl py-6 px-2 flex flex-col 
        ${isOpen ? "w-64 shadow-2xl px-5" : "w-20"}`}
      >
        {/* Top Section - Logo */}
        <Link to="/" className="text-3xl font-bold flex justify-center pb-4">
          F.
        </Link>

        {/* Scrollable Middle Section */}
        <div
          className="flex flex-col space-y-6 w-full h-[53vh] overflow-y-auto"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          <SidebarIcon
            icon={<Home size={24} />}
            text="Home"
            isOpen={isOpen}
            to="/dashboard"
          />
          <SidebarIcon
            icon={<GraduationCap size={24} />}
            text="Courses"
            isOpen={isOpen}
            to="/courses"
          />
          <SidebarIcon
            icon={<Mail size={24} />}
            text="Messages"
            isOpen={isOpen}
            to="/messages"
          />
          <SidebarIcon
            icon={<Settings size={24} />}
            text="Settings"
            isOpen={isOpen}
            to="/settings"
          />
          <SidebarIcon
            icon={<Calculator size={24} />}
            text="CGPA Calculator"
            isOpen={isOpen}
            to="/cgpa_calculator"
          />
        </div>

        {/* Bottom Section - Logout (Sticky) */}
        <div className="mt-auto">
          <SidebarIcon
            icon={<LogOut size={24} />}
            text="Logout"
            isOpen={isOpen}
            to="/"
          />
        </div>
      </div>

      {/* Toggle Button */}
      <button
        className={`fixed top-1/4 transform -translate-y-1/2 p-2 bg-gray-800 hover:bg-gray-700 rounded-full shadow-lg transition-all duration-300
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

// Mobile Navigation
// eslint-disable-next-line react/prop-types
const MobileNavbar = ({ onSidebarToggle }) => {
  return (
    <div className="md:hidden fixed top-0 left-0 right-0 bg-white shadow-md z-20 flex items-center justify-between p-4">
      <button onClick={onSidebarToggle}>
        <Menu size={24} />
      </button>

      <Link to="/" className="text-2xl font-bold">
        F.
      </Link>

      <div className="flex items-center space-x-4">
        <button>
          <Search size={20} />
        </button>
        <button>
          <Bell size={20} />
        </button>
        <button>
          <User size={20} className="rounded-full" />
        </button>
      </div>
    </div>
  );
};

// Mobile Sidebar
// eslint-disable-next-line react/prop-types
const MobileSidebar = ({ isOpen, onClose }) => {
  return (
    <>
      {/* Overlay */}
      {isOpen && (
        <div
          className="md:hidden fixed inset-0 bg-black bg-opacity-50 z-30"
          onClick={onClose}
        />
      )}

      {/* Sidebar */}
      <div
        className={`
          md:hidden fixed top-0 left-0 h-full w-64 bg-black text-white 
          transform transition-transform duration-300 z-40
          ${isOpen ? "translate-x-0" : "-translate-x-full"}
        `}
      >
        <div className="p-6 flex justify-between items-center">
          <Link to="/" className="text-3xl font-bold">
            F.
          </Link>
          <button onClick={onClose}>
            <Menu size={24} />
          </button>
        </div>

        {/* Scrollable Middle Section */}
        <div
          className="flex flex-col space-y-6 w-full h-[53vh] overflow-y-auto px-4"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          <SidebarIcon
            icon={<Home size={24} />}
            text="Home"
            isOpen={true}
            to="/dashboard"
          />
          <SidebarIcon
            icon={<GraduationCap size={24} />}
            text="Courses"
            isOpen={true}
            to="/courses"
          />
          <SidebarIcon
            icon={<Mail size={24} />}
            text="Messages"
            isOpen={true}
            to="/messages"
          />
          <SidebarIcon
            icon={<Settings size={24} />}
            text="Settings"
            isOpen={true}
            to="/settings"
          />
        </div>

        {/* Bottom Section - Logout (Sticky) */}
        <div className="mt-auto px-4 pb-6">
          <SidebarIcon
            icon={<LogOut size={24} />}
            text="Logout"
            isOpen={true}
            to="/"
          />
        </div>
      </div>
    </>
  );
};

// Main Layout that wraps all pages
const Layout = () => {
  const [isMobileSidebarOpen, setIsMobileSidebarOpen] = useState(false);

  const toggleMobileSidebar = () => {
    setIsMobileSidebarOpen(!isMobileSidebarOpen);
  };

  return (
    <div className="flex">
      {/* Desktop Sidebar */}
      <DesktopSidebar />

      {/* Mobile Navigation */}
      <MobileNavbar onSidebarToggle={toggleMobileSidebar} />

      {/* Mobile Sidebar */}
      <MobileSidebar
        isOpen={isMobileSidebarOpen}
        onClose={() => setIsMobileSidebarOpen(false)}
      />

      {/* Content Area - This will render the current route's component */}
      <div
        className="
          w-full 
          mt-16 md:mt-0 
          md:pl-[9.5rem] 
          p-4 md:p-8
        "
      >
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;
