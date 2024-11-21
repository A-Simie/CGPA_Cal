import { useState } from "react";

const GradingSystem = {
  A: { min: 70, max: 100, point: 5 },
  B: { min: 60, max: 69, point: 4 },
  C: { min: 50, max: 59, point: 3 },
  D: { min: 45, max: 49, point: 2 },
  E: { min: 40, max: 44, point: 1 },
  F: { min: 0, max: 39, point: 0 },
};

// Helper function to convert numbers to Roman numerals
const toRoman = (num) => {
  const romanMap = [
    { value: 1000, numeral: "M" },
    { value: 900, numeral: "CM" },
    { value: 500, numeral: "D" },
    { value: 400, numeral: "CD" },
    { value: 100, numeral: "C" },
    { value: 90, numeral: "XC" },
    { value: 50, numeral: "L" },
    { value: 40, numeral: "XL" },
    { value: 10, numeral: "X" },
    { value: 9, numeral: "IX" },
    { value: 5, numeral: "V" },
    { value: 4, numeral: "IV" },
    { value: 1, numeral: "I" },
  ];
  let roman = "";
  for (const { value, numeral } of romanMap) {
    while (num >= value) {
      roman += numeral;
      num -= value;
    }
  }
  return roman;
};

const Calculate = () => {
  const [semesters, setSemesters] = useState([
    {
      courses: [{ courseName: "", grade: "", credits: "" }],
      gpa: "",
      errors: [],
    },
  ]);
  const [CGPA, setCGPA] = useState("");

  // Add a new semester
  const addSemester = () => {
    setSemesters([
      ...semesters,
      {
        courses: [{ courseName: "", grade: "", credits: "" }],
        gpa: "",
        errors: [],
      },
    ]);
  };

  // Remove a semester
  const removeSemester = (index) => {
    const updatedSemesters = semesters.filter((_, i) => i !== index);
    setSemesters(updatedSemesters);
  };

  // Add a new course to a semester
  const addCourse = (semesterIndex) => {
    const updatedSemesters = [...semesters];
    updatedSemesters[semesterIndex].courses.push({
      courseName: "",
      grade: "",
      credits: "",
    });
    updatedSemesters[semesterIndex].errors = [];
    setSemesters(updatedSemesters);
  };

  // Remove a course from a semester
  const removeCourse = (semesterIndex, courseIndex) => {
    const updatedSemesters = [...semesters];
    updatedSemesters[semesterIndex].courses = updatedSemesters[
      semesterIndex
    ].courses.filter((_, i) => i !== courseIndex);
    updatedSemesters[semesterIndex].errors = [];
    setSemesters(updatedSemesters);
  };

  // Update course details
  const updateCourse = (semesterIndex, courseIndex, field, value) => {
    const updatedSemesters = [...semesters];
    updatedSemesters[semesterIndex].courses[courseIndex][field] = value;
    // Clear previous errors when user modifies input
    updatedSemesters[semesterIndex].errors = [];
    setSemesters(updatedSemesters);
  };

  // Validate semester courses
  const validateSemester = (semester) => {
    const errors = [];
    semester.courses.forEach((course, index) => {
      if (!course.grade) {
        errors.push(`Course ${index + 1}: Grade is required`);
      }
      if (!course.credits) {
        errors.push(`Course ${index + 1}: Credits are required`);
      }
    });
    return errors;
  };

  // Calculate GPA for a semester
  const calculateGPA = (semesterIndex) => {
    const semester = semesters[semesterIndex];

    // Validate semester first
    const validationErrors = validateSemester(semester);
    if (validationErrors.length > 0) {
      const updatedSemesters = [...semesters];
      updatedSemesters[semesterIndex].errors = validationErrors;
      updatedSemesters[semesterIndex].gpa = "";
      setSemesters(updatedSemesters);
      return "";
    }

    let totalPoints = 0;
    let totalCredits = 0;

    semester.courses.forEach(({ grade, credits }) => {
      if (grade && credits) {
        totalPoints += GradingSystem[grade]?.point * parseFloat(credits);
        totalCredits += parseFloat(credits);
      }
    });

    const gpa = totalCredits > 0 ? (totalPoints / totalCredits).toFixed(2) : "";
    const updatedSemesters = [...semesters];
    updatedSemesters[semesterIndex].gpa = gpa;
    updatedSemesters[semesterIndex].errors = [];
    setSemesters(updatedSemesters);
    return gpa;
  };

  const clearAll = (semesterIndex) => {
    setSemesters((prevSemesters) => {
      const updatedSemesters = [...prevSemesters];
      updatedSemesters[semesterIndex] = {
        courses: [{ courseName: "", grade: "", credits: "" }],
        gpa: "",
        errors: [],
      };
      return updatedSemesters;
    });

    setCGPA("");
  };

  // Calculate CGPA
  const calculateCGPA = () => {
    // Validate all semesters first
    const updatedSemesters = semesters.map((semester) => {
      const validationErrors = validateSemester(semester);
      if (validationErrors.length > 0) {
        return { ...semester, errors: validationErrors, gpa: "" };
      }
      return semester;
    });

    // Check if any semesters have validation errors
    const hasErrors = updatedSemesters.some(
      (semester) => semester.errors.length > 0
    );
    if (hasErrors) {
      setSemesters(updatedSemesters);
      return;
    }

    // Calculate GPA for all semesters
    const semestersWithGPA = updatedSemesters.map((semester, index) => {
      const gpa = calculateGPA(index);
      return { ...semester, gpa };
    });

    // Then calculate overall CGPA
    let totalGPA = 0;
    let count = 0;

    semestersWithGPA.forEach((semester) => {
      if (semester.gpa) {
        totalGPA += parseFloat(semester.gpa);
        count++;
      }
    });

    const cgpa = count > 0 ? (totalGPA / count).toFixed(2) : "";
    setCGPA(cgpa);
    setSemesters(semestersWithGPA);
  };

  const editGPA = () => {
    setSemesters((prevSemesters) =>
      prevSemesters.map((semester) => ({
        ...semester,
        gpa: "",
        errors: [],
      }))
    );

    setCGPA("");
  };

  return (
    <div className="min-h-screen bg-[#F2F7F7] border-2 border-gray-300 rounded-md shadow-md p-6 w-full ">
      <p
        className="text-[#03045E] font-sans font-black 
        md:text-4xl px-6 pt-8"
      >
        GPA CALCULATOR
      </p>

      {/* Semester Cards */}

      {semesters.map((semester, semesterIndex) => (
        <div
          key={semesterIndex}
          className="flex items-center justify-center mt-4"
        >
          <div className="bg-white border-2 border-gray-300 rounded-md shadow-md p-6 w-full max-w-sm sm:max-w-md md:max-w-4xl lg:max-w-5xl xl:max-w-6xl">
            <div className="flex items-center justify-between -mt-4">
              <span className="block text-[#03045E] font-sans pt-4 sm:pt-6 pb-4 sm:pb-6 font-normal text-left text-lg sm:text-xl md:text-2xl lg:text-4xl">
                Semester {toRoman(semesterIndex + 1)}
              </span>{" "}
              {semesters[semesterIndex]?.gpa === "" ? (
                <button
                  type="button"
                  className="text-[#046865] backdrop:hover:bg-[#dff0ef] focus:ring-4 focus:outline-none focus:ring-red-100 font-bold rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center"
                  onClick={() => removeSemester(semesterIndex)}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    x="0px"
                    y="0px"
                    width="24"
                    height="24"
                    viewBox="0 0 50 50"
                    className="me-2 -ms-1"
                  >
                    <path
                      d="M 25 2 C 12.309534 2 2 12.309534 2 25 C 2 37.690466 12.309534 48 25 48 C 37.690466 48 48 37.690466 48 25 C 48 12.309534 37.690466 2 25 2 z M 25 4 C 36.609534 4 46 13.390466 46 25 C 46 36.609534 36.609534 46 25 46 C 13.390466 46 4 36.609534 4 25 C 4 13.390466 13.390466 4 25 4 z M 32.990234 15.986328 A 1.0001 1.0001 0 0 0 32.292969 16.292969 L 25 23.585938 L 17.707031 16.292969 A 1.0001 1.0001 0 0 0 16.990234 15.990234 A 1.0001 1.0001 0 0 0 16.292969 17.707031 L 23.585938 25 L 16.292969 32.292969 A 1.0001 1.0001 0 1 0 17.707031 33.707031 L 25 26.414062 L 32.292969 33.707031 A 1.0001 1.0001 0 1 0 33.707031 32.292969 L 26.414062 25 L 33.707031 17.707031 A 1.0001 1.0001 0 0 0 32.990234 15.986328 z"
                      fill="#046865"
                    />
                  </svg>
                </button>
              ) : (
                <></>
              )}
            </div>
            {semester.errors && semester.errors.length > 0 && (
              <div
                className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative mb-4"
                role="alert"
              >
                <ul className="list-disc list-inside">
                  {semester.errors.map((error, index) => (
                    <li key={index}>{error}</li>
                  ))}
                </ul>
              </div>
            )}
            <form>
              <div className="overflow-x-auto">
                <table className="table-auto w-full hidden sm:table text-left text-sm md:text-base text-[#046865]">
                  {/* Table Headers */}
                  <thead className="bg-white">
                    <tr>
                      <th className="p-3 text-xl font-bold">Course Name</th>
                      <th className="p-3 text-xl font-bold">Grade</th>
                      <th className="p-3 text-xl font-bold">Credits</th>
                    </tr>
                  </thead>
                  <tbody>
                    {semester?.courses?.map((course, courseIndex) => (
                      <tr key={courseIndex} className="">
                        <td className="p-3">
                          <input
                            type="text"
                            className="bg-[#eef7f6] text-[#046865] text-sm rounded-lg focus:ring-[#046865] focus:border-[#046865] block w-full p-2.5"
                            value={course.courseName}
                            onChange={(e) =>
                              updateCourse(
                                semesterIndex,
                                courseIndex,
                                "courseName",
                                e.target.value
                              )
                            }
                            placeholder="Advanced Calculus"
                            required
                          />
                        </td>
                        <td className="p-3">
                          <select
                            className="bg-[#eef7f6] text-[#046865] text-sm rounded-lg focus:ring-[#046865] focus:border-[#046865] block w-full p-2.5"
                            value={course.grade}
                            onChange={(e) =>
                              updateCourse(
                                semesterIndex,
                                courseIndex,
                                "grade",
                                e.target.value
                              )
                            }
                          >
                            <option value="">Choose a Grade</option>
                            {Object.keys(GradingSystem).map((grade) => (
                              <option key={grade} value={grade}>
                                {grade}
                              </option>
                            ))}
                          </select>
                        </td>
                        <td className="p-3">
                          <input
                            type="number"
                            className="bg-[#eef7f6] text-[#046865] text-sm rounded-lg focus:ring-[#046865] focus:border-[#046865] block w-full p-2.5"
                            value={course.credits}
                            onChange={(e) =>
                              updateCourse(
                                semesterIndex,
                                courseIndex,
                                "credits",
                                e.target.value
                              )
                            }
                            placeholder="3"
                            required
                          />
                        </td>
                        <td className="p-3 text-center">
                          {semesters[semesterIndex]?.gpa === "" ? (
                            <button
                              type="button"
                              className="text-[#046865] bg-white hover:bg-[#dff0ef] focus:ring-4 focus:outline-none focus:ring-red-100 font-bold rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center"
                              onClick={() =>
                                removeCourse(semesterIndex, courseIndex)
                              }
                            >
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                x="0px"
                                y="0px"
                                width="24"
                                height="24"
                                viewBox="0 0 50 50"
                                className="me-2 -ms-1"
                              >
                                <path
                                  d="M 25 2 C 12.309534 2 2 12.309534 2 25 C 2 37.690466 12.309534 48 25 48 C 37.690466 48 48 37.690466 48 25 C 48 12.309534 37.690466 2 25 2 z M 25 4 C 36.609534 4 46 13.390466 46 25 C 46 36.609534 36.609534 46 25 46 C 13.390466 46 4 36.609534 4 25 C 4 13.390466 13.390466 4 25 4 z M 32.990234 15.986328 A 1.0001 1.0001 0 0 0 32.292969 16.292969 L 25 23.585938 L 17.707031 16.292969 A 1.0001 1.0001 0 0 0 16.990234 15.990234 A 1.0001 1.0001 0 0 0 16.292969 17.707031 L 23.585938 25 L 16.292969 32.292969 A 1.0001 1.0001 0 1 0 17.707031 33.707031 L 25 26.414062 L 32.292969 33.707031 A 1.0001 1.0001 0 1 0 33.707031 32.292969 L 26.414062 25 L 33.707031 17.707031 A 1.0001 1.0001 0 0 0 32.990234 15.986328 z"
                                  fill="#046865"
                                />
                              </svg>
                            </button>
                          ) : (
                            <></>
                          )}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>

                {/* Mobile View */}
                <div className="grid sm:hidden gap-6">
                  {semester.courses.map((course, courseIndex) => (
                    <div
                      key={courseIndex}
                      className="bg-[#eef7f6] p-4 rounded-lg shadow-md text-[#046865]"
                    >
                      <div className="mb-4">
                        <label
                          className="block text-sm font-bold mb-2"
                          htmlFor={`courseName-${courseIndex}`}
                        >
                          Course Name
                        </label>
                        <input
                          type="text"
                          id={`courseName-${courseIndex}`}
                          className="bg-white text-[#046865] text-lg rounded-lg focus:ring-[#046865] focus:border-[#046865] block w-full p-3"
                          value={course.courseName}
                          onChange={(e) =>
                            updateCourse(
                              semesterIndex,
                              courseIndex,
                              "courseName",
                              e.target.value
                            )
                          }
                          placeholder="Advanced Calculus"
                          required
                        />
                      </div>
                      <div className="mb-4">
                        <label
                          className="block text-sm font-bold mb-2"
                          htmlFor={`grade-${courseIndex}`}
                        >
                          Grade
                        </label>
                        <select
                          id={`grade-${courseIndex}`}
                          className="bg-white text-[#046865] text-lg rounded-lg focus:ring-[#046865] focus:border-[#046865] block w-full p-3"
                          value={course.grade}
                          onChange={(e) =>
                            updateCourse(
                              semesterIndex,
                              courseIndex,
                              "grade",
                              e.target.value
                            )
                          }
                        >
                          <option value="">Choose a Grade</option>{" "}
                          {Object.keys(GradingSystem).map((grade) => (
                            <option key={grade} value={grade}>
                              {grade}
                            </option>
                          ))}
                        </select>
                      </div>
                      <div className="mb-4">
                        <label
                          className="block text-sm font-bold mb-2"
                          htmlFor={`credits-${courseIndex}`}
                        >
                          Credits
                        </label>
                        <input
                          type="number"
                          id={`credits-${courseIndex}`}
                          className="bg-white text-[#046865] text-lg rounded-lg focus:ring-[#046865] focus:border-[#046865] block w-full p-3"
                          value={course.credits}
                          onChange={(e) =>
                            updateCourse(
                              semesterIndex,
                              courseIndex,
                              "credits",
                              e.target.value
                            )
                          }
                          placeholder="3"
                          required
                        />
                      </div>
                      <div className="text-center">
                        {semesters[semesterIndex]?.gpa === "" ? (
                          semester.courses.length > 1 && (
                            <button
                              type="button"
                              className="text-red-600 font-bold rounded-lg px-5 py-2 bg-white hover:bg-red-100"
                              onClick={() =>
                                removeCourse(semesterIndex, courseIndex)
                              }
                            >
                              Remove
                            </button>
                          )
                        ) : (
                          <></>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* display GPA or */}
              {/* Add Course and Clear All Buttons */}
              {semesters[semesterIndex]?.gpa === "" ? (
                <div className="flex items-center justify-center mt-6">
                  <button
                    type="button"
                    className="text-[#046865]  bg-white hover:bg-gray-100   focus:ring-4 focus:outline-none focus:ring-gray-100 font-bold rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center  me-2 mb-2"
                    onClick={() => addCourse(semesterIndex)}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      x="0px"
                      y="0px"
                      width="100"
                      height="100"
                      viewBox="0 0 50 50"
                      className="w-6 h-5 me-2 -ms-1"
                    >
                      <g clipPath="url(#clip0)">
                        <path
                          d="M 25 2 C 12.309295 2 2 12.309295 2 25 C 2 37.690705 12.309295 48 25 48 C 37.690705 48 48 37.690705 48 25 C 48 12.309295 37.690705 2 25 2 z"
                          fill="#046865"
                          stroke="#046865"
                          strokeWidth="1.94955"
                        />
                        <path
                          d="M 25 4 C 36.609824 4 46 13.390176 46 25 C 46 36.609824 36.609824 46 25 46 C 13.390176 46 4 36.609824 4 25 C 4 13.390176 13.390176 4 25 4 z"
                          fill="#FFFFFF"
                          stroke="#046865"
                          strokeWidth="1.94955"
                        />
                        <path
                          d="M 24 13 L 24 24 L 13 24 L 13 26 L 24 26 L 24 37 L 26 37 L 26 26 L 37 26 L 37 24 L 26 24 L 26 13 L 24 13 z"
                          fill="#046865"
                          stroke="#046865"
                          strokeWidth="1.94955"
                        />
                      </g>
                    </svg>
                    Add Course
                  </button>
                  <button
                    type="button"
                    className="text-red-600 bg-white hover:bg-red-100 focus:ring-4 focus:outline-none focus:ring-red-100 font-bold rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center me-2 mb-2"
                    onClick={() => clearAll(semesterIndex)}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      x="0px"
                      y="0px"
                      width="24"
                      height="24"
                      viewBox="0 0 50 50"
                      className="me-2 -ms-1"
                    >
                      <path
                        d="M 25 2 C 12.309534 2 2 12.309534 2 25 C 2 37.690466 12.309534 48 25 48 C 37.690466 48 48 37.690466 48 25 C 48 12.309534 37.690466 2 25 2 z M 25 4 C 36.609534 4 46 13.390466 46 25 C 46 36.609534 36.609534 46 25 46 C 13.390466 46 4 36.609534 4 25 C 4 13.390466 13.390466 4 25 4 z M 32.990234 15.986328 A 1.0001 1.0001 0 0 0 32.292969 16.292969 L 25 23.585938 L 17.707031 16.292969 A 1.0001 1.0001 0 0 0 16.990234 15.990234 A 1.0001 1.0001 0 0 0 16.292969 17.707031 L 23.585938 25 L 16.292969 32.292969 A 1.0001 1.0001 0 1 0 17.707031 33.707031 L 25 26.414062 L 32.292969 33.707031 A 1.0001 1.0001 0 1 0 33.707031 32.292969 L 26.414062 25 L 33.707031 17.707031 A 1.0001 1.0001 0 0 0 32.990234 15.986328 z"
                        fill="#EF4444"
                      />
                    </svg>
                    Clear All
                  </button>
                </div>
              ) : (
                <div>
                  <p className="text-[#03045E] text-right text-lg font-sans font-normal ">
                    Semster {toRoman(semesterIndex + 1)} || GPA:{" "}
                    <span className="font-bold">
                      {" "}
                      {semesters[semesterIndex].gpa}
                    </span>
                  </p>
                </div>
              )}
            </form>
          </div>
        </div>
      ))}
      {CGPA ? (
        <>
          {" "}
          <div className="flex items-center justify-center mt-4">
            <div className="bg-[#4A9292] text-white border-2 font-extrabold text-xl border-gray-300 rounded-md shadow-md p-6 w-full max-w-sm sm:max-w-md md:max-w-4xl lg:max-w-5xl xl:max-w-6xl">
              <div className="flex items-center justify-between">
                <p>Overal CGPA</p>
                <p>{CGPA}</p>
              </div>
            </div>
          </div>
          <div className="flex text-center justify-center p-10">
            <button
              type="button"
              className="text-white w-50 bg-[#4A9292] hover:bg-[#4A9292]/90 focus:ring-4 focus:outline-none focus:ring-[#4A9292]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center  me-2 mb-2"
            >
              Download
            </button>{" "}
            <button
              type="button"
              className="text-white  bg-[#03045E] hover:bg-[#03045E]/90 focus:ring-4 focus:outline-none focus:ring-[#03045E]/50 font-medium rounded-lg text-sm px-11 py-2.5 text-center inline-flex items-center  me-2 mb-2"
              onClick={editGPA}
            >
              Edit
            </button>
          </div>
        </>
      ) : (
        <div className="flex text-center justify-center p-10">
          <button
            type="button"
            className="text-white  bg-[#03045E] hover:bg-[#03045E]/90 focus:ring-4 focus:outline-none focus:ring-[#03045E]/50 font-medium rounded-lg text-sm px-11 py-2.5 text-center inline-flex items-center  me-2 mb-2"
            onClick={calculateCGPA}
          >
            Calculate
          </button>
          <button
            type="button"
            className="text-white w-50 bg-[#4A9292] hover:bg-[#4A9292]/90 focus:ring-4 focus:outline-none focus:ring-[#4A9292]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center  me-2 mb-2"
            onClick={addSemester}
          >
            Add Semester
          </button>
        </div>
      )}
    </div>
  );
};

export default Calculate;
