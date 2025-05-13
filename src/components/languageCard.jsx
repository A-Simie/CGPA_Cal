/* eslint-disable react/prop-types */
const LanguageCard = ({ languageImage, title, instructor, progress }) => {
  return (
    <>
      {/* Mobile layout (hidden on md and above) */}
      <div className="block md:hidden">
        <div className="bg-gray-100 border rounded-lg p-3">
          {/* Top row: Language icon, title and instructor */}
          <div className="flex items-center space-x-3 mb-3">
            <div className="bg-white p-1.5 rounded-lg">
              <img src={languageImage} alt={title} className="w-4 h-4" />
            </div>
            <div>
              <h3 className="font-bold text-sm text-gray-900">{title}</h3>
              <p className="text-xs text-gray-700">by {instructor}</p>
            </div>
          </div>

          {/* Middle row: Progress circle */}
          <div className="flex justify-center my-2">
            <div className="relative size-8">
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
                  className="stroke-current text-gray-200"
                  strokeWidth="2"
                ></circle>

                <circle
                  cx="18"
                  cy="18"
                  r="16"
                  fill="none"
                  className="stroke-current text-gray-900"
                  strokeWidth="2"
                  strokeDasharray="100"
                  strokeDashoffset={100 - progress}
                  strokeLinecap="round"
                ></circle>
              </svg>

              <div className="absolute top-1/2 start-1/2 transform -translate-y-1/2 -translate-x-1/2">
                <span className="text-center text-xs font-bold text-gray-400">
                  {progress}%
                </span>
              </div>
            </div>
          </div>

          {/* Bottom row: Navigation and continue button */}
          <div className="flex items-center justify-between mt-3">
            <div className="flex">
              <div className="flex items-center justify-center px-2 h-6 me-2 text-xs font-medium text-gray-500 bg-white border border-gray-300 rounded-3xl hover:bg-gray-100 hover:text-gray-700">
                <svg
                  className="w-3 h-3 rtl:rotate-180"
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
              <div className="flex items-center justify-center px-2 h-6 text-xs font-medium text-gray-500 bg-white border border-gray-300 rounded-3xl hover:bg-gray-100 hover:text-gray-700">
                <svg
                  className="w-3 h-3 rtl:rotate-180"
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
            <button className="bg-black text-white px-3 py-1 text-xs rounded-lg">
              Continue
            </button>
          </div>
        </div>
      </div>

      {/* Desktop/tablet layout (hidden on small screens, visible on md and above) */}
      <div className="hidden md:block">
        <div className="bg-gray-100 border rounded-lg p-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-4">
              <div className="bg-white p-2 rounded-lg">
                <img src={languageImage} alt={title} className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-black text-gray-900">{title}</h3>
                <p className="text-gray-900">by {instructor}</p>
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
                      className="stroke-current text-gray-200"
                      strokeWidth="2"
                    ></circle>

                    <circle
                      cx="18"
                      cy="18"
                      r="16"
                      fill="none"
                      className="stroke-current text-gray-900"
                      strokeWidth="2"
                      strokeDasharray="100"
                      strokeDashoffset={100 - progress}
                      strokeLinecap="round"
                    ></circle>
                  </svg>

                  <div className="absolute top-1/2 start-1/2 transform -translate-y-1/2 -translate-x-1/2">
                    <span className="text-center text-sm font-bold text-gray-400">
                      {progress}%
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
                <div className="flex items-center justify-center px-3 h-8 me-3 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-3xl hover:bg-gray-100 hover:text-gray-700">
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
                <div className="flex items-center justify-center px-3 h-8 me-3 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-3xl hover:bg-gray-100 hover:text-gray-700">
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
    </>
  );
};

export default LanguageCard;
