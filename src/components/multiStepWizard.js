import React, { useState } from "react";
import { Container, Nav, Form, Row, Col, Button } from "react-bootstrap";
//components
import Header from "./multiStepWizard/header";
import Step1 from "./multiStepWizard/step1";
import Step2 from "./multiStepWizard/step2";
import Step3 from "./multiStepWizard/step3";
import style from "../styles/multiStepWizard.module.css";

export default function MultiStepWizard() {
  const [currentStep, setCurrentStep] = useState(1);
  const [totalSteps, setTotalSteps] = useState(3);

  const handlerGoBack = () => {
    if (currentStep != 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handlerGoNext = () => {
    if (currentStep != totalSteps) {
      setCurrentStep(currentStep + 1);
    }
  };

  const FormComponent = () => {
    if (currentStep == 1) {
      return (
        <Step1 handlerGoBack={handlerGoBack} handlerGoNext={handlerGoNext} />
      );
    } else if (currentStep == 2) {
      return (
        <Step2 handlerGoBack={handlerGoBack} handlerGoNext={handlerGoNext} />
      );
    } else {
      return (
        <Step3 handlerGoBack={handlerGoBack} handlerGoNext={handlerGoNext} />
      );
    }
  };

  const notActiveLinksColor = { color: "#9C9FA3" };
  const activeLinksColor = { color: "white", backgroundColor: "#006AB3" };

  return (
    <div className="w-75 mx-auto mt-4 shadow  rounded">
      <Header />
      <hr className=" mt-2 mb-2"></hr>
      <strong className="p-3" style={{ color: "#207EBD" }}>
        Step {currentStep} of {totalSteps}
      </strong>
      <Nav
        fill
        defaultActiveKey="/home"
        className={"m-3 " + style.back_light_color}
      >
        <Nav.Item>
          <Nav.Link
            style={currentStep >= 1 ? activeLinksColor : notActiveLinksColor}
            className={currentStep == 1 ? style.right_radius : null}
          >
            Job Information
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link
            style={currentStep >= 2 ? activeLinksColor : notActiveLinksColor}
            className={currentStep == 2 ? style.right_radius : null}
            eventKey="link-1"
          >
            Candidate Type
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link
            style={currentStep >= 3 ? activeLinksColor : notActiveLinksColor}
            className={currentStep == 3 ? style.right_radius : null}
            eventKey="link-2"
          >
            Shift Timings
          </Nav.Link>
        </Nav.Item>
      </Nav>

      <FormComponent />
    </div>
  );
}
