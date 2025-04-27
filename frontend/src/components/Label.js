import React from "react";

function Label(props) {
  return (
    <>
      <label className="text-[12px] leading-[12px] text-blackCaption">
        {props.name}
      </label>
    </>
  );
}

export default Label;
