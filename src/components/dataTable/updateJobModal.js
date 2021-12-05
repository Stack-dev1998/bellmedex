import React, { useState, useEffect } from "react";
import {
  Navbar,
  Container,
  Nav,
  Form,
  Button,
  FormControl,
  Table,
  Modal,
} from "react-bootstrap";

export default function UpadteJobModal(props) {
  const [jobDetail, setJobDetail] = useState();

  useEffect(() => {
    setJobDetail(props.updateFormData);
  }, [props.updateFormData]);

  return (
    <Modal show={props.show} onHide={props.handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Update job</Modal.Title>
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
              value={jobDetail != null && jobDetail.title}
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
              value={jobDetail != null && jobDetail.experience}
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
              value={jobDetail != null && jobDetail.salary}
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
            props.handleUpdateJob(jobDetail);
          }}
        >
          Submit
        </Button>
      </Modal.Footer>
    </Modal>
  );
}
