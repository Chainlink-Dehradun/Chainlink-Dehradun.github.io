import { useState } from "react";
import Image from "next/image";
import Chainlink from "../../images/logos/Chainlink.svg";
import NavLinks from "./links";

const Navbar = () => {
  const [isNavToggled, setIsNavToggled] = useState(false);

  const handleNavigation = (e, sectionId) => {
    e.preventDefault();
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header className="pt-8 lg:pt-1 flex flex-col gap-8">
      {/* Desktop menu */}
      <div>
        <div className="flex justify-between items-center">
          <div className="my-2 flex flex-row items-center space-x-3">
            <Image src={Chainlink} alt="Chainlink Logo" />
            <p className="font-medium text-qiskit-white text-center lg:text-left leading-[2rem] lg:text-2xl 2xl:text-4xl 2xl:leading-[2.875rem]">
              Chainlink<span className="text-qiskit-blue"> Dehradun</span>
            </p>
          </div>

          <ul className="hidden lg:flex items-center text-xl gap-16 font-medium text-qiskit-white 2xl:text-4xl 2xl:gap-24">
            {NavLinks.map((navLink, idx) => (
              <li key={idx} className="cursor-pointer hover:text-qiskit-yellow transition-all duration-500 relative">
                <a 
                  onClick={(e) => handleNavigation(e, navLink.sectionId)}
                  href={`#${navLink.sectionId}`}
                >
                  {navLink.content}
                  {navLink.content === "Home" && (
                    <div className="absolute left-0 -bottom-[4px] h-[5px] w-4/6 bg-qiskit-white"></div>
                  )}
                </a>
              </li>
            ))}
          </ul>

          <div
            onClick={() => setIsNavToggled(!isNavToggled)}
            className="flex flex-col cursor-pointer gap-2 lg:hidden"
          >
            <div className="burger-line"></div>
            <div className="burger-line"></div>
            <div className="burger-line"></div>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isNavToggled && (
        <div className="flex flex-col items-center lg:hidden">
          <ul className="flex flex-col items-center text-xl gap-16 font-medium text-qiskit-white 2xl:text-4xl 2xl:gap-24">
            {NavLinks.map((navLink, idx) => (
              <li key={idx} className="cursor-pointer relative transition-all duration-500 hover:text-qiskit-yellow">
                <a 
                  onClick={(e) => handleNavigation(e, navLink.sectionId)}
                  href={`#${navLink.sectionId}`}
                >
                  {navLink.content}
                  {navLink.content === "Home" && (
                    <div className="absolute left-2 -bottom-[4px] h-[5px] w-4/6 bg-qiskit-white"></div>
                  )}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
};

export default Navbar;
