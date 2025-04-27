import React from "react";
import arrow_icon from "../images/arrow_icon.svg";
import { Link } from "react-router-dom";

function NextButton(props) {
 
  return (
    <><Link
    to={props.goTo}
  >
      <button className="ml-auto flex items-center">
      
        <span className="mr-4 font-extrabold text-[32px] leading-[28px] text-blueLight">
          Next
        </span>{" "}
        <span className="bg-blueDark flex items-center justify-center w-[60px] h-[60px] rounded-full">
          <img src={arrow_icon} alt="arrow-img" />
        </span>
       
      </button>
      </Link>
    </>
  );
}

export default NextButton;
