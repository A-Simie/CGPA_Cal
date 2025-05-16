import { useState } from "react";
import { useLocation } from "react-router-dom";
import Typewriter from "typewriter-effect";
import { Login } from "../../components/API/user";
import toast from "react-hot-toast";

const SignIn = () => {
  const location = useLocation();

  const [value, setValue] = useState({
    email: "",
    password: "",
  });
  const [errors, setErrors] = useState({
    email: "",
    password: "",
    general: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validatePassword = (password) => {
    const minLength = password.length >= 8;
    const hasUpperCase = /[A-Z]/.test(password);
    const hasLowerCase = /[a-z]/.test(password);
    const hasNumber = /[0-9]/.test(password);
    const hasSpecialChar = /[!@#$%^&*(),.?":{}|<>]/.test(password);

    return {
      isValid:
        minLength &&
        hasUpperCase &&
        hasLowerCase &&
        hasNumber &&
        hasSpecialChar,
      errors: [
        !minLength && "at least 8 characters",
        !hasUpperCase && "one uppercase letter",
        !hasLowerCase && "one lowercase letter",
        !hasNumber && "one number",
        !hasSpecialChar && "one special character",
      ].filter(Boolean),
    };
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValue((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: "", general: "" }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    const emailValid = validateEmail(value.email);
    const passwordValidation = validatePassword(value.password);

    if (!emailValid || !passwordValidation.isValid) {
      setErrors({
        email: emailValid ? "" : "Please enter a valid email address",
        password: passwordValidation.isValid
          ? ""
          : `Password must contain ${passwordValidation.errors.join(", ")}`,
        general: "",
      });
      setIsSubmitting(false);
      return;
    }
    try {
      const data = await Login(value.email, value.password, setIsSubmitting);

      console.log(data);
      if (data.status == 200) {
        toast.success("Login successful!");

        const token = data.data.token;
        localStorage.setItem("tokenScrivta", token);

        setTimeout(() => {
          window.location.href = "/dashboard";
        }, 1500);
      } else {
        setErrors({
          email: "",
          password: "",
          general: data.data.msg || "Login failed.",
        });
        toast.error(data.data.msg || "Login failed.");
      }
      // Do redirect or store token
    } catch (error) {
      setErrors({
        email: "",
        password: "",
        general: error.message || "An error occurred. Please try again.",
      });
      toast.error(error.response.data.msg || "Login failed.");
    } finally {
      setIsSubmitting(false);
    }
  };

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
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label
                htmlFor="email"
                className="block mb-2 text-sm font-thin text-[#FFFFFF]"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={value.email}
                onChange={handleChange}
                className={`w-full px-4 py-3 bg-[#1C1D21] border-b text-white ${
                  errors.email ? "border-red-500" : "border-gray-300"
                } focus:outline-none focus:ring-2 focus:ring-[#00ADB5]`}
                placeholder="User123@Hotmail.com"
                required
              />
              {errors.email && (
                <p className="mt-2 text-xs text-red-500 flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="w-5 h-5 mr-1.5"
                  >
                    <path
                      fillRule="evenodd"
                      d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zM12 8.25a.75.75 0 01.75.75v3.75a.75.75 0 01-1.5 0V9a.75.75 0 01.75-.75zm0 8.25a.75.75 0 100-1.5.75.75 0 000 1.5z"
                      clipRule="evenodd"
                    />
                  </svg>
                  {errors.email}
                </p>
              )}
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
                  type="password"
                  id="password"
                  name="password"
                  value={value.password}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 bg-[#1C1D21] border-b text-white ${
                    errors.password ? "border-red-500" : "border-gray-300"
                  } focus:outline-none focus:ring-2 focus:ring-[#00ADB5]`}
                  placeholder="Enter your password"
                  required
                />
                <p
                  className={`flex items-start mt-2 text-xs ${
                    errors.password ? "text-red-500" : "text-slate-400"
                  }`}
                >
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
                  Use at least 8 characters, one uppercase, one lowercase, one
                  special character and one number.
                </p>
                {errors.password && (
                  <p className="mt-2 text-xs text-red-500">{errors.password}</p>
                )}
              </div>
            </div>
            {errors.general && (
              <p className="text-red-500 text-sm text-center">
                {errors.general}
              </p>
            )}
            <div className="flex justify-start items-start">
              <a
                href="/forgotPassword"
                className="text-sm font-thin text-[#FFFFFF] hover:underline"
              >
                Forgot password?
              </a>
            </div>
            <div>
              <button
                type="submit"
                disabled={isSubmitting}
                className={`bg-[#00ADB5] w-full p-2 rounded-lg text-white text-extrabold hover:ring-[#6ed6db] ${
                  isSubmitting ? "opacity-50 cursor-not-allowed" : ""
                }`}
              >
                {isSubmitting ? "Logging in..." : "Login"}
              </button>
            </div>
            <div className="fixed bottom-5 flex space-x-20 items-center justify-center">
              <span className="text-sm font-thin text-[#FFFFFF] ">
                Don’t have an account?
              </span>
              <button className="bg-[#333437] p-3 rounded-lg text-white text-extrabold">
                Sign Up
              </button>
            </div>
          </form>
        </div>
      </div>
      <div className="hidden lg:flex w-full lg:w-7/12 flex-col items-center justify-center bg-[#00ADB5] relative">
        <div className=" space-y-4">
          {location.pathname === "/" && (
            <>
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
            </>
          )}
          <div className="relative">
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
