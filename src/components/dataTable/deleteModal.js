import React from "react";
import { Button, Modal } from "react-bootstrap";

export default function DeleteJobModal(props) {
  return (
    <Modal show={props.show} onHide={props.handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Delete Job</Modal.Title>
      </Modal.Header>
      <Modal.Body>Are you sure?</Modal.Body>
      <Modal.Footer>
        <Button variant="primary" onClick={props.handleClose}>
          No
        </Button>
        <Button
          variant="danger"
          type="submit"
          onClick={() => {
            props.handleDeleteJob();
          }}
        >
          Submit
        </Button>
      </Modal.Footer>
    </Modal>
  );
}
