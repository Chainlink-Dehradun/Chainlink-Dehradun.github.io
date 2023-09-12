import Image from "next/image";
import YellowButton from "../shared/YellowButton"
const ParagSection = ({
  keyword1,
  paragraph1,
  keyword2,
  paragraph2,
  keyword3,
  img,
  reverse,
  redirect,
  buttonTitle
}) => {
  return (
    <div className="flex flex-col gap-10 items-center lg:flex-row">
      <div className="flex flex-col gap-11 flex-1">
        <p className="text-qiskit-white text-sm lg:text-xl font-medium leading-6 lg:leading-8 2xl:text-4xl 2xl:leading-[3rem] lg:pl-8">
          <span className="font-bold text-qiskit-black">{keyword1}</span>
          {paragraph1}
          <span className="font-bold text-qiskit-black">{keyword2}</span>
          {paragraph2}
         <span className="font-bold text-qiskit-black">{keyword3}</span>
        </p>
        
        <div className="relatve">
          <YellowButton redirect={redirect} title={buttonTitle} />
        </div>
      </div>

      <div
        className={`relative w-[250px] h-[250px] lg:w-[321px] 2xl:w-[480px]  lg:h-[321px]  2xl:h-[480px] ${
          reverse && "lg:order-first"
        }`}
      >
        <Image src={img} alt="" layout="fill" />
      </div>
    </div>
  );
};

export default ParagSection;
