import React, { useState, useEffect } from "react";
import { Form, Button, Modal } from "react-bootstrap";

export default function AddJobModal(props) {
  const [jobDetail, setJobDetail] = useState({
    id: "",
    title: "",
    experience: "",
    salary: "",
  });

  useEffect(() => {
    setJobDetail({ ...jobDetail, id: props.id });
  }, [props.id]);
  return (
    <Modal show={props.show} onHide={props.handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Add job</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group className="mb-3" controlId="title">
            <Form.Label>Job title</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter job title"
              onChange={(e) => {
                setJobDetail({ ...jobDetail, title: e.target.value });
              }}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="experience">
            <Form.Label>Experience</Form.Label>
            <Form.Control
              type="text"
              placeholder="Experience"
              onChange={(e) => {
                setJobDetail({ ...jobDetail, experience: e.target.value });
              }}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="salary">
            <Form.Label>Salary</Form.Label>
            <Form.Control
              type="text"
              placeholder="Salary"
              onChange={(e) => {
                setJobDetail({ ...jobDetail, salary: e.target.value });
              }}
            />
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={props.handleClose}>
          Close
        </Button>
        <Button
          variant="primary"
          type="submit"
          onClick={() => {
            props.handleAddJob(jobDetail);
          }}
        >
          Submit
        </Button>
      </Modal.Footer>
    </Modal>
  );
}
