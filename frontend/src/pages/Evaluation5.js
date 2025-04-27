import React from "react";
import Title from "../components/Title";
import numberFive from "../images/numberFive.svg";
import RadioButton from "../components/RadioButton";
import Label from "../components/Label";
import Steps from "../components/StepsBox/Steps";
import CounterWithHeading from "../components/CounterWithHeading";
import BackButton from "../components/BackButton";
import NextButton from "../components/NextButton";
import CounterRadioButton from "../components/CounterRadioButton";
import { withGlobalState } from 'react-globally';

function Evaluation5(props) {

  function handleAreaChange(e){
    //setSmokerClick(e.target.checked);
    props.setGlobalState({ residence_type: e.target.value });
    console.log(props.globalState);
    
  }

  function handleEmploymentChange(e){
    //setSmokerClick(e.target.checked);
    props.setGlobalState({ work_type: e.target.value });
    console.log(props.globalState);
    
  }

  

  return (
    <>
    <div className="max-w-6xl m-auto mb-20">
      {/* TOP TITLE */}
      <Title name={"Finally!"} />

      <div className="flex justify-between">
        {/* LEFT QUESTIONS SECTION */}
        <div className="w-[38%] pt-8">
          {/* COUNTER - HEADING */}
          <CounterWithHeading
            numberImg={numberFive}
            name={"Additional Information"}
          />

          <div className="mb-11 bg-[#00cf5f0a] border-l-[9px] border-greenNormal pt-[30px] px-8 pb-14">
            <form>
              <div className="space-y-4 mb-5">
                {/* RADIO BUTTONS */}
                <div>
                  <Label
                    name={"Do you have any other non-communicable diseases?"}
                  />

                  <div className="flex items-start flex-col mt-2">
                    <RadioButton
                      radioButtonFor={"nonCommunicable"}
                      id={"Cardio Vascular Disease"}
                      htmlFor={"Cardio Vascular Disease"}
                      name={"Cardio Vascular Disease"}
                    />

                    <RadioButton
                      radioButtonFor={"nonCommunicable"}
                      id={"Respiratory disease"}
                      htmlFor={"Respiratory disease"}
                      name={"Respiratory disease"}
                    />

                    <RadioButton
                      radioButtonFor={"nonCommunicable"}
                      id={"Diabetes"}
                      htmlFor={"Diabetes"}
                      name={"Diabetes"}
                    />

                    <RadioButton
                      radioButtonFor={"nonCommunicable"}
                      id={"Cancer"}
                      htmlFor={"Cancer"}
                      name={"Cancer"}
                    />
                  </div>
                </div>

      
                {/* RADIO BUTTONS */}
                <div>
                  <Label name={"What is your employment type?"} />

                  <div className="flex items-start flex-col mt-2">
                    <RadioButton
                      radioButtonFor={"employment"}
                      id={"Child"}
                      htmlFor={"Child"}
                      name={"Child"}
                      value={"children"}
                      onChange={handleEmploymentChange}
                    />

                    <RadioButton
                      radioButtonFor={"employment"}
                      id={"Government Job"}
                      htmlFor={"Government Job"}
                      name={"Government Job"}
                      value={"Govt_job"}
                      onChange={handleEmploymentChange}
                    />
                    <RadioButton
                      radioButtonFor={"employment"}
                      id={"Employed"}
                      htmlFor={"Private"}
                      name={"Private Company"}
                      value={"Private"}
                      onChange={handleEmploymentChange}
                    />

                    <RadioButton
                      radioButtonFor={"employment"}
                      id={"Self Employed"}
                      htmlFor={"Self Employed"}
                      name={"Self Employed"}
                      value={"Self Employed"}
                      onChange={handleEmploymentChange}
                    />

                    <RadioButton
                      radioButtonFor={"employment"}
                      id={"Other"}
                      htmlFor={"Other"}
                      name={"Other"}
                      value={"Other"}
                      onChange={handleEmploymentChange}
                    />
                  </div>
                </div>

                 {/* RADIO BUTTONS */}
                 <div>
                    <Label name={"Are you living in rural or urban area?"} />

                    <div className="flex items-center mt-2">
                      <RadioButton
                        radioButtonFor={"residency"}
                        id={"Rural"}
                        htmlFor={"Rural"}
                        name={"Rural"}
                        value={"Rural"}
                        onChange={handleAreaChange}
                      />

                      <div className="ml-7">
                        <RadioButton
                          radioButtonFor={"residency"}
                          id={"Urban"}
                          htmlFor={"Urban"}
                          name={"Urban"}
                          value={"Urban"}
                          onChange={handleAreaChange}
                        />
                      </div>
                    </div>
                  </div>

                {/* RADIO BUTTONS */}
                <div>
                  <Label name={"How is your stress level on 1-5 scale?"} />

                  <div className="flex items-start mt-2 space-x-1">
                    <CounterRadioButton
                      radioButtonFor={"stressLevel"}
                      id={"1"}
                      htmlFor={"1"}
                      number={"1"}
                    />

                    <CounterRadioButton
                      radioButtonFor={"stressLevel"}
                      id={"2"}
                      htmlFor={"2"}
                      number={"2"}
                    />

                    <CounterRadioButton
                      radioButtonFor={"stressLevel"}
                      id={"3"}
                      htmlFor={"3"}
                      number={"3"}
                    />

                    <CounterRadioButton
                      radioButtonFor={"stressLevel"}
                      id={"4"}
                      htmlFor={"4"}
                      number={"4"}
                    />

                    <CounterRadioButton
                      radioButtonFor={"stressLevel"}
                      id={"5"}
                      htmlFor={"5"}
                      number={"5"}
                    />
                  </div>
                </div>
              </div>
            </form>
          </div>

          <div className="flex justify-between items-center">
            {/* BACK BUTTON */}
            <BackButton goTo={"/evaluation4"} />

            
          </div>
        </div>

        {/* RIGHT STEPS */}
        <Steps
          stepOneColor={"bg-greenNormal"}
          stepTwoColor={"bg-greenNormal"}
          stepThreeColor={"bg-greenNormal"}
          stepFourColor={"bg-greenNormal"}
          stepFiveColor={"bg-greenNormal"}
          buttonBgColor={"#00CF5F"}
        />
      </div>
      </div>
    </>
  );
}

export default withGlobalState(Evaluation5);
