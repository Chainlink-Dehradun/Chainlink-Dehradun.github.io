import Image from "next/image";
import Purplebutton from "../shared/Purpulebutton"
const ParagSection = ({
  redirect,
  buttonTitle
}) => {
  return (
    <div className="flex flex-col gap-10 items-center lg:flex-row">
      <div className="flex flex-col gap-11 flex-1">
       
        
        <div className="relatve">
          <Purplebutton redirect={redirect} title={buttonTitle} />
        </div>
      </div>

      
    </div>
  );
};

export default ParagSection;
