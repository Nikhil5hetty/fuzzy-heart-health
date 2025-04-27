import React from "react";
import back_arrow_icon from "../images/back_arrow_icon.svg";
import { Link } from "react-router-dom";

function BackButton(props) {
  return (
    <>
    <Link
    to={props.goTo}
  >
      <button className="mr-auto flex items-center">
        <span className="bg-[#BDBCBC] flex items-center justify-center w-[60px] h-[60px] rounded-full">
          <img src={back_arrow_icon} alt="back-arrow-img" />
        </span>
        <span className="ml-4 font-extrabold text-[32px] leading-[28px] text-blueLight">
          Back
        </span>{" "}
      </button>
      </Link>
    </>
  );
}

export default BackButton;
