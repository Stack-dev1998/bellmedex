import React from "react";
import { Container } from "react-bootstrap";
export default function Header() {
  return (
    <div className="d-flex justify-content-between   ">
      <div className="my-auto" style={{ padding: "15px 0px 0px 15px" }}>
        <h3 style={{ color: "#006AB3" }}>CREATE A JOB POST</h3>
        <p className="mb-0">Complete the following steps to create an effective job post</p>
      </div>
      <div className="align-self-center " style={{ paddingRight: "15px" }}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          fill="currentColor"
          className="bi bi-x-circle-fill "
          viewBox="0 0 16 16"
          style={{ color: "#8C8C8C" }}
        >
          <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM5.354 4.646a.5.5 0 1 0-.708.708L7.293 8l-2.647 2.646a.5.5 0 0 0 .708.708L8 8.707l2.646 2.647a.5.5 0 0 0 .708-.708L8.707 8l2.647-2.646a.5.5 0 0 0-.708-.708L8 7.293 5.354 4.646z" />
        </svg>
      </div>
    </div>
  );
}
