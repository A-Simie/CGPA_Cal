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
} from "lucide-react";

// Original Sidebar Component (Desktop)
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
        <div className="text-3xl font-bold flex justify-center pb-4">F.</div>

        {/* Scrollable Middle Section */}
        <div
          className="flex flex-col space-y-6 w-full h-[53vh] overflow-y-auto"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          <SidebarIcon icon={<Home size={24} />} text="Home" isOpen={isOpen} />
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
          {/* Add more icons as needed */}
        </div>

        {/* Bottom Section - Logout (Sticky) */}
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

// Mobile Navigation
// eslint-disable-next-line react/prop-types
const MobileNavbar = ({ onSidebarToggle }) => {
  return (
    <div className="md:hidden fixed top-0 left-0 right-0 bg-white shadow-md z-20 flex items-center justify-between p-4">
      <button onClick={onSidebarToggle}>
        <Menu size={24} />
      </button>

      <div className="text-2xl font-bold">F.</div>

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
          <span className="text-3xl font-bold">F.</span>
          <button onClick={onClose}>
            <Menu size={24} />
          </button>
        </div>

        {/* <nav className="mt-8 space-y-2 px-4">
          <SidebarItem icon={<Home />} text="Home" />
          <SidebarItem icon={<GraduationCap />} text="Courses" />
          <SidebarItem icon={<Mail />} text="Messages" />
          <SidebarIcon
            icon={<GraduationCap size={24} />}
            text="Courses"
            isOpen={isOpen}
          />
          <SidebarItem icon={<Settings />} text="Settings" />
          <div className="border-t border-gray-700 pt-4 mt-4">
            <SidebarItem icon={<LogOut />} text="Logout" />
          </div>
          <div className="mt-auto">
            <SidebarIcon
              icon={<LogOut size={24} />}
              text="Logout"
              isOpen={isOpen}
            />
          </div>
        </nav> */}

        {/* Scrollable Middle Section */}
        <div
          className="flex flex-col space-y-6 w-full h-[53vh] overflow-y-auto"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          <SidebarIcon icon={<Home size={24} />} text="Home" isOpen={isOpen} />
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
          {/* Add more icons as needed */}
        </div>

        {/* Bottom Section - Logout (Sticky) */}
        <div className="mt-auto">
          <SidebarIcon
            icon={<LogOut size={24} />}
            text="Logout"
            isOpen={isOpen}
          />
        </div>
      </div>
    </>
  );
};

// const SidebarItem = ({ icon, text }) => {
//   return (
//     <div className="flex items-center space-x-3 p-3 rounded-lg hover:bg-gray-800 transition duration-300 cursor-pointer">
//       {icon}
//       <span>{text}</span>
//     </div>
//   );
// };

// Dashboard with Responsive Navigation
const Dashboard = () => {
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

      {/* Content Area */}
      <div
        className="
          w-full 
          mt-16 md:mt-0 
          md:pl-[9.5rem] 
          p-4 md:p-8
        "
      >
        {/* Dashboard Content */}
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-3xl font-bold">Hello Josh!</h1>
            <p className="text-gray-500">Its good to see you again.</p>
          </div>
          <div className="flex items-center space-x-4">
            <div className="flex flex-col items-center">
              <span className="font-bold text-lg">11</span>
              <span className="text-gray-500">Courses completed</span>
            </div>
            <div className="flex flex-col items-center">
              <span className="font-bold text-lg">4</span>
              <span className="text-gray-500">Courses in progress</span>
            </div>
          </div>
        </div>

        {/* Rest of your dashboard content */}
        <div className="space-y-4">
          <div className="bg-white border rounded-lg p-4">
            <h2 className="text-xl font-semibold mb-4">Current Course</h2>
            <div className="flex justify-between items-center">
              <div className="flex items-center space-x-4">
                <div className="bg-yellow-100 p-2 rounded-lg">🇪🇸</div>
                <div>
                  <h3 className="font-medium">Spanish B2</h3>
                  <p className="text-gray-500">By Alejandro Velazquez</p>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <span className="text-green-500">83%</span>
                <button className="bg-black text-white px-4 py-2 rounded-lg">
                  Continue
                </button>
              </div>
            </div>
          </div>

          <div className="bg-white border rounded-lg p-4">
            <h2 className="text-xl font-semibold mb-4">Courses</h2>
            <div className="space-y-3">
              <div className="flex justify-between items-center">
                <div className="flex items-center space-x-4">
                  <div className="bg-gray-100 p-2 rounded-lg">🎨</div>
                  <div>
                    <h3 className="font-medium">Learn Figma</h3>
                    <p className="text-gray-500">By Christopher Morgan</p>
                  </div>
                </div>
                <span className="text-yellow-500">★ 4.9</span>
              </div>
              <div className="flex justify-between items-center">
                <div className="flex items-center space-x-4">
                  <div className="bg-gray-100 p-2 rounded-lg">📷</div>
                  <div>
                    <h3 className="font-medium">Analog Photography</h3>
                    <p className="text-gray-500">By Gordon Norman</p>
                  </div>
                </div>
                <span className="text-yellow-500">★ 4.7</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
