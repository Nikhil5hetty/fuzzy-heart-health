import React from "react";

function CounterRadioButton(props) {
  return (
    <>
      <div className="radioCounterHolder">
        <input
          name={props.radioButtonFor}
          id={props.id}
          className="radioCounter"
          type="radio"
          value=""
        />
        <label className="mylabel" htmlFor={props.htmlFor}>
          <span>{props.number}</span>
        </label>
      </div>
    </>
  );
}

export default CounterRadioButton;
