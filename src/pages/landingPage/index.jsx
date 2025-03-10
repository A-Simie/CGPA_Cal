import Sidebar from "../../components/dashboard/sidebar";
import WelcomeBanner from "../../components/dashboard/welcomeBanner";

const LandingPage = () => {
  return (
    <div className="grid grid-cols-[auto,1fr] ">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content Area */}
      <div className="grid grid-rows-[auto,1fr] p-6">
        {/* Welcome Banner */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-start">
          <WelcomeBanner />
          {/* Empty Div for spacing on large screens */}
          <div className="hidden lg:block"></div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
