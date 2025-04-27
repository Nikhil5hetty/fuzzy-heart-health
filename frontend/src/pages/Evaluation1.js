import React from "react";
import Title from "../components/Title";
import numberOne from "../images/numberOne.svg";
import user_icon from "../images/user_icon.svg";
import RadioButton from "../components/RadioButton";
import Label from "../components/Label";
import Steps from "../components/StepsBox/Steps";
import CounterWithHeading from "../components/CounterWithHeading";
import NextButton from "../components/NextButton";
import { withGlobalState } from 'react-globally';


function Evaluation1(props) {

  function handleAgeChange(e){
    //setSmokerClick(e.target.checked);
    props.setGlobalState({ age: e.target.value });
    console.log(props.globalState);
    
  }

  function handleGenderChange(e){
    //setSmokerClick(e.target.checked);
    props.setGlobalState({ gender: e.target.value });
    console.log(props.globalState);
    
  }

  return (
    <>
    <div className="max-w-6xl m-auto mb-20">
      {/* TOP TITLE */}
      <Title name={"Let’s get started"} />

      <div className="flex justify-between">
        {/* LEFT QUESTIONS SECTION */}
        <div className="w-[38%] pt-8">
          {/* COUNTER - HEADING */}
          <CounterWithHeading numberImg={numberOne} name={"Key Information"}/>

          <div className="mb-11 bg-[#00cf5f0a] border-l-[9px] border-greenNormal pt-[30px] px-8 pb-14">
            <form>
              <div className="space-y-4 mb-5">
                {/* INPUT */}
                <div className="max-w-[237px]">
                  <Label name={"Name"} />
                  <div className="mt-[11px] relative">
                    <img
                      src={user_icon}
                      className="w-[22px] h-[20px] absolute top-1/2 left-[5%] translate-x-0 -translate-y-1/2"
                      alt="user-icon"
                    />
                    <input
                      className="border-[1.5px] border-[#92929257] w-full py-1.5 px-9 placeholder:text-[#8080806b]"
                      placeholder="Name"
                    />
                  </div>
                </div>

                {/* INPUT */}
                <div className="max-w-[237px]">
                  <Label name={"Surname"} />
                  <div className="mt-[11px] relative">
                    <img
                      src={user_icon}
                      className="w-[22px] h-[20px] absolute top-1/2 left-[5%] translate-x-0 -translate-y-1/2"
                      alt="user-icon"
                    />
                    <input
                      className="border-[1.5px] border-[#92929257] w-full py-1.5 px-9 placeholder:text-[#8080806b]"
                      placeholder="Surname"
                    />
                  </div>
                </div>

                {/* INPUT */}
                <div className="max-w-[237px]">
                  <Label name={"Age"} />
                  <div className="mt-[11px] relative">
                    <img
                      src={user_icon}
                      className="w-[22px] h-[20px] absolute top-1/2 left-[5%] translate-x-0 -translate-y-1/2"
                      alt="user-icon"
                    />
                    <input
                      type="number"
                      className="border-[1.5px] border-[#92929257] w-full py-1.5 px-9 placeholder:text-[#8080806b]"
                      placeholder="Age"
                      onChange={handleAgeChange}
                    />
                  </div>
                </div>
              </div>

              {/* GENDER */}
              <div className="mb-8">
                <div className="flex justify-between items-center">
                  <Label name={"Gender"} />

                  <span className="text-[#4884FA] text-[12px] leading-[12px] cursor-pointer">
                    Why do we need your gender?
                  </span>
                </div>

                <div className="flex items-center">
                  <RadioButton
                    radioButtonFor={"gender"}
                    id={"Female"}
                    htmlFor={"Female"}
                    name={"Female"}
                    value={"Female"}
                    onChange={handleGenderChange}
                  />

                  <div className="ml-7">
                    <RadioButton
                      radioButtonFor={"gender"}
                      id={"Male"}
                      htmlFor={"Male"}
                      name={"Male"}
                      value={"Male"}
                      onChange={handleGenderChange}
                    />
                  </div>
                </div>
              </div>

              {/* PRIVACY POLICY */}
              <div className="mt-7">
                <Label name={"Privacy Policy"} />

                <div className="mt-2.5 flex items-center">
                  <input
                    name="radio-button"
                    id="PrivacyPolicy"
                    type="checkbox"
                    value=""
                    className="w-[1.05rem] h-[0.95rem] text-black bg-white rounded-[3px] border border-[#92929257] focus:ring-[#faf4ed]"
                    style={{ border: "1.5px solid #92929257" }}
                  />
                  <label
                    htmlFor="PrivacyPolicy"
                    className="ml-3 text-blueLight text-[12px] leading-[18px] font-normal"
                  >
                    I have read accept Soya’s Privacy Policy and User Agreement
                  </label>
                </div>
              </div>
            </form>
          </div>

          {/* NEXT BUTTON */}
          <NextButton goTo={"/evaluation2"}/>
        </div>

        {/* RIGHT STEPS */}
        <Steps
          stepOneColor={"bg-greenNormal"}
          stepTwoColor={"bg-[#BDBCBC]"}
          stepThreeColor={"bg-[#BDBCBC]"}
          stepFourColor={"bg-[#BDBCBC]"}
          stepFiveColor={"bg-[#BDBCBC]"}

          buttonBgColor={"#D9D9D9"}
        />
      </div>
      </div>
    </>
  );
}

export default withGlobalState(Evaluation1);
