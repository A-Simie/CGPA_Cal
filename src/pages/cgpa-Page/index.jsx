const CGPA = () => {
  return (
    <div
      className="bg-cover bg-center h-screen"
      style={{
        backgroundImage:
          "url('https://res.cloudinary.com/dzvvkja2y/image/upload/v1731945299/bg_gpa_cal_pejlof.png')",
      }}
    >
      <div className="fixed bottom-5 flex space-x-30 items-center justify-center">
        <span className="text-4xl text-[#03045E] font-sans font-black">
          GPA CALCULATOR{" "}
        </span>
      </div>
    </div>
  );
};

export default CGPA;
