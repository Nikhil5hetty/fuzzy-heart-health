import React from "react";

function RadioButton(props) {
  return (
    <>
      <div className="flex items-center">
        <input
          name={props.radioButtonFor}
          id={props.id}
          type="radio"
          value={props.value}
          className="w-[1.25rem] h-[1.15rem] text-black bg-white rounded-[3px] border border-[#92929257] focus:ring-[#faf4ed]"
          style={{ border: "1.5px solid #92929257" }}
          onChange={props.onChange}
        />
        <label
          htmlFor={props.htmlFor}
          className="ml-3 text-[16px] leading-[24px] font-normal"
        >
          {props.name}
        </label>
      </div>
    </>
  );
}

export default RadioButton;
