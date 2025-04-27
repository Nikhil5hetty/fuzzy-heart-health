import React from "react";
import numberOne from "../../images/numberOne.svg";
import numberTwo from "../../images/numberTwo.svg";
import numberThree from "../../images/numberThree.svg";
import numberFour from "../../images/numberFour.svg";
import numberFive from "../../images/numberFive.svg";
import StepsItem from "./StepsItem";
import { Link } from "react-router-dom";

function Steps(props) {
  return (
    <>
      <div className="bg-[#16195e0a] rounded-[10px] w-[50%] pt-[33px] px-12 pb-11">
        <div className="space-y-2.5 mb-32">
          {/* STEP */}
          <StepsItem
            bgColor={props.stepOneColor}
            numberImg={numberOne}
            title={"Key Information"}
            desc={
              "We are happy to get to know you better for your first Soya assessment."
            }
            dashedLineDir={"scale-[1]"}
          />

          {/* STEP */}
          <StepsItem
            bgColor={props.stepTwoColor}
            numberImg={numberTwo}
            title={"Health Literacy"}
            desc={
              "Here we will start with some general questions. Then on the next steps, we will require more detailed measurements."
            }
            dashedLineDir={"-scale-[1]"}
          />

          {/* STEP */}
          <StepsItem
            bgColor={props.stepThreeColor}
            numberImg={numberThree}
            title={"Detailed Health Literacy"}
            desc={
              "Here we will continue with more detailed questions. Then on the next steps, we will require more detailed measurements."
            }
            dashedLineDir={"scale-[1]"}
          />

          {/* STEP */}
          <StepsItem
            bgColor={props.stepFourColor}
            numberImg={numberFour}
            title={"Recent Health Results"}
            desc={
              "Please give the most recent information on your health results on the mentioned topics."
            }
            dashedLineDir={"-scale-[1]"}
          />

          {/* STEP */}
          <StepsItem
            bgColor={props.stepFiveColor}
            numberImg={numberFive}
            title={"Additional Information "}
            desc={
              "Please leave any additional information on the mentioned topics."
            }
            show={"none"}
            dashedLineDir={"scale-[1]"}
          />
        </div>
        <div className="px-6">
        <Link to="/dashboard">
          <button className="py-1.5 w-full rounded-[10px] font-semibold text-[20px] text-white leading-[25px]" style={{background: props.buttonBgColor}}>
            Take me to my Dashboard
          </button>
        </Link>
        </div>{" "}
      </div>
    </>
  );
}

export default Steps;
