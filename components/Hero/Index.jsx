import Image from "next/image";
import Navbar from "./Navbar";
import SocialMenu from "../SocialMenu/SocialMenu";
import pic from "../../images/logos/14.png";

import Rsvp from "../shared/RsvpSection";

// import web from "../../images/logos/web.png";
import Arrow from "../../images/shapes/Arrow.png";
import CounterContainer from "./CounterContainer";
import Maqam from "../../images/shapes/MaqamWhite.png";
import Atom from "../../images/shapes/atomWhite.png";
import Globe from "../../images/shapes/globe.png";
import Computer from "../../images/shapes/computerWhite.png";
import Tilt from "react-parallax-tilt";
import Typewriter from "typewriter-effect";
import ParagSection from "../shared/ParagSection";


const Hero = () => {
  return (
    <section id="home" className="min-h-screen hero-bg">
      <div className="section-container pb-24 md:pb-0">
        <Navbar />
        <div className="flex flex-col gap-16 lg:gap-0 relative mt-10 mb-4">
          <div className="w-12 h-12 absolute top-1/4 left-4 lg:top-4 lg:left-4">
            <Image src={Atom} />
          </div>
          <div className="w-12 h-12 absolute top-12 left-[90%] lg:top-4 lg:left-1/4">
            <Image src={Globe} />
          </div>
          <div className="hidden lg:block w-16 h-16 absolute top-4 right-16">
            <Image src={Maqam} />
          </div>
          <div className="flex flex-col lg:flex-row items-center">
            <div className="flex flex-col gap-7 flex-1 lg:pl-12 text-qiskit-white">
              <h1 className="font-bold text-center lg:text-left text-4xl lg:text-6xl 2xl:text-7xl leading-[4.5rem]">
                <Typewriter
                  options={{
                    strings: ["Connect | Learn | Develop"],
                    autoStart: true,
                    loop: true,
                  }}
                />
              </h1>
              <p className="font-medium text-center lg:text-left leading-[2rem] lg:text-2xl 2xl:text-4xl 2xl:leading-[2.875rem]">
                Your chance to discover the Web 3.0  world!
              </p>
              {/* <div className="flex items-end">
                <div className="relative h-[67px] bounce w-[67px] 2xl:w-[101px] 2xl:h-[114px]">
                  <Image src={Arrow} layout="fill" />
                </div>
                <div className="mb-[-50px] 2xl:mb-[-110px]">
                  <Rsvp
                    redirect={'https://events.chain.link/events/details/chainlink-chainlink-dehradun-connected-smart-contracts-presents-smart-contract-developer-bootcamp/'}
                    buttonTitle={'Rsvp now!'}
                  ></Rsvp>
                </div>
              </div> */}
            </div>

            <div className="cursor-pointer -mt-16 order-first lg:order-last ">
          <Tilt>
            <Image src={pic} alt="Qiskit" />
          </Tilt>
        </div>
          </div>

          <div className="flex items-center justify-center space-x-4">
            {/* <p className="font-medium text-qiskit-white text-center lg:text-left leading-[2rem] lg:text-2xl 2xl:text-4xl 2xl:leading-[2.875rem]">
                Share
            </p> */}
            <SocialMenu />
            <CounterContainer countDownLimit={1666425600000} />
          </div>


          <div className="w-12 h-12 absolute bottom-16 left-8">
            <Image src={Atom} />
          </div>
          <div className="hidden lg:block w-12 h-12 absolute bottom-1/4 right-8">
            <Image src={Globe} />
          </div>
          <div className="hidden lg:block w-12 h-12 absolute bottom-1/4 right-2/4">
            <Image src={Computer} />
          </div>
        </div>
        
      </div>
      <ParagSection
          redirect={'https://events.chain.link/events/details/chainlink-chainlink-dehradun-connected-smart-contracts-presents-smart-contract-developer-bootcamp/'}
          buttonTitle={'Rsvp now!'}
      ></ParagSection>
      
    </section>
  );
};

export default Hero;
