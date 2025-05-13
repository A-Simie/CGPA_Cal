import { useState } from "react";
import MaleIcon from "./../../assets/Illustration.png";
import Spain from "../../assets/spain-svgrepo-com.svg";
import LearningChart from "../../components/learningChart";
import CourseCard from "../../components/courseCard";
import CardGrid from "../../components/cardGrid";

const Dashboard = () => {
  const chartData = [
    { day: "mon", hours: 0 },
    { day: "tue", hours: 1.5 },
    { day: "wed", hours: 2.5 },
    { day: "thu", hours: 1 },
    { day: "fri", hours: 4 },
    { day: "sat", hours: 3 },
    { day: "sun", hours: 2 },
  ];
  const [courseList] = useState([
    {
      title: "Learn Figma",
      instructor: "by Christopher Morgan",
      duration: "6h 30min",
      rating: 4.9,
      isCurrent: true,
    },
    {
      title: "Analog Photography",
      instructor: "by Gordon Norman",
      duration: "3h 15min",
      rating: 4.7,
      isCurrent: false,
    },
    {
      title: "Master Instagram",
      instructor: "by Sophie Gill",
      duration: "7h 40min",
      rating: 4.6,
      isCurrent: false,
    },
    {
      title: "Basics of Drawing",
      instructor: "by Jean Tate",
      duration: "11h 30min",
      rating: 4.8,
      isCurrent: true,
    },
    {
      title: "Photoshop - Essence",
      instructor: "by David Green",
      duration: "5h 35min",
      rating: 4.7,
      isCurrent: true,
    },
  ]);
  const completedCourses = courseList.filter(
    (course) => !course.isCurrent
  ).length;
  const ongoingCourses = courseList.filter((course) => course.isCurrent).length;

  // Create the card data dynamically
  const cardData = [
    {
      number: ongoingCourses,
      description: "Courses in Progress",
    },
    {
      number: completedCourses,
      description: "Courses Completed",
    },
  ];

  return (
    <div className="mt-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Dashboard Content */}
        <div className="space-y-4">
          <div className="bg-gray-100 border rounded-lg p-4 ">
            <div className="flex justify-between items-center">
              <div className="flex items-center space-x-5">
                <div>
                  <h3 className="font-black text-4xl text-gray-900">
                    Hello Josh!
                  </h3>
                  <p className="text-gray-900">
                    It&apos;s good to see you again
                  </p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <img className="-mt-[3.5rem] -mb-4" src={MaleIcon} alt="" />
              </div>
            </div>
          </div>

          <div className="bg-gray-100 border rounded-lg p-4">
            <div className="flex justify-between items-center">
              <div className="flex items-center space-x-4">
                <div className="bg-white p-2 rounded-lg">
                  <img src={Spain} alt="spain" className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-black text-gray-900">Spanish B2</h3>
                  <p className="text-gray-900">by Alejandro Velazquez</p>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <span className="text-green-500">
                  <div className="relative size-10">
                    <svg
                      className="size-full -rotate-90"
                      viewBox="0 0 36 36"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <circle
                        cx="18"
                        cy="18"
                        r="16"
                        fill="none"
                        className="stroke-current text-gray-200 "
                        strokeWidth="2"
                      ></circle>

                      <circle
                        cx="18"
                        cy="18"
                        r="16"
                        fill="none"
                        className="stroke-current text-gray-900 "
                        strokeWidth="2"
                        strokeDasharray="100"
                        strokeDashoffset="17"
                        strokeLinecap="round"
                      ></circle>
                    </svg>

                    <div className="absolute top-1/2 start-1/2 transform -translate-y-1/2 -translate-x-1/2">
                      <span className="text-center text-sm font-bold text-gray-400">
                        83%
                      </span>
                    </div>
                  </div>
                </span>
                <button className="bg-black text-white px-4 py-2 rounded-lg">
                  Continue
                </button>
              </div>
              <div className="flex items-center space-x-4">
                <div className="flex">
                  <div className="flex items-center justify-center px-3 h-8 me-3 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-3xl hover:bg-gray-100 hover:text-gray-700 ">
                    <svg
                      className="w-3.5 h-3.5 me-2 rtl:rotate-180"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 14 10"
                    >
                      <path
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M13 5H1m0 0 4 4M1 5l4-4"
                      />
                    </svg>
                  </div>
                  <div className="flex items-center justify-center px-3 h-8 me-3 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-3xl hover:bg-gray-100 hover:text-gray-700 ">
                    <svg
                      className="w-3.5 h-3.5 ms-2 rtl:rotate-180"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 14 10"
                    >
                      <path
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M1 5h12m0 0L9 1m4 4L9 9"
                      />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Rest of your dashboard content */}
        <div className="space-y-4">
          <form className="flex items-center justify-between ">
            <label className="sr-only">Search</label>
            <div className="relative w-3/4">
              <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                <svg
                  className="w-4 h-4 me-2"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 20 20"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                  />
                </svg>
              </div>
              <input
                type="text"
                id="voice-search"
                className="bg-gray-100 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5 "
                placeholder="Search"
                required
              />
              <button
                type="button"
                className="absolute inset-y-0 end-0 flex items-center pe-3"
              >
                <svg
                  className="w-4 h-4 text-gray-500 dark:text-gray-400 hover:text-gray-900 "
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 16 20"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M15 7v3a5.006 5.006 0 0 1-5 5H6a5.006 5.006 0 0 1-5-5V7m7 9v3m-3 0h6M7 1h2a3 3 0 0 1 3 3v5a3 3 0 0 1-3 3H7a3 3 0 0 1-3-3V4a3 3 0 0 1 3-3Z"
                  />
                </svg>
              </button>
            </div>

            <button
              id="dropdownNotificationButton"
              data-dropdown-toggle="dropdownNotification"
              className="relative inline-flex items-center text-sm font-medium text-center text-gray-500 hover:text-gray-900 focus:outline-none "
              type="button"
            >
              <svg
                className="w-5 h-5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 14 20"
              >
                <path d="M12.133 10.632v-1.8A5.406 5.406 0 0 0 7.979 3.57.946.946 0 0 0 8 3.464V1.1a1 1 0 0 0-2 0v2.364a.946.946 0 0 0 .021.106 5.406 5.406 0 0 0-4.154 5.262v1.8C1.867 13.018 0 13.614 0 14.807 0 15.4 0 16 .538 16h12.924C14 16 14 15.4 14 14.807c0-1.193-1.867-1.789-1.867-4.175ZM3.823 17a3.453 3.453 0 0 0 6.354 0H3.823Z" />
              </svg>

              <div className="absolute block w-3 h-3 bg-red-500 border-2 border-white rounded-full -top-0.5 start-2.5"></div>
            </button>

            <button
              id="dropdownUserAvatarButton"
              data-dropdown-toggle="dropdownAvatar"
              className="flex text-sm bg-gray-800 rounded-full md:me-0 focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600"
              type="button"
            >
              <span className="sr-only">Open user menu</span>
              <img
                className="w-8 h-8 rounded-full"
                src="/docs/images/people/profile-picture-3.jpg"
                alt="user photo"
              />
            </button>
          </form>
          <CardGrid cards={cardData} />
        </div>

        {/* leave this here for now */}

        <div className="bg-white border rounded-lg p-4">
          <h2 className="text-xl font-semibold mb-4">Courses</h2>
          <div className="space-y-3">
            {courseList.map((course, index) => (
              <CourseCard
                key={index}
                title={course.title}
                instructor={course.instructor}
                duration={course.duration}
                rating={course.rating}
                isCurrent={course.isCurrent}
              />
            ))}{" "}
          </div>
        </div>
        <div className="space-y-4 md:-mt-[12vh]">
          <LearningChart data={chartData} viewType="Weekly" />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
