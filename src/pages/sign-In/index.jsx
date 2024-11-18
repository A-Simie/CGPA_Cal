import { useState } from "react";
import Typewriter from "typewriter-effect";

const SignIn = () => {
  const [value, setValue] = useState({
    email: "",
    password: "",
  });

  //   useEffect(() => {
  //     setValue(value);
  //   }, []);

  return (
    <div className="flex flex-col lg:flex-row bg-[#1C1D21]  ">
      <div className="w-full lg:w-5/12 flex items-center justify-center h-screen  p-6 lg:p-0">
        <div className="w-full max-w-sm space-y-6">
          <h1 className="text-2xl  font-bold text-[#FFFFFF] md:text-4xl">
            Log In
          </h1>
          <p className="text-sm  font-sm text-[#FFFFFF]">
            Enter your account details
          </p>
          <div className="space-y-4">
            <div>
              <label
                htmlFor="email"
                className="block mb-2 text-sm font-thin text-[#FFFFFF]"
              >
                Email
              </label>
              <input
                type="text"
                id="email"
                name="username"
                value={value.email}
                onChange={(e) => setValue(e.target.value)}
                className="w-full px-4 py-3  bg-[#1C1D21] border-b text-white border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-600"
                placeholder="User123@Hotmail.com"
                required
              />
            </div>
            <div>
              <label
                htmlFor="password"
                className="block mb-2 text-sm font-thin text-[#FFFFFF]"
              >
                Password
              </label>
              <div className="relative">
                <input
                  id="password"
                  name="password"
                  value={value.password}
                  className="w-full px-4 py-3  bg-[#1C1D21] border-b text-white border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-600"
                  placeholder="Enter your password"
                  required
                />{" "}
                <p className="flex items-start mt-2 text-xs text-slate-400">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="w-5 h-5 mr-1.5"
                  >
                    <path
                      fillRule="evenodd"
                      d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12ZM12 8.25a.75.75 0 0 1 .75.75v3.75a.75.75 0 0 1-1.5 0V9a.75.75 0 0 1 .75-.75Zm0 8.25a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Z"
                      clipRule="evenodd"
                    />
                  </svg>
                  Use at least 8 characters, one uppercase, one lowercase,one
                  special character and one number.
                </p>
              </div>
            </div>{" "}
            <div className="flex justify-start items-start">
              <a
                href="/forgotPassword"
                className="text-sm font-thin text-[#FFFFFF] hover:underline"
              >
                Forgot password?
              </a>
            </div>
            <div>
              <button className="bg-[#925FE2] w-full p-2 rounded-lg text-white text-extrabold">
                Login
              </button>
            </div>
            <div className="fixed bottom-5 flex space-x-20 items-center justify-center">
              <span className="text-sm font-thin text-[#FFFFFF] ">
                Don&nbsp;t have an account?
              </span>
              <button className="bg-[#333437]  p-3 rounded-lg text-white text-extrabold">
                Sign Up
              </button>
            </div>
            <div className="flex  items-center justify-center">
              <button
                type="button"
                className="text-white bg-[#CAB7A2]   focus:ring-4 focus:outline-none focus:ring-[#9C6FE4] font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center me-2 "
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  x="0px"
                  y="0px"
                  width="100"
                  height="100"
                  viewBox="0 0 64 64"
                  className="w-6 h-6 me-2"
                  aria-hidden="true"

                  // viewBox="0 0 18 21"
                >
                  <path
                    fill="#7e8188"
                    d="M10,11.25v42.5c0,2.347,1.949,4.25,4.353,4.25h28.294C45.051,58,47,56.097,47,53.75v-42.5	C47,8.903,45.051,7,42.647,7H14.353C11.949,7,10,8.903,10,11.25z"
                  ></path>
                  <path
                    fill="#acb7d0"
                    d="M14,13v6c0,1.105,0.999,2,2.231,2h24.539C42.001,21,43,20.105,43,19v-6c0-1.105-0.999-2-2.231-2	H16.23C14.998,11,14,11.895,14,13z"
                  ></path>
                  <circle cx="17.5" cy="28.5" r="3.5" fill="#e2e9f7"></circle>
                  <circle cx="28.5" cy="28.5" r="3.5" fill="#e2e9f7"></circle>
                  <circle cx="39.5" cy="28.5" r="3.5" fill="#efc88e"></circle>
                  <circle cx="17.5" cy="39.5" r="3.5" fill="#e2e9f7"></circle>
                  <circle cx="28.5" cy="39.5" r="3.5" fill="#e2e9f7"></circle>
                  <circle cx="39.5" cy="39.5" r="3.5" fill="#efc88e"></circle>
                  <circle cx="39.5" cy="50.5" r="3.5" fill="#efc88e"></circle>
                  <path
                    fill="#e2e9f7"
                    d="M28.5,47h-11c-1.933,0-3.5,1.567-3.5,3.5s1.567,3.5,3.5,3.5h11c1.933,0,3.5-1.567,3.5-3.5	S30.433,47,28.5,47z"
                  ></path>
                  <path
                    fill="#8d6c9f"
                    d="M54,14h-2c-0.552,0-1-0.447-1-1s0.448-1,1-1h2c0.552,0,1,0.447,1,1S54.552,14,54,14z"
                  ></path>
                  <path
                    fill="#8d6c9f"
                    d="M54,19h-2c-0.552,0-1-0.447-1-1s0.448-1,1-1h2c0.552,0,1,0.447,1,1S54.552,19,54,19z"
                  ></path>
                  <path
                    fill="#8d6c9f"
                    d="M54,24h-2c-0.552,0-1-0.447-1-1s0.448-1,1-1h2c0.552,0,1,0.447,1,1S54.552,24,54,24z"
                  ></path>
                  <path
                    fill="#8d6c9f"
                    d="M54,29h-2c-0.552,0-1-0.447-1-1s0.448-1,1-1h2c0.552,0,1,0.447,1,1S54.552,29,54,29z"
                  ></path>
                  <path
                    fill="#8d6c9f"
                    d="M54,34h-2c-0.552,0-1-0.447-1-1s0.448-1,1-1h2c0.552,0,1,0.447,1,1S54.552,34,54,34z"
                  ></path>
                  <path
                    fill="#8d6c9f"
                    d="M54,39h-2c-0.552,0-1-0.447-1-1s0.448-1,1-1h2c0.552,0,1,0.447,1,1S54.552,39,54,39z"
                  ></path>
                  <path
                    fill="#8d6c9f"
                    d="M54,44h-2c-0.552,0-1-0.447-1-1s0.448-1,1-1h2c0.552,0,1,0.447,1,1S54.552,44,54,44z"
                  ></path>
                  <path
                    fill="#8d6c9f"
                    d="M54,49h-2c-0.552,0-1-0.447-1-1s0.448-1,1-1h2c0.552,0,1,0.447,1,1S54.552,49,54,49z"
                  ></path>
                  <path
                    fill="#8d6c9f"
                    d="M54,54h-2c-0.552,0-1-0.447-1-1s0.448-1,1-1h2c0.552,0,1,0.447,1,1S54.552,54,54,54z"
                  ></path>
                  <g>
                    <path
                      fill="#8d6c9f"
                      d="M42.647,59H14.353C11.401,59,9,56.645,9,53.75v-42.5C9,8.355,11.401,6,14.353,6h28.294 C45.599,6,48,8.355,48,11.25v42.5C48,56.645,45.599,59,42.647,59z M14.353,8C12.504,8,11,9.458,11,11.25v42.5 c0,1.792,1.504,3.25,3.353,3.25h28.294C44.496,57,46,55.542,46,53.75v-42.5C46,9.458,44.496,8,42.647,8H14.353z"
                    ></path>
                    <path
                      fill="#8d6c9f"
                      d="M40.77,22H16.23C14.449,22,13,20.654,13,19v-6c0-1.654,1.449-3,3.231-3H40.77 c1.781,0,3.23,1.346,3.23,3v6C44,20.654,42.551,22,40.77,22z M16.23,12C15.552,12,15,12.448,15,13v6c0,0.552,0.552,1,1.231,1H40.77 c0.679,0,1.23-0.448,1.23-1v-6c0-0.552-0.552-1-1.23-1H16.23z"
                    ></path>
                    <path
                      fill="#8d6c9f"
                      d="M17.5,33c-2.481,0-4.5-2.019-4.5-4.5s2.019-4.5,4.5-4.5s4.5,2.019,4.5,4.5S19.981,33,17.5,33z M17.5,26c-1.378,0-2.5,1.121-2.5,2.5s1.122,2.5,2.5,2.5s2.5-1.121,2.5-2.5S18.878,26,17.5,26z"
                    ></path>
                    <path
                      fill="#8d6c9f"
                      d="M28.5,33c-2.481,0-4.5-2.019-4.5-4.5s2.019-4.5,4.5-4.5s4.5,2.019,4.5,4.5S30.981,33,28.5,33z M28.5,26c-1.378,0-2.5,1.121-2.5,2.5s1.122,2.5,2.5,2.5s2.5-1.121,2.5-2.5S29.878,26,28.5,26z"
                    ></path>
                    <path
                      fill="#8d6c9f"
                      d="M39.5,33c-2.481,0-4.5-2.019-4.5-4.5s2.019-4.5,4.5-4.5s4.5,2.019,4.5,4.5S41.981,33,39.5,33z M39.5,26c-1.378,0-2.5,1.121-2.5,2.5s1.122,2.5,2.5,2.5s2.5-1.121,2.5-2.5S40.878,26,39.5,26z"
                    ></path>
                    <path
                      fill="#8d6c9f"
                      d="M17.5,44c-2.481,0-4.5-2.019-4.5-4.5s2.019-4.5,4.5-4.5s4.5,2.019,4.5,4.5S19.981,44,17.5,44z M17.5,37c-1.378,0-2.5,1.121-2.5,2.5s1.122,2.5,2.5,2.5s2.5-1.121,2.5-2.5S18.878,37,17.5,37z"
                    ></path>
                    <path
                      fill="#8d6c9f"
                      d="M28.5,44c-2.481,0-4.5-2.019-4.5-4.5s2.019-4.5,4.5-4.5s4.5,2.019,4.5,4.5S30.981,44,28.5,44z M28.5,37c-1.378,0-2.5,1.121-2.5,2.5s1.122,2.5,2.5,2.5s2.5-1.121,2.5-2.5S29.878,37,28.5,37z"
                    ></path>
                    <path
                      fill="#8d6c9f"
                      d="M39.5,44c-2.481,0-4.5-2.019-4.5-4.5s2.019-4.5,4.5-4.5s4.5,2.019,4.5,4.5S41.981,44,39.5,44z M39.5,37c-1.378,0-2.5,1.121-2.5,2.5s1.122,2.5,2.5,2.5s2.5-1.121,2.5-2.5S40.878,37,39.5,37z"
                    ></path>
                    <path
                      fill="#8d6c9f"
                      d="M39.5,55c-2.481,0-4.5-2.019-4.5-4.5s2.019-4.5,4.5-4.5s4.5,2.019,4.5,4.5S41.981,55,39.5,55z M39.5,48c-1.378,0-2.5,1.121-2.5,2.5s1.122,2.5,2.5,2.5s2.5-1.121,2.5-2.5S40.878,48,39.5,48z"
                    ></path>
                    <path
                      fill="#8d6c9f"
                      d="M28.5,55h-11c-2.481,0-4.5-2.019-4.5-4.5s2.019-4.5,4.5-4.5h11c2.481,0,4.5,2.019,4.5,4.5 S30.981,55,28.5,55z M17.5,48c-1.378,0-2.5,1.121-2.5,2.5s1.122,2.5,2.5,2.5h11c1.378,0,2.5-1.121,2.5-2.5S29.878,48,28.5,48H17.5z"
                    ></path>
                  </g>
                </svg>
                CGPA CAL
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="hidden lg:flex w-full lg:w-7/12 flex-col items-center justify-center bg-[#925FE2] relative">
        <div className=" space-y-4">
          <p className="text-7xl font-bold font-sans text-white">
            <Typewriter
              onInit={(typewriter) => {
                typewriter
                  .typeString("Welcome to")
                  .pauseFor(500)
                  .callFunction(() => {
                    console.log('Finished typing "Welcome to"');

                    const cursor = document.querySelector(
                      ".Typewriter__cursor"
                    );
                    console.log(cursor ? true : false);
                    if (cursor) cursor.style.display = "none";
                  })
                  .start();
              }}
            />
          </p>

          <p className="block font-thin text-7xl font-sans text-white">
            <Typewriter
              onInit={(typewriter) => {
                typewriter
                  .pauseFor(1500)
                  .typeString("student portal")
                  .callFunction(() => {
                    console.log('Finished typing "Welcome to"');

                    const cursor = document.querySelector(
                      ".Typewriter__cursor"
                    );
                    console.log(cursor ? true : false);
                    if (!cursor) cursor.style.display = "none";
                  })
                  .start();
              }}
            />
          </p>

          <p className="block text-sm font-light text-white">
            <Typewriter
              onInit={(typewriter) => {
                typewriter
                  .pauseFor(3000)
                  .typeString("Login to access your account")
                  .callFunction(() => {
                    console.log('Finished typing "Welcome to"');

                    const cursor = document.querySelector(
                      ".Typewriter__cursor"
                    );
                    console.log(cursor ? true : false);
                    if (!cursor) cursor.style.display = "none";
                  })
                  .start();
              }}
            />
          </p>

          <div className="relative">
            <img
              className="w-[300px] h-[400px] absolute top-0 left-0 transform -translate-x-10 -translate-y-5 z-0 opacity-75"
              loading="lazy"
              alt="Vector 1"
              src="https://res.cloudinary.com/dzvvkja2y/image/upload/v1731050555/Vector_kgknjw.png"
            />
            <img
              className="w-[300px] h-[400px] absolute top-0 right-0 transform translate-x-10 z-0 opacity-75"
              loading="lazy"
              alt="Vector 2"
              src="https://res.cloudinary.com/dzvvkja2y/image/upload/v1731050555/Vector_kgknjw.png"
            />

            <img
              className="w-[500px] h-[400px] relative z-10"
              loading="lazy"
              alt="Sign In"
              src="https://res.cloudinary.com/dzvvkja2y/image/upload/v1731033689/studentSigninPic_zh67si.png"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
