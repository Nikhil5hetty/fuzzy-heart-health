import React from "react";
import Title from "../components/Title";
import numberThree from "../images/numberThree.svg";
import RadioButton from "../components/RadioButton";
import Label from "../components/Label";
import Steps from "../components/StepsBox/Steps";
import CounterWithHeading from "../components/CounterWithHeading";
import BackButton from "../components/BackButton";
import NextButton from "../components/NextButton";
import { withGlobalState } from 'react-globally';


function Evaluation3(props) {

  function handleBmiChange(e){
    //setSmokerClick(e.target.checked);
    props.setGlobalState({ bmi: e.target.value });
    console.log(props.globalState);

  }

  return (
    <>
    <div className="max-w-6xl m-auto mb-20">
      {/* TOP TITLE */}
      <Title name={"We are getting there"} />

      <div className="flex justify-between">
        {/* LEFT QUESTIONS SECTION */}
        <div className="w-[38%] pt-8">
          {/* COUNTER - HEADING */}
          <CounterWithHeading
            numberImg={numberThree}
            name={"Detailed Health Literacy"}
          />

          <div className="mb-11 bg-[#00cf5f0a] border-l-[9px] border-greenNormal pt-[30px] px-8 pb-14">
            <form>
              <div className="space-y-4 mb-5">
                {/* RADIO BUTTONS */}
                <div>
                  <Label name={"How is your Attrial Fibrillation?"} />

                  <div className="flex items-start flex-col mt-2">
                    <RadioButton
                      radioButtonFor={"attrialFibrillation"}
                      id={"Irregular Heartbeat"}
                      htmlFor={"Irregular Heartbeat"}
                      name={"Irregular Heartbeat"}
                    />

                    <RadioButton
                      radioButtonFor={"attrialFibrillation"}
                      id={"I don't know"}
                      htmlFor={"I don't know"}
                      name={"I don't know"}
                    />

                    <RadioButton
                      radioButtonFor={"attrialFibrillation"}
                      id={"Regular Heartbeat"}
                      htmlFor={"Regular Heartbeat"}
                      name={"Regular Heartbeat"}
                    />
                  </div>
                </div>

                {/* RADIO BUTTONS */}
                <div>
                  <Label
                    name={"Have you been diagnosed with Diabetes Mellitus?"}
                  />

                  <div className="flex items-center mt-2">
                    <RadioButton
                      radioButtonFor={"diabetesMellitus"}
                      id={"Yes"}
                      htmlFor={"Yes"}
                      name={"Yes"}
                    />

                    <div className="ml-7">
                      <RadioButton
                        radioButtonFor={"diabetesMellitus"}
                        id={"No"}
                        htmlFor={"No"}
                        name={"No"}
                      />
                    </div>
                  </div>
                </div>

              
                {/* RADIO BUTTONS */}
                <div>
                  <Label name={"Do you exercise regularly?"} />

                  <div className="flex items-center mt-2">
                    <RadioButton
                      radioButtonFor={"exercise"}
                      id={"Yes"}
                      htmlFor={"Yes"}
                      name={"Yes"}
                    />

                    <div className="ml-7">
                      <RadioButton
                        radioButtonFor={"exercise"}
                        id={"No"}
                        htmlFor={"No"}
                        name={"No"}
                      />
                    </div>
                  </div>
                </div>

                {/* INPUT */}
                <div className="max-w-[237px]">
                  <Label name={"Please share your body mass index below:"} />
                  <div className="mt-[11px] relative">
                    
                    <input
                      type="number"
                      step=".01"
                      pattern="^\d*(\.\d{0,2})?$" 
                      className="border-[0px] border-4[#92929257] w-full py-1.5 px-4 placeholder:text-[#8080806b]"
                      placeholder="BMI Value"
                      onChange={handleBmiChange}
                    />
                  </div>
                </div>

              </div>
            </form>
          </div>

          <div className="flex justify-between items-center">
            {/* BACK BUTTON */}
            <BackButton goTo={"/evaluation2"} />

            {/* NEXT BUTTON */}
            <NextButton goTo={"/evaluation4"} />
          </div>
        </div>

        
        {/* RIGHT STEPS */}
        <Steps
          stepOneColor={"bg-greenNormal"}
          stepTwoColor={"bg-greenNormal"}
          stepThreeColor={"bg-greenNormal"}
          stepFourColor={"bg-[#BDBCBC]"}
          stepFiveColor={"bg-[#BDBCBC]"}
          buttonBgColor={"#D9D9D9"}
        />
      </div>
      </div>
    </>
  );
}

export default withGlobalState(Evaluation3);
