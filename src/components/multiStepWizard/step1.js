import React, { useState } from "react";
import {
  Form,
  Row,
  Col,
  Button,
  InputGroup,
  FormControl,
  Alert,
} from "react-bootstrap";
import style from "../../styles/multiStepWizard.module.css";

export default function Step1(props) {
  const [errorMsg, setErrorMsg] = useState({ msg: "", isShow: false });
  const [jobInfo, setJobInfo] = useState({
    title: null,
    experience: null,
    image: null,
  });

  const handlerMoveNext = () => {
    if (
      jobInfo.title == null ||
      jobInfo.title == "" ||
      jobInfo.title.replace(/\s/g, "").length == 0
    ) {
      setErrorMsg({
        msg: "Job title field is required!",
        isShow: true,
      });
    } else if (
      jobInfo.experience == null ||
      jobInfo.experience == "" ||
      jobInfo.experience.replace(/\s/g, "").length == 0
    ) {
      setErrorMsg({
        msg: "Experience field is required!",
        isShow: true,
      });
    } else if (
      jobInfo.image == null ||
      jobInfo.image == "" ||
      jobInfo.image.replace(/\s/g, "").length == 0
    ) {
      setErrorMsg({
        msg: "Image is required!",
        isShow: true,
      });
    } else {
      props.handlerGoNext();
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
    <Form className={style.form}>
      {errorMsg.isShow ? <Alert variant="danger">{errorMsg.msg}</Alert> : null}
      <Row>
        <Form.Group as={Col} className={style.form_group}>
          <Form.Label>
            Looking for
            <span className={style.red_staric}>*</span>
          </Form.Label>
          <InputGroup className="mb-2">
            <FormControl
              style={{ zIndex: "0" }}
              className="shadow-sm"
              placeholder="Enter Value..."
              onChange={(e) => {
                setJobInfo({ ...jobInfo, title: e.target.value });
              }}
            />
            <InputGroup.Text>{chevronIcon}</InputGroup.Text>
          </InputGroup>
        </Form.Group>
        <Form.Group as={Col} className={style.form_group}>
          <Form.Label>
            Experience
            <span className={style.red_staric}>*</span>
          </Form.Label>
          <InputGroup className="mb-2">
            <FormControl
              style={{ zIndex: "0" }}
              className="shadow-sm"
              placeholder="Enter Value..."
              onChange={(e) => {
                setJobInfo({ ...jobInfo, experience: e.target.value });
              }}
            />
            <InputGroup.Text>{chevronIcon}</InputGroup.Text>
          </InputGroup>
        </Form.Group>
      </Row>

      <Row>
        <Col xs={6}>
          <Form.Group as={Col} className={style.form_group}>
            <Form.Label>
              Education
              <span className={style.red_staric}>*</span>
            </Form.Label>
            <InputGroup className="mb-2">
              <FormControl
                style={{ zIndex: "0" }}
                className="shadow-sm"
                id="inlineFormInputGroup"
                placeholder="Enter Value..."
              />
              <InputGroup.Text>{chevronIcon}</InputGroup.Text>
            </InputGroup>
          </Form.Group>
        </Col>
      </Row>

      <Row>
        <Form.Group className={style.form_group}>
          <Form.Label>
            Skills
            <span className={style.red_staric}>*</span>
          </Form.Label>
          <InputGroup className="mb-2">
            <FormControl
              style={{ zIndex: "0" }}
              placeholder="Enter Value..."
              className="shadow-sm"
            />
            <InputGroup.Text>{chevronIcon}</InputGroup.Text>
          </InputGroup>
        </Form.Group>
      </Row>

      <Row>
        <Form.Group className={style.form_group}>
          <Form.Label>
            Description
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

      <p className="mt-3">Add if there is any inspiration</p>
      <label
        className="rounded p-2 text-white w-25 text-center"
        style={{ backgroundColor: "#47CB5D" }}
      >
        <input
          type="file"
          style={{ display: "none" }}
          onChange={(e) => {
            setJobInfo({ ...jobInfo, image: e.target.value });
          }}
        />
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          fill="currentColor"
          className=" align-self-center bi bi-upload"
          viewBox="0 0 20 20"
        >
          <path d="M.5 9.9a.5.5 0 0 1 .5.5v2.5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2.5a.5.5 0 0 1 1 0v2.5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-2.5a.5.5 0 0 1 .5-.5z" />
          <path d="M7.646 1.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1-.708.708L8.5 2.707V11.5a.5.5 0 0 1-1 0V2.707L5.354 4.854a.5.5 0 1 1-.708-.708l3-3z" />
        </svg>{" "}
        GO TO SELECT TEMPLATE
      </label>

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
