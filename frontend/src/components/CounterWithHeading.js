import React from "react";

function CounterWithHeading(props) {
  return (
    <>
      <div className="flex items-center mb-[26px]">
        <div className="flex w-[42px] h-[42px] rounded-full items-center justify-center bg-greenNormal">
          <img src={props.numberImg} alt="number-img" />
        </div>
        <h3 className="font-bold text-[32px] leading-[28px] ml-5">
          {props.name}
        </h3>
      </div>
    </>
  );
}

export default CounterWithHeading;
