const CGPA = () => {
  return (
    <div
      className="bg-cover bg-center h-screen"
      style={{
        backgroundImage:
          "url('https://res.cloudinary.com/dzvvkja2y/image/upload/v1731945299/bg_gpa_cal_pejlof.png')",
      }}
    >
      <div className="fixed bottom-5 flex items-center justify-center">
        <span className="text-3xl md:text-4xl text-[#03045E] text-center md:text-left font-sans font-black md:ml-10 whitespace-nowrap">
          GPA CALCULATOR{" "}
        </span>
      </div>
    </div>
  );
};

export default CGPA;
