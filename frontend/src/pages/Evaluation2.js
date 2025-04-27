import React from "react";
import Title from "../components/Title";
import numberTwo from "../images/numberTwo.svg";
import RadioButton from "../components/RadioButton";
import Label from "../components/Label";
import Steps from "../components/StepsBox/Steps";
import CounterWithHeading from "../components/CounterWithHeading";
import BackButton from "../components/BackButton";
import NextButton from "../components/NextButton";
import { withGlobalState } from 'react-globally';


function Evaluation2(props) {

  function handleSmokingChange(e){
    //setSmokerClick(e.target.checked);
    props.setGlobalState({ smoking_status: e.target.value });
    console.log(props.globalState);
    
  }

  function handleMarriedStatusChange(e){
    //setSmokerClick(e.target.checked);
    props.setGlobalState({ ever_married: e.target.value });
    console.log(props.globalState);
    
  }

  function handleHeartDiseaseChange(e){
    //setSmokerClick(e.target.checked);
    props.setGlobalState({ heart_disease: e.target.value });
    console.log(props.globalState);
    
  }


  return (
    <>
      <div className="max-w-6xl m-auto mb-20">
        {/* TOP TITLE */}
        <Title name={"Next step"} />

        <div className="flex justify-between">
          {/* LEFT QUESTIONS SECTION */}
          <div className="w-[38%] pt-8">
            {/* COUNTER - HEADING */}
            <CounterWithHeading numberImg={numberTwo} name={"Health Literacy"} />
            <div className="mb-11 bg-[#00cf5f0a] border-l-[9px] border-greenNormal pt-[30px] px-8 pb-14">
              <form>
                <div className="space-y-4 mb-5">
                  {/* RADIO BUTTONS */}
                  <div>
                    <Label name={"Have you had a previous Stroke?"} />

                    <div className="flex items-center mt-2">
                      <RadioButton
                        radioButtonFor={"previousStroke"}
                        id={"Yes"}
                        htmlFor={"Yes"}
                        name={"Yes"}
                      />

                      <div className="ml-7">
                        <RadioButton
                          radioButtonFor={"previousStroke"}
                          id={"No"}
                          htmlFor={"No"}
                          name={"No"}
                        />
                      </div>
                    </div>
                  </div>

                  {/* RADIO BUTTONS */}
                  <div>
                    <Label name={"Do you have a family history of Stroke?"} />

                    <div className="flex items-center mt-2">
                      <RadioButton
                        radioButtonFor={"historyOfStroke"}
                        id={"Yes"}
                        htmlFor={"Yes"}
                        name={"Yes"}
                      />

                      <div className="ml-7">
                        <RadioButton
                          radioButtonFor={"historyOfStroke"}
                          id={"No"}
                          htmlFor={"No"}
                          name={"No"}
                        />
                      </div>
                    </div>
                  </div>

                  {/* RADIO BUTTONS */}
                  <div>
                    <Label name={"Do you have a heart disease?"} />

                    <div className="flex items-center mt-2">
                      <RadioButton
                        radioButtonFor={"heartDisease"}
                        id={"Yes"}
                        htmlFor={"Yes"}
                        name={"Yes"}
                        value={1}
                        onChange={handleHeartDiseaseChange}
                      />

                      <div className="ml-7">
                        <RadioButton
                          radioButtonFor={"heartDisease"}
                          id={"No"}
                          htmlFor={"No"}
                          name={"No"}
                          value={0}
                          onChange={handleHeartDiseaseChange}
                        />
                      </div>
                    </div>
                  </div>

                  {/* RADIO BUTTONS */}
                  <div>
                    <Label name={"Have you ever been/are married?"} />

                    <div className="flex items-center mt-2">
                      <RadioButton
                        radioButtonFor={"married"}
                        id={"Yes"}
                        htmlFor={"Yes"}
                        name={"Yes"}
                        value={"Yes"}
                        onChange={handleMarriedStatusChange}
                      />

                      <div className="ml-7">
                        <RadioButton
                          radioButtonFor={"married"}
                          id={"No"}
                          htmlFor={"No"}
                          name={"No"}
                          value={"No"}
                        onChange={handleMarriedStatusChange}
                        />
                      </div>
                    </div>
                  </div>

                  {/* RADIO BUTTONS */}
                  <div>
                    <Label name={"Do you smoke?"} />

                  
                    <div className="flex items-start flex-col mt-2">
                      <RadioButton
                        radioButtonFor={"doyousmoke"}
                        id={"Formerly Smoked"}
                        htmlFor={"Formerly Smoked"}
                        name={"Formerly Smoked"}
                        value={"Formerly Smoked"}
                        onChange={handleSmokingChange}
                      />
                      <RadioButton
                        radioButtonFor={"doyousmoke"}
                        id={"Smoking"}
                        htmlFor={"Smoking"}
                        name={"Smoking"}
                        value={"Smoking"}
                        onChange={handleSmokingChange}
                      />
                      <RadioButton
                        radioButtonFor={"doyousmoke"}
                        id={"Never Smoked"}
                        htmlFor={"Never Smoked"}
                        name={"Never Smoked"}
                        value={"Never Smoked"}
                        onChange={handleSmokingChange}
                        />
                    </div>
                  </div>
                </div>
              </form>
            </div>

            <div className="flex justify-between items-center">
              {/* BACK BUTTON */}
              <BackButton goTo={"/"} />

              {/* NEXT BUTTON */}
              <NextButton goTo={"/evaluation3"} />
            </div>
          </div>

          {/* RIGHT STEPS */}
          <Steps
            stepOneColor={"bg-greenNormal"}
            stepTwoColor={"bg-greenNormal"}
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

export default withGlobalState(Evaluation2);
