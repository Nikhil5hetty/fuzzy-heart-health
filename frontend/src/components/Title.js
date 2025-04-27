import React from "react";
import TitleDesc from "./TitleDesc";

function Title(props) {
  return (
    <>
      <div className="mt-10 mb-[60px]">
      <h1 className="mb-9 font-glory font-extrabold text-[#233348] text-[48px] leading-[54px]">
        {props.name}
      </h1>

      <TitleDesc />
      </div>
    </>
  );
}

export default Title;
