import Sidebar from "../../components/dashboardComp/sidebar";
import WelcomeBanner from "../../components/dashboardComp/welcomeBanner";

const Dashboard = () => {
  return (
    <div className="flex">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <div className="flex-1 p-6 w-full overflow-x-hidden transition-all duration-300  md:pl-32">
        {/* Top Section */}
        <div className="grid grid-cols-1 x lg:grid-cols-2 gap-6">
          <WelcomeBanner />
          {/* <StatisticsPanel /> */}
        </div>

        {/* Bottom Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6 mt-6">
          {/* <CourseList />
          <PremiumAd /> */}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
