import Image from "next/image";
import WTM from "../../images/logos/WTMAlgiers.png";
import SectionTitle from "../shared/SectionTitle";
import GDG from "../../images/logos/GDGAlgiers.png";
import ParagSection from "../shared/ParagSection";
import globe from "../../images/shapes/globe.png";
import computer from "../../images/shapes/computer.png";
import maqam from "../../images/shapes/MaqamWhite.png";
import chainlink from "../../images/logos/Chainlink.svg"
const AboutUs = () => {
  return (
    <section id="about-us">
      {/* <div className=" z-0 h-[100px] max-w-[100%] bg-gradient-to-t from-[#3177ab] to-qiskit-white"></div> */}

      <div className="relative about-bg py-16">
        <div className="absolute top-1/4 right-4 lg:w-[55px] h-[32px] w-[32px] lg:h-[55px] 2xl:w-[82px] 2xl:h-[82px]">
          <Image src={globe} layout="fill" />
        </div>

        <div className="absolute bottom-8 left-4 w-[32px] h-[32px] md:w-[40px] md:h-[40px] lg:w-[55px] lg:h-[55px] 2xl:w-[82px] 2xl:h-[82px]">
          <Image src={computer} layout="fill" />
        </div>

        <div className="absolute bottom-1/2 left-8 w-[75px] h-[53px] md:w-[40px] md:h-[40px] lg:w-[106px] lg:h-[76px] 2xl:w-[160px] 2xl:h-[112px]">
          <Image src={maqam} layout="fill" />
        </div>

        <div className="w-10/12 mx-auto flex flex-col gap-8">
          <SectionTitle isWhite={true} title={"About us"} />
          <div className="flex flex-col gap-12 lg:gap-28">
            <ParagSection
              keyword1={"Chainlink "}
              paragraph1={`acts like a bridge between blockchain and real-world info, mainly on Ethereum. It securely brings outside data to smart contracts on the blockchain, ensuring it's reliable. What's unique is that it can verify contract conditions without human involvement. It connects contracts to real-world facts, keeping them honest and secure.`}
              keyword2={" Together they are making"}
              paragraph2={` possible next-generation smart contracts powered by real-world data, events, and systems. Be a part of the future.`}
              img={chainlink}
              reverse={false}
              redirect={"https://chain.link"}
              buttonTitle={'Visit us'}
            ></ParagSection>
            <ParagSection
              keyword1={"Chainlink Dehradun's "}
              paragraph1={`passionately spreading knowledge about the exciting realm of Web3.0 and empowers developers with valuable insights into ChainLink Tools for Web3
               Development. We achieve this mission by hosting engaging local meetups and events in the vibrant city of Dehradun.`}
              paragraph2={`and hosts a variety of events activities for developers through different events that aim to help the developers community get the latest technology updates.`}
              keyword3={' For future events join us at'}
              img={chainlink}
              reverse={true}
              redirect={"https://www.meetup.com/pro/chainlink/"}
              buttonTitle={'Chainlink Meetup'}
            ></ParagSection>
          </div>
        </div>
      </div>
      {/* <div className=" z-0 h-[100px] max-w-[100%] bg-gradient-to-b from-qiskit-blue-normal to-qiskit-white"></div> */}
    </section>
  );
};

export default AboutUs;
