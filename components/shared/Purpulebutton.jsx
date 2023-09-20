const Button = ({ title }) => {
  return (
   <a href="https://chat.whatsapp.com/FF3Vz1PeiJACST7WNrACNI"
   target="_blank" rel="noopener noreferrer">
     <button
      disabled={false}
      className="z-2"
    >
      <div className="bg-[url('/hero/purpule_button.svg')] bg-no-repeat bg-center bg-contain z-10">
        <div className=" place-content-center flex justify-center">
          <div className="h-[90px] md:h-[110px] 2xl:h-[200px] mx-[40px] md:mx-[40px] 2xl:mx-[60px] sm:font-medium text-qiskit-white text-[17px]  2xl:text-[24px] pt-[30px] md:pt-[40px] 2xl:pt-[80px] sm:pt-[30px]">
            {title}
          </div>
        </div>
      </div>
    </button>
   </a>
  );
};

export default Button;
