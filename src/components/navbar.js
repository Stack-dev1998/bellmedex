import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { Nav } from "react-bootstrap";
import Notifications from "./dataTable/Notifications";
import style from "../styles/navbar.module.css";

export default function Navbar() {
  const [showNotification, setShowNotification] = useState(false);
  const notifications = useSelector((state) => state);

  return (
    <div className={"d-flex justify-content-between " + style.navbar_div}>
      <Nav>
        <Nav.Item>
          <Nav.Link as={Link} to="/" style={{ color: "black" }}>
            Data Table
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link as={Link} to="/load-data" style={{ color: "black" }}>
            Api Section
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link
            as={Link}
            to="/multi-step-wizard"
            style={{ color: "black" }}
          >
            Multi Step Wizard
          </Nav.Link>
        </Nav.Item>
      </Nav>
      <Nav>
        <Nav.Item
          className="ml-auto "
          onClick={() => {
            setShowNotification(!showNotification);
          }}
        >
          <Nav.Link>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="22"
              height="22"
              fill="currentColor"
              className="bi bi-bell text-black "
              viewBox="0 0 16 16"
            >
              <path d="M8 16a2 2 0 0 0 2-2H6a2 2 0 0 0 2 2zM8 1.918l-.797.161A4.002 4.002 0 0 0 4 6c0 .628-.134 2.197-.459 3.742-.16.767-.376 1.566-.663 2.258h10.244c-.287-.692-.502-1.49-.663-2.258C12.134 8.197 12 6.628 12 6a4.002 4.002 0 0 0-3.203-3.92L8 1.917zM14.22 12c.223.447.481.801.78 1H1c.299-.199.557-.553.78-1C2.68 10.2 3 6.88 3 6c0-2.42 1.72-4.44 4.005-4.901a1 1 0 1 1 1.99 0A5.002 5.002 0 0 1 13 6c0 .88.32 4.2 1.22 6z" />
            </svg>
            {notifications.length > 0 ? (
              <span className={style.notifications_icon}>
                {notifications.length}
              </span>
            ) : null}
          </Nav.Link>
        </Nav.Item>
        {showNotification ? <Notifications /> : null}
      </Nav>
    </div>
  );
}
