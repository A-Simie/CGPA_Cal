/* eslint-disable react/prop-types */

const CourseCard = ({
  title,
  instructor,
  progress,
  duration,
  rating,
  isCurrent,
}) => {
  return (
    <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
      <div className="flex items-center space-x-4">
        <div className="w-12 h-12 bg-gray-200 rounded-full"></div>
        <div>
          <h3 className="font-medium">{title}</h3>
          <p className="text-gray-500 text-sm">{instructor}</p>
          {progress && (
            <div className="w-16 h-2 bg-gray-200 rounded-full mt-2">
              <div
                className="h-full bg-black rounded-full"
                style={{ width: `${progress}%` }}
              ></div>
            </div>
          )}
        </div>
      </div>
      <div className="flex items-center space-x-4">
        <p className="text-gray-500">{duration}</p>
        <div className="flex items-center">
          <span className="text-yellow-500">★</span>
          <span className="ml-1 text-gray-700">{rating}</span>
        </div>
        <button className="px-4 py-2 bg-white text-gray-950 text-sm border border-black rounded-lg">
          {isCurrent !== true ? "Continue" : "View Course"}
        </button>
      </div>
    </div>
  );
};

export default CourseCard;
