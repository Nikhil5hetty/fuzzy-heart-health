import React from "react";
import dashed_line from "../../images/dashed_line.svg";

function StepsItem(props) {
  return (
    <>
      <div className="flex items-start">
        <div className="flex flex-col items-center">
          <div className={props.bgColor} style={{borderRadius:"9999px"}}>
            <div className="flex items-center justify-center w-[42px] h-[42px] rounded-full">
                <img src={props.numberImg} alt="numberOne-img" />
            </div>
          </div>
          <div className="mt-3" style={{display:props.show}}>
            <img className={props.dashedLineDir} src={dashed_line} alt="dashed_line" />
          </div>
        </div>
        <div className="ml-5 pt-1.5">
          <h4 className="font-bold text-[16px] leading-[28px] text-black">
            {props.title}
          </h4>
          <p className="font-bold text-[16px] leading-[28px] text-[#929292]">
            {props.desc}
          </p>
        </div>
      </div>
    </>
  );
}

export default StepsItem;
