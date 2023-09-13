import { useRef } from "react";
import YellowButton from "../shared/YellowButton";
import Image from "next/image";
import RightArrow from "../../images/sectionsAssets/rightArrow.png";
import LeftArrow from "../../images/sectionsAssets/leftArrow.png";
import SectionTitle from "../../components/shared/SectionTitle";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { speakers } from "./data";

const OurSpeakers = () => {
  const swiperRef = useRef(null);

  return (
    <section id="speakers" className="relative section-container mt-24">
      <div className="mb-12 lg:mb-0">
        <SectionTitle title="Our Team" />
      </div>

      {/* ... Various decorative images ... */}

      <div className="flex items-center md:space-x-8 sm:mt-[40px] md:mt-[100px] lg:space-x-8">
        
        <div
          onClick={() => swiperRef.current.swiper.slidePrev()}
          className="cursor-pointer hidden md:flex w-[200px] md:w-[120px] lg:w-1/6"
        >
          <Image src={LeftArrow} alt="Previous" />
        </div>

        <Swiper
          ref={swiperRef}
          spaceBetween={10}
          breakpoints={{
            640: {
              slidesPerView: 1,
            },
            700: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 3,
            },
          }}
        >
          {speakers.map((speaker, idx) => (
            <SwiperSlide key={idx}>
              {({ isActive, isNext, isPrev }) => (
                <div
                  className={`${
                    isActive
                      ? "lg:scale-75"
                      : isPrev || isNext
                      ? "lg:scale-100"
                      : "lg:scale-75"
                  }`}
                >
                  <div className="sm:mt-[50px]">
                    <div className="relative border-qiskit-black border-4 -z-10">
                      <Image src={speaker.image} alt={speaker.name} layout="responsive" />
                    </div>
                    <div className="relative w-4/5 mx-auto z-10 -mt-20">
                      <YellowButton title={speaker.name} />
                    </div>
                    <div className="mx-auto flex justify-center 
                    text-[17px] font-semibold whitespace-pre">
                      {/* <p dangerouslySetInnerHTML={{ __html: speaker.profession }}></p> */}
                      <p>{speaker.profession}</p>
                    </div>
                  </div>
                </div>
              )}
            </SwiperSlide>
          ))}
        </Swiper>

        <div
          onClick={() => swiperRef.current.swiper.slideNext()}
          className="cursor-pointer hidden md:flex w-[200px] md:w-[120px] lg:w-1/6"
        >
          <Image src={RightArrow} alt="Next" />
        </div>
      </div>
    </section>
  );
};

export default OurSpeakers;
