import React, { useState } from "react";
import {
  Container,
  Nav,
  Form,
  Row,
  Col,
  Button,
  InputGroup,
  FormControl,
  Alert,
} from "react-bootstrap";
import style from "../../styles/multiStepWizard.module.css";

export default function Step2(props) {
  const [hours, setHours] = useState(0);
  const [errorMsg, setErrorMsg] = useState({ msg: "", isShow: false });

  const handlerMoveNext = () => {
    console.log(typeof hours);
    if (typeof hours == "number" && hours >= 10) {
      props.handlerGoNext();
    } else {
      setErrorMsg({
        msg: "Hours should be number and cannot be less than 10",
        isShow: true,
      });
    }
  };

  const chevronIcon = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      fill="currentColor"
      className="bi bi-chevron-down"
      viewBox="0 0 16 16"
    >
      <path
        fillRule="evenodd"
        d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"
      />
    </svg>
  );

  return (
    <Form
    className={style.form}
    >
      {errorMsg.isShow ? <Alert variant="danger">{errorMsg.msg}</Alert> : null}
      <Row className="">
        <Form.Group as={Col} className={style.form_group}>
          <Form.Label>
            Hourly rate
            <span className={style.red_staric}>*</span>
          </Form.Label>

          <FormControl
            style={{ zIndex: "0" }}
            type="number"
            className="shadow-sm"
            placeholder="Enter Value..."
            onChange={(e) => {
              setHours(parseInt(e.target.value));
            }}
          />
        </Form.Group>
        <Form.Group as={Col} className={style.form_group}>
          <Form.Label>
            Expected start date
            <span className={style.red_staric}>*</span>
          </Form.Label>
          <InputGroup className="mb-2">
            <FormControl
              type="date"
              style={{ zIndex: "0" }}
              className="shadow-sm"
              placeholder="Select date"
            />
            <InputGroup.Text>{chevronIcon}</InputGroup.Text>
          </InputGroup>
        </Form.Group>
      </Row>

      <Row>
        <Col xs={6}>
          <Form.Group as={Col} className={style.form_group}>
            <Form.Label>
              Career level
              <span className={style.red_staric}>*</span>
            </Form.Label>
            <InputGroup className="mb-2">
              <FormControl
                style={{ zIndex: "0" }}
                className="shadow-sm"
                placeholder="Enter Value..."
              />
              <InputGroup.Text>{chevronIcon}</InputGroup.Text>
            </InputGroup>
          </Form.Group>
        </Col>
        <Col xs={6}>
          <Form.Group
            as={Col}
            className={style.form_group}
            controlId="education"
          >
            <Form.Label>
              Gender
              <span className={style.red_staric}>*</span>
            </Form.Label>
            <InputGroup className="mb-2">
              <FormControl
                style={{ zIndex: "0" }}
                className="shadow-sm"
                placeholder="Enter Value..."
              />
              <InputGroup.Text>{chevronIcon}</InputGroup.Text>
            </InputGroup>
          </Form.Group>
        </Col>
      </Row>

      <Row>
        <Form.Group className={style.form_group} controlId="skills">
          <Form.Label>
            Equipment specification
            <span className={style.red_staric}>*</span>
          </Form.Label>
          <Form.Control
            as="textarea"
            rows={4}
            placeholder="Write a description"
            className="shadow-sm"
          />
        </Form.Group>
      </Row>

      <div className="d-flex justify-content-between mt-5">
        <Button
          variant="outline-secondary"
          className="w-25 p-2"
          onClick={() => {
            props.handlerGoBack();
          }}
        >
          PREVIOUS
        </Button>{" "}
        <Button
          variant="primary"
          className={"w-25 p-2 " + style.back_blue_color}
          onClick={() => {
            handlerMoveNext();
          }}
        >
          NEXT
        </Button>{" "}
      </div>
    </Form>
  );
}
