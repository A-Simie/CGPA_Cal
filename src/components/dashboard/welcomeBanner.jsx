import { ChevronLeft, ChevronRight } from "lucide-react";

const WelcomeBanner = () => {
  return (
    <div className="bg-gray-100 p-6 rounded-lg flex justify-between items-center shadow-md">
      {/* Left Section - Greeting & Course Progress */}
      <div>
        <h2 className="text-2xl font-bold">Hello Josh!</h2>
        <p className="text-gray-600">It&amp;s good to see you again.</p>

        {/* Course Progress */}
        <div className="bg-white p-3 rounded-lg shadow mt-4 flex items-center space-x-3">
          <img src="/flag-icon.png" alt="Flag" className="w-8 h-8" />
          <div>
            <p className="text-sm font-medium">Spanish B2</p>
            <div className="flex items-center space-x-2">
              <div className="w-24 h-2 bg-gray-200 rounded-full">
                <div className="h-full bg-black rounded-full w-4/5"></div>
              </div>
              <span className="text-xs font-semibold">83%</span>
            </div>
          </div>
          <button className="bg-black text-white px-4 py-1 rounded-lg text-sm">
            Continue
          </button>
        </div>
      </div>

      {/* Right Section - Illustration & Navigation Arrows */}
      <div className="flex items-center space-x-3">
        <button className="p-2 rounded-full hover:bg-gray-200">
          <ChevronLeft size={20} />
        </button>
        <button className="p-2 rounded-full hover:bg-gray-200">
          <ChevronRight size={20} />
        </button>
      </div>
    </div>
  );
};

export default WelcomeBanner;
