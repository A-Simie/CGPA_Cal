import { useState } from "react";

const Transcript = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [isSearching, setIsSearching] = useState(false);
  const [isVerifying, setIsVerifying] = useState(false);
  const [isConnecting, setIsConnecting] = useState(false);
  const [transcriptFound, setTranscriptFound] = useState(null);
  const [otpVerified, setOtpVerified] = useState(false);
  const [walletConnected, setWalletConnected] = useState(false);
  const [error, setError] = useState("");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [activityLog, setActivityLog] = useState([]);

  // Mock schools data for dropdown
  const schools = ["Sample University", "Tech Institute", "Global College"];

  // Mock transcript data for search
  const mockTranscripts = [
    {
      id: "12345",
      school: "Sample University",
      year: "2023",
      faculty: "Engineering",
      department: "Computer Science",
      studentName: "John Doe",
    },
    {
      id: "67890",
      school: "Tech Institute",
      year: "2022",
      faculty: "Science",
      department: "Physics",
      studentName: "Jane Smith",
    },
  ];

  // Mock wallet providers
  const walletProviders = [
    {
      name: "MetaMask",
      svg: `<svg aria-hidden="true" class="h-6" viewBox="0 0 40 38" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M39.0728 0L21.9092 12.6999L25.1009 5.21543L39.0728 0Z" fill="#E17726"/><path d="M0.966797 0.0151367L14.9013 5.21656L17.932 12.7992L0.966797 0.0151367Z" fill="#E27625"/><path d="M32.1656 27.0093L39.7516 27.1537L37.1004 36.1603L27.8438 33.6116L32.1656 27.0093Z" fill="#E27625"/><path d="M7.83409 27.0093L12.1399 33.6116L2.89876 36.1604L0.263672 27.1537L7.83409 27.0093Z" fill="#E27625"/><path d="M17.5203 10.8677L17.8304 20.8807L8.55371 20.4587L11.1924 16.4778L11.2258 16.4394L17.5203 10.8677Z" fill="#E27625"/><path d="M22.3831 10.7559L28.7737 16.4397L28.8067 16.4778L31.4455 20.4586L22.1709 20.8806L22.3831 10.7559Z" fill="#E27625"/><path d="M12.4115 27.0381L17.4768 30.9848L11.5928 33.8257L12.4115 27.0381Z" fill="#E27625"/><path d="M27.5893 27.0376L28.391 33.8258L22.5234 30.9847L27.5893 27.0376Z" fill="#E27625"/><path d="M22.6523 30.6128L28.6066 33.4959L23.0679 36.1282L23.1255 34.3884L22.6523 30.6128Z" fill="#D5BFB2"/><path d="M17.3458 30.6143L16.8913 34.3601L16.9286 36.1263L11.377 33.4961L17.3458 30.6143Z" fill="#D5BFB2"/><path d="M15.6263 22.1875L17.1822 25.4575L11.8848 23.9057L15.6263 22.1875Z" fill="#233447"/><path d="M24.3739 22.1875L28.133 23.9053L22.8184 25.4567L24.3739 22.1875Z" fill="#233447"/><path d="M12.8169 27.0049L11.9606 34.0423L7.37109 27.1587L12.8169 27.0049Z" fill="#CC6228"/><path d="M27.1836 27.0049L32.6296 27.1587L28.0228 34.0425L27.1836 27.0049Z" fill="#CC6228"/><path d="M31.5799 20.0605L27.6165 24.0998L24.5608 22.7034L23.0978 25.779L22.1387 20.4901L31.5799 20.0605Z" fill="#CC6228"/><path d="M8.41797 20.0605L17.8608 20.4902L16.9017 25.779L15.4384 22.7038L12.3988 24.0999L8.41797 20.0605Z" fill="#CC6228"/><path d="M8.15039 19.2314L12.6345 23.7816L12.7899 28.2736L8.15039 19.2314Z" fill="#E27525"/><path d="M31.8538 19.2236L27.2061 28.2819L27.381 23.7819L31.8538 19.2236Z" fill="#E27525"/><path d="M17.6412 19.5088L17.8217 20.6447L18.2676 23.4745L17.9809 32.166L16.6254 25.1841L16.625 25.1119L17.6412 19.5088Z" fill="#E27525"/><path d="M22.3562 19.4932L23.3751 25.1119L23.3747 25.1841L22.0158 32.1835L21.962 30.4328L21.75 23.4231L22.3562 19.4932Z" fill="#E27525"/><path d="M27.7797 23.6011L27.628 27.5039L22.8977 31.1894L21.9414 30.5138L23.0133 24.9926L27.7797 23.6011Z" fill="#F5841F"/><path d="M12.2373 23.6011L16.9873 24.9926L18.0591 30.5137L17.1029 31.1893L12.3723 27.5035L12.2373 23.6011Z" fill="#F5841F"/><path d="M10.4717 32.6338L16.5236 35.5013L16.4979 34.2768L17.0043 33.8323H22.994L23.5187 34.2753L23.48 35.4989L29.4935 32.641L26.5673 35.0591L23.0289 37.4894H16.9558L13.4197 35.0492L10.4717 32.6338Z" fill="#C0AC9D"/><path d="M22.2191 30.231L23.0748 30.8354L23.5763 34.8361L22.8506 34.2234H17.1513L16.4395 34.8485L16.9244 30.8357L17.7804 30.231H22.2191Z" fill="#161616"/><path d="M37.9395 0.351562L39.9998 6.53242L38.7131 12.7819L39.6293 13.4887L38.3895 14.4346L39.3213 15.1542L38.0875 16.2779L38.8449 16.8264L36.8347 19.1742L28.5894 16.7735L28.5179 16.7352L22.5762 11.723L37.9395 0.351562Z" fill="#763E1A"/><path d="M2.06031 0.351562L17.4237 11.723L11.4819 16.7352L11.4105 16.7735L3.16512 19.1742L1.15488 16.8264L1.91176 16.2783L0.678517 15.1542L1.60852 14.4354L0.350209 13.4868L1.30098 12.7795L0 6.53265L2.06031 0.351562Z" fill="#763E1A"/><path d="M28.1861 16.2485L36.9226 18.7921L39.7609 27.5398L32.2728 27.5398L27.1133 27.6049L30.8655 20.2912L28.1861 16.2485Z" fill="#F5841F"/><path d="M11.8139 16.2485L9.13399 20.2912L12.8867 27.6049L7.72971 27.5398H0.254883L3.07728 18.7922L11.8139 16.2485Z" fill="#F5841F"/><path d="M25.5283 5.17383L23.0847 11.7736L22.5661 20.6894L22.3677 23.4839L22.352 30.6225H17.6471L17.6318 23.4973L17.4327 20.6869L16.9139 11.7736L14.4707 5.17383H25.5283Z" fill="#F5841F"/></svg>`,
    },
    {
      name: "WalletConnect",
      svg: `<svg aria-hidden="true" class="h-6" viewBox="0 0 512 512" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><defs><radialGradient cx="0%" cy="50%" fx="0%" fy="50%" r="100%" id="radialGradient-1"><stop stop-color="#5D9DF6" offset="0%"></stop><stop stop-color="#006FFF" offset="100%"></stop></radialGradient></defs><g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"><g id="logo"><rect id="base" fill="url(#radialGradient-1)" x="0" y="0" width="512" height="512" rx="256"></rect><path d="M169.209772,184.531136 C217.142772,137.600733 294.857519,137.600733 342.790517,184.531136 L348.559331,190.179285 C350.955981,192.525805 350.955981,196.330266 348.559331,198.676787 L328.82537,217.99798 C327.627045,219.171241 325.684176,219.171241 324.485851,217.99798 L316.547278,210.225455 C283.10802,177.485633 228.89227,177.485633 195.453011,210.225455 L186.951456,218.549188 C185.75313,219.722448 183.810261,219.722448 182.611937,218.549188 L162.877976,199.227995 C160.481326,196.881474 160.481326,193.077013 162.877976,190.730493 L169.209772,184.531136 Z M383.602212,224.489406 L401.165475,241.685365 C403.562113,244.031874 403.562127,247.836312 401.165506,250.182837 L321.971538,327.721548 C319.574905,330.068086 315.689168,330.068112 313.292501,327.721609 C313.292491,327.721599 313.29248,327.721588 313.29247,327.721578 L257.08541,272.690097 C256.486248,272.103467 255.514813,272.103467 254.915651,272.690097 C254.915647,272.690101 254.915644,272.690105 254.91564,272.690108 L198.709777,327.721548 C196.313151,330.068092 192.427413,330.068131 190.030739,327.721634 C190.030725,327.72162 190.03071,327.721606 190.030695,327.721591 L110.834524,250.181849 C108.437875,247.835329 108.437875,244.030868 110.834524,241.684348 L128.397819,224.488418 C130.794468,222.141898 134.680206,222.141898 137.076856,224.488418 L193.284734,279.520668 C193.883897,280.107298 194.85533,280.107298 195.454493,279.520668 C195.454502,279.520659 195.45451,279.520651 195.454519,279.520644 L251.65958,224.488418 C254.056175,222.141844 257.941913,222.141756 260.338618,224.488222 C260.338651,224.488255 260.338684,224.488288 260.338717,224.488321 L316.546521,279.520644 C317.145683,280.107273 318.117118,280.107273 318.71628,279.520644 L374.923175,224.489406 C377.319825,222.142885 381.205562,222.142885 383.602212,224.489406 Z" id="WalletConnect" fill="#FFFFFF" fill-rule="nonzero"></path></g></g></svg>`,
    },
  ];

  // Add activity to log
  const addActivity = (activity, user = "User123") => {
    const timestamp = new Date().toLocaleString("en-US", {
      timeZone: "Africa/Lagos",
      dateStyle: "short",
      timeStyle: "medium",
    });
    const hash = `0x${Math.random().toString(16).slice(2, 10)}...${Math.random()
      .toString(16)
      .slice(2, 10)}`;
    setActivityLog((prev) => [...prev, { activity, user, timestamp, hash }]);
  };

  // Toggle dropdown
  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  // Handle search
  const handleSearch = (e) => {
    e.preventDefault();
    setError("");
    setIsSearching(true);
    addActivity("Search Initiated");
    setTimeout(() => {
      const result = mockTranscripts.find(
        (t) =>
          t.id === searchQuery ||
          t.studentName.toLowerCase().includes(searchQuery.toLowerCase()) ||
          t.school.toLowerCase().includes(searchQuery.toLowerCase())
      );
      if (result) {
        setTranscriptFound(result);
        setIsDropdownOpen(false);
        addActivity("Transcript Found");
      } else {
        setError("Transcript not found. Please check the search query or ID.");
      }
      setIsSearching(false);
    }, 1000);
  };

  // Mock OTP verification
  const handleVerifyOtp = () => {
    setIsVerifying(true);
    addActivity("OTP Verification Initiated");
    setTimeout(() => {
      setOtpVerified(true);
      setIsVerifying(false);
      addActivity("OTP Verified");
    }, 1000);
  };

  // Mock wallet connection
  const handleConnectWallet = (wallet) => {
    setIsConnecting(true);
    addActivity(`Wallet Connection Initiated (${wallet})`);
    setTimeout(() => {
      setWalletConnected(true);
      setIsConnecting(false);
      addActivity(`Wallet Connected (${wallet})`);
    }, 1000);
  };

  // Handle transcript link click
  const handleTranscriptClick = () => {
    addActivity("Transcript Accessed");
  };

  // Handle school selection
  const handleSchoolSelect = (school) => {
    setSearchQuery(school);
    setIsDropdownOpen(false);
  };

  // Navigate back to dashboard (mock)
  const handleBackToDashboard = () => {
    console.log("Navigating back to dashboard");
    // Replace with actual navigation logic, e.g., using react-router-dom
  };

  return (
    <div className="flex flex-col bg-gray-200 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto w-full">
        <h1 className="text-3xl sm:text-4xl font-bold text-center text-gray-800 mb-8 sm:mb-12">
          Scrivta Transcript Request
        </h1>

        {/* Search and Dropdown */}
        {!transcriptFound && (
          <div className="w-full p-6 sm:p-8 bg-gray-800 border border-gray-700 rounded-2xl shadow-2xl transition-all duration-300 hover:shadow-[0_10px_20px_rgba(0,173,181,0.2)] bg-gradient-to-br from-gray-800 to-gray-900">
            <h5 className="mb-4 text-xl sm:text-2xl font-semibold text-white">
              Search for Transcript
            </h5>
            <p className="text-sm sm:text-base font-normal text-gray-400 mb-6">
              Enter your transcript ID or select a school to begin.
            </p>
            <button
              onClick={toggleDropdown}
              className="w-full bg-teal-500 text-white hover:bg-teal-600 focus:ring-4 focus:outline-none focus:ring-teal-300 font-medium rounded-lg text-sm sm:text-base px-6 py-3 text-center inline-flex items-center justify-between mb-6 transition-transform duration-200 hover:scale-[1.02]"
            >
              {searchQuery || "Select School"}
              <svg
                className="w-4 h-4 ms-3"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 10 6"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="m1 1 4 4 4-4"
                />
              </svg>
            </button>

            {/* Dropdown */}
            {isDropdownOpen && (
              <div className="z-10 bg-gray-800 border border-gray-700 rounded-lg shadow-lg w-full sm:w-80 mb-6">
                <div className="p-4">
                  <label htmlFor="input-group-search" className="sr-only">
                    Search
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 start-0 flex items-center ps-4 pointer-events-none">
                      <svg
                        className="w-5 h-5 text-gray-400"
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
                      id="input-group-search"
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      className="block w-full p-3 ps-12 text-sm sm:text-base text-white bg-gray-700 border border-gray-600 rounded-lg focus:ring-teal-500 focus:border-teal-500 placeholder-gray-400 transition-colors duration-200"
                      placeholder="Search by ID, name, or school"
                    />
                  </div>
                </div>
                <ul
                  className="max-h-60 px-4 pb-4 overflow-y-auto text-sm sm:text-base text-white"
                  aria-labelledby="dropdownSearchButton"
                >
                  {schools.map((school) => (
                    <li key={school}>
                      <div
                        className="flex items-center ps-3 rounded-sm hover:bg-gray-600 cursor-pointer transition-colors duration-200"
                        onClick={() => handleSchoolSelect(school)}
                      >
                        <input
                          id={`checkbox-item-${school}`}
                          type="checkbox"
                          checked={searchQuery === school}
                          onChange={() => handleSchoolSelect(school)}
                          className="w-5 h-5 text-teal-500 bg-gray-700 border-gray-600 rounded-sm focus:ring-teal-500 focus:ring-2"
                        />
                        <label
                          htmlFor={`checkbox-item-${school}`}
                          className="w-full py-3 ms-3 text-sm sm:text-base font-medium text-white"
                        >
                          {school}
                        </label>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Search Form */}
            <form onSubmit={handleSearch}>
              <button
                type="submit"
                disabled={isSearching}
                className="w-full bg-teal-500 text-white py-3 rounded-lg hover:bg-teal-600 disabled:bg-gray-600 transition-transform duration-200 hover:scale-[1.02] flex items-center justify-center"
              >
                {isSearching ? (
                  <>
                    <svg
                      className="w-5 h-5 mr-2 animate-spin"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                      />
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8v8h8a8 8 0 01-8 8 8 8 0 01-8-8z"
                      />
                    </svg>
                    Searching...
                  </>
                ) : (
                  "Search Transcript"
                )}
              </button>
              {error && <p className="mt-4 text-sm text-red-400">{error}</p>}
            </form>
          </div>
        )}

        {/* Transcript Details and OTP Verification */}
        {transcriptFound && !otpVerified && (
          <div className="w-full p-6 sm:p-8 bg-gray-800 border border-gray-700 rounded-2xl shadow-2xl transition-all duration-300 hover:shadow-[0_10px_20px_rgba(0,173,181,0.2)] bg-gradient-to-br from-gray-800 to-gray-900">
            <h5 className="mb-4 text-xl sm:text-2xl font-semibold text-white">
              Transcript Details
            </h5>
            <p className="text-sm sm:text-base font-normal text-gray-400 mb-6">
              Verify your identity to proceed.
            </p>
            <div className="space-y-3 mb-6">
              <p className="text-white text-sm sm:text-base">
                <strong>Transcript ID:</strong> {transcriptFound.id}
              </p>
              <p className="text-white text-sm sm:text-base">
                <strong>School:</strong> {transcriptFound.school}
              </p>
              <p className="text-white text-sm sm:text-base">
                <strong>Year:</strong> {transcriptFound.year}
              </p>
              <p className="text-white text-sm sm:text-base">
                <strong>Faculty:</strong> {transcriptFound.faculty}
              </p>
              <p className="text-white text-sm sm:text-base">
                <strong>Department:</strong> {transcriptFound.department}
              </p>
              <p className="text-white text-sm sm:text-base">
                <strong>Student Name:</strong> {transcriptFound.studentName}
              </p>
              <p className="text-sm text-gray-400">
                Stored on Sepolia testnet with hash: 0x123...abc (mock)
              </p>
            </div>
            <button
              onClick={handleVerifyOtp}
              disabled={isVerifying}
              className="w-full bg-teal-500 text-white py-3 rounded-lg hover:bg-teal-600 disabled:bg-gray-600 transition-transform duration-200 hover:scale-[1.02] flex items-center justify-center"
            >
              {isVerifying ? (
                <>
                  <svg
                    className="w-5 h-5 mr-2 animate-spin"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    />
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8v8h8a8 8 0 01-8 8 8 8 0 01-8-8z"
                    />
                  </svg>
                  Verifying OTP...
                </>
              ) : (
                "Verify OTP (Simulated)"
              )}
            </button>
          </div>
        )}

        {/* Wallet Connection */}
        {otpVerified && !walletConnected && (
          <div className="w-full p-6 sm:p-8 bg-gray-800 border border-gray-700 rounded-2xl shadow-2xl transition-all duration-300 hover:shadow-[0_10px_20px_rgba(0,173,181,0.2)] bg-gradient-to-br from-gray-800 to-gray-900">
            <h5 className="mb-4 text-xl sm:text-2xl font-semibold text-white">
              Connect Wallet
            </h5>
            <p className="text-sm sm:text-base font-normal text-gray-400 mb-6">
              Connect with one of our available wallet providers to proceed with
              payment.
            </p>
            <ul className="my-6 space-y-4">
              {walletProviders.map((wallet) => (
                <li key={wallet.name}>
                  <button
                    onClick={() => handleConnectWallet(wallet.name)}
                    disabled={isConnecting}
                    className="flex items-center w-full p-4 text-base font-bold text-white bg-gray-700 rounded-lg hover:bg-gray-600 group hover:shadow-md transition-all duration-200"
                  >
                    <span dangerouslySetInnerHTML={{ __html: wallet.svg }} />
                    <span className="flex-1 ms-4 whitespace-nowrap">
                      {wallet.name}
                    </span>
                    {wallet.name === "MetaMask" && (
                      <span className="inline-flex items-center justify-center px-3 py-1 ms-4 text-xs font-medium text-gray-300 bg-gray-600 rounded-full">
                        Popular
                      </span>
                    )}
                  </button>
                </li>
              ))}
            </ul>
            <a
              href="#"
              className="inline-flex items-center text-xs sm:text-sm font-normal text-gray-400 hover:underline"
            >
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
                  d="M7.529 7.988a2.502 2.502 0 0 1 5 .191A2.441 2.441 0 0 1 10 10.582V12m-.01 3.008H10M19 10a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                />
              </svg>
              Why do I need to connect with my wallet?
            </a>
          </div>
        )}

        {/* Transcript Link and Activity Log */}
        {walletConnected && (
          <div className="w-full p-6 sm:p-8 bg-gray-800 border border-gray-700 rounded-2xl shadow-2xl transition-all duration-300 hover:shadow-[0_10px_20px_rgba(0,173,181,0.2)] bg-gradient-to-br from-gray-800 to-gray-900 text-center animate-fade-in">
            <h5 className="mb-4 text-xl sm:text-2xl font-semibold text-white">
              Payment Confirmed
            </h5>
            <p className="text-sm sm:text-base font-normal text-gray-400 mb-6">
              Use the link below to view your transcript. This link is valid for
              one-time use.
            </p>
            <a
              href="https://example.com/transcript/12345"
              target="_blank"
              rel="noopener noreferrer"
              onClick={handleTranscriptClick}
              className="text-teal-500 underline hover:text-teal-400 text-base sm:text-lg"
            >
              View Transcript
            </a>
            <p className="text-sm text-gray-400 mt-4">
              Blockchain-verified on Sepolia testnet (mock)
            </p>

            {/* Activity Log Table */}
            <div className="mt-8">
              <h6 className="text-lg sm:text-xl font-semibold text-white mb-4">
                Activity Log (Blockchain-Verified)
              </h6>
              <p className="text-sm text-gray-400 mb-4">
                All actions are logged on the Sepolia testnet for transparency.
              </p>
              <div className="overflow-x-auto">
                <table className="w-full text-sm sm:text-base text-left text-white">
                  <thead className="text-xs sm:text-sm text-gray-300 uppercase bg-gray-700">
                    <tr>
                      <th scope="col" className="px-6 py-3">
                        Activity
                      </th>
                      <th scope="col" className="px-6 py-3">
                        User
                      </th>
                      <th scope="col" className="px-6 py-3">
                        Timestamp
                      </th>
                      <th scope="col" className="px-6 py-3">
                        Blockchain Hash
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {activityLog.map((log, index) => (
                      <tr
                        key={index}
                        className="bg-gray-800 border-b border-gray-700 hover:bg-gray-600 transition-colors duration-200"
                      >
                        <td className="px-6 py-4">{log.activity}</td>
                        <td className="px-6 py-4">{log.user}</td>
                        <td className="px-6 py-4">{log.timestamp}</td>
                        <td className="px-6 py-4 text-teal-500">{log.hash}</td>
                      </tr>
                    ))}
                    {activityLog.length === 0 && (
                      <tr>
                        <td
                          colSpan="4"
                          className="px-6 py-4 text-center text-gray-400"
                        >
                          No activities logged yet.
                        </td>
                      </tr>
                    )}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}

        {/* Back to Dashboard Button */}
        <div className="mt-8 text-center">
          <button
            onClick={handleBackToDashboard}
            className="text-teal-500 hover:text-teal-400 font-medium text-sm sm:text-base underline transition-colors duration-200"
          >
            Back to Dashboard
          </button>
        </div>
      </div>
    </div>
  );
};

export default Transcript;
