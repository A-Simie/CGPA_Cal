import { Home, User, Mail, Settings, Book } from "lucide-react";

// Sidebar Component
const Sidebar = () => {
  return (
    <div className="bg-black w-20 h-screen fixed left-0 top-0 flex flex-col items-center py-6">
      <div className="text-white font-bold text-2xl mb-8">F.</div>
      <nav className="space-y-6">
        <div className="text-white/50 hover:text-white cursor-pointer">
          <Home size={24} />
        </div>
        <div className="text-white/50 hover:text-white cursor-pointer">
          <Book size={24} />
        </div>
        <div className="text-white/50 hover:text-white cursor-pointer">
          <User size={24} />
        </div>
        <div className="text-white/50 hover:text-white cursor-pointer">
          <Mail size={24} />
        </div>
        <div className="text-white/50 hover:text-white cursor-pointer absolute bottom-6">
          <Settings size={24} />
        </div>
      </nav>
    </div>
  );
};

// Course Card Component
// eslint-disable-next-line react/prop-types
const CourseCard = ({ icon, title, instructor, duration, rating }) => {
  return (
    <div className="bg-white border rounded-lg p-4 flex items-center justify-between mb-4">
      <div className="flex items-center">
        <div className="mr-4 bg-gray-100 p-2 rounded-lg">{icon}</div>
        <div>
          <h3 className="font-semibold">{title}</h3>
          <p className="text-gray-500 text-sm">{instructor}</p>
        </div>
      </div>
      <div className="flex items-center">
        <span className="mr-4 text-gray-500">{duration}</span>
        <span className="text-yellow-500">★ {rating}</span>
        <button className="ml-4 bg-black text-white px-4 py-2 rounded-lg text-sm">
          View course
        </button>
      </div>
    </div>
  );
};

// Dashboard Component
const LearningDashboard = () => {
  return (
    <div className="ml-20 p-8">
      <Sidebar />

      {/* Top Section */}
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-3xl font-bold">Hello Josh!</h1>
          <p className="text-gray-500">It&apos;s good to see you again.</p>
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

      {/* Current Course */}
      <div className="bg-white border rounded-lg p-4 mb-8 flex items-center justify-between">
        <div className="flex items-center">
          <div className="mr-4 bg-yellow-100 p-2 rounded-lg">🇪🇸</div>
          <div>
            <h3 className="font-semibold">Spanish B2</h3>
            <p className="text-gray-500">By Alejandro Velazquez</p>
          </div>
        </div>
        <div className="flex items-center">
          <span className="mr-4 text-green-500">83%</span>
          <button className="bg-black text-white px-4 py-2 rounded-lg text-sm">
            Continue
          </button>
        </div>
      </div>

      {/* Courses Section */}
      <div>
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl font-bold">Courses</h2>
          <div className="space-x-4">
            <button className="text-black font-semibold">All Courses</button>
            <button className="text-gray-500">The Newest</button>
            <button className="text-gray-500">Top Rated</button>
            <button className="text-gray-500">Most Popular</button>
          </div>
        </div>

        {/* Course List */}
        <CourseCard
          icon="🎨"
          title="Learn Figma"
          instructor="Christopher Morgan"
          duration="6h 30min"
          rating="4.9"
        />
        <CourseCard
          icon="📷"
          title="Analog Photography"
          instructor="Gordon Norman"
          duration="3h 15min"
          rating="4.7"
        />
        <CourseCard
          icon="📱"
          title="Master Instagram"
          instructor="Sophie Gill"
          duration="7h 40min"
          rating="4.6"
        />
      </div>

      {/* Learning Hours Graph */}
      <div className="bg-white border rounded-lg p-4 mt-8">
        <h3 className="font-semibold mb-4">Learning Hours</h3>
        {/* Placeholder for graph - you'd typically use a charting library here */}
        <div className="h-32 bg-gray-100 flex items-center justify-center text-gray-500">
          Weekly Learning Hours Graph
        </div>
      </div>

      {/* Premium Upsell */}
      <div className="bg-blue-50 border-2 border-blue-100 rounded-lg p-6 mt-8 flex items-center justify-between">
        <div className="flex items-center">
          <div className="mr-6 bg-blue-100 p-4 rounded-full">🧠</div>
          <div>
            <h3 className="font-bold">Learn even more!</h3>
            <p className="text-gray-600">
              Unlock premium features only for $9.99 per month.
            </p>
          </div>
        </div>
        <button className="bg-black text-white px-6 py-3 rounded-lg">
          Go Premium
        </button>
      </div>
    </div>
  );
};

export default LearningDashboard;
