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
    { courses: [{ courseName: "", grade: "", credits: "" }], gpa: "" },
  ]);
  const [CGPA, setCGPA] = useState("");

  // Add a new semester
  const addSemester = () => {
    setSemesters([
      ...semesters,
      { courses: [{ courseName: "", grade: "", credits: "" }], gpa: "" },
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
    setSemesters(updatedSemesters);
  };

  // Remove a course from a semester
  const removeCourse = (semesterIndex, courseIndex) => {
    const updatedSemesters = [...semesters];
    updatedSemesters[semesterIndex].courses = updatedSemesters[
      semesterIndex
    ].courses.filter((_, i) => i !== courseIndex);
    setSemesters(updatedSemesters);
  };

  // Update course details
  const updateCourse = (semesterIndex, courseIndex, field, value) => {
    const updatedSemesters = [...semesters];
    updatedSemesters[semesterIndex].courses[courseIndex][field] = value;
    setSemesters(updatedSemesters);
  };

  // Calculate GPA for a semester
  const calculateGPA = (semesterIndex) => {
    const semester = semesters[semesterIndex];
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
    setSemesters(updatedSemesters);
    return gpa;
  };

  // Calculate CGPA
  const calculateCGPA = () => {
    let totalGPA = 0;
    let count = 0;

    semesters.forEach((semester) => {
      if (semester.gpa) {
        totalGPA += parseFloat(semester.gpa);
        count++;
      }
    });

    const cgpa = count > 0 ? (totalGPA / count).toFixed(2) : "";
    setCGPA(cgpa);
  };

  return (
    <div className="min-h-screen bg-[#F2F7F7] border-2 border-gray-300 rounded-md shadow-md p-6 w-full">
      <p className="text-[#03045E] font-sans font-black md:text-4xl px-6 pt-8">
        GPA CALCULATOR
      </p>

      {/* Semester Cards */}
      {semesters.map((semester, semesterIndex) => (
        <div
          key={semesterIndex}
          className="bg-white border-2 border-gray-300 rounded-md shadow-md p-6 mt-6"
        >
          <div className="flex justify-between items-center">
            <span className="block text-[#03045E] font-bold text-2xl">
              Semester {toRoman(semesterIndex + 1)}
            </span>
            <button
              onClick={() => removeSemester(semesterIndex)}
              className="text-red-500 font-bold"
            >
              Remove
            </button>
          </div>
          {semester.courses.map((course, courseIndex) => (
            <div key={courseIndex} className="grid grid-cols-3 gap-4 mt-4">
              <input
                type="text"
                placeholder="Course Name"
                value={course.courseName}
                onChange={(e) =>
                  updateCourse(
                    semesterIndex,
                    courseIndex,
                    "courseName",
                    e.target.value
                  )
                }
                className="p-2 border rounded"
              />
              <select
                value={course.grade}
                onChange={(e) =>
                  updateCourse(
                    semesterIndex,
                    courseIndex,
                    "grade",
                    e.target.value
                  )
                }
                className="p-2 border rounded"
              >
                <option value="">Grade</option>
                {Object.keys(GradingSystem).map((grade) => (
                  <option key={grade} value={grade}>
                    {grade}
                  </option>
                ))}
              </select>
              <input
                type="number"
                placeholder="Credits"
                value={course.credits}
                onChange={(e) =>
                  updateCourse(
                    semesterIndex,
                    courseIndex,
                    "credits",
                    e.target.value
                  )
                }
                className="p-2 border rounded"
              />
              <button
                onClick={() => removeCourse(semesterIndex, courseIndex)}
                className="text-red-500 font-bold col-span-3"
              >
                Remove Course
              </button>
            </div>
          ))}
          <button
            onClick={() => addCourse(semesterIndex)}
            className="mt-4 text-blue-500 font-bold"
          >
            Add Course
          </button>
          <button
            onClick={() => calculateGPA(semesterIndex)}
            className="mt-4 text-green-500 font-bold"
          >
            Calculate GPA
          </button>
          {semester.gpa && <p className="mt-4">GPA: {semester.gpa}</p>}
        </div>
      ))}

      {/* Buttons */}
      <div className="flex justify-center mt-6 gap-4">
        <button
          onClick={addSemester}
          className="bg-blue-500 text-white px-4 py-2 rounded"
        >
          Add Semester
        </button>
        <button
          onClick={calculateCGPA}
          className="bg-green-500 text-white px-4 py-2 rounded"
        >
          Calculate CGPA
        </button>
      </div>

      {/* CGPA Display */}
      {CGPA && (
        <div className="mt-6 text-center text-xl font-bold text-green-500">
          Overall CGPA: {CGPA}
        </div>
      )}
    </div>
  );
};

export default Calculate;
