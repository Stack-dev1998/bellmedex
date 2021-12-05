import React, { useState } from "react";
import {
  Row,
  Col,
  Container,
  InputGroup,
  FormControl,
  Button,
  Alert,
} from "react-bootstrap";
import style from "../../styles/multiStepWizard.module.css";
export default function Step3(props) {
  const [errorMsg, setErrorMsg] = useState({ msg: "", isShow: false });
  const [days, setDays] = useState([
    {
      id: 1,
      day: "S",
      fullName: "Sunday",
      isSelected: false,
      from: "9:00",
      to: "17:00",
    },
    {
      id: 2,
      day: "M",
      fullName: "Monday",
      isSelected: false,
      from: "9:00",
      to: "17:00",
    },
    {
      id: 3,
      day: "T",
      fullName: "Teusday",
      isSelected: false,
      from: "9:00",
      to: "17:00",
    },
    {
      id: 4,
      day: "W",
      fullName: "Wednesday",
      isSelected: false,
      from: "9:00",
      to: "17:00",
    },
    {
      id: 5,
      day: "T",
      fullName: "Thursday",
      isSelected: false,
      from: "9:00",
      to: "17:00",
    },
    {
      id: 6,
      day: "F",
      fullName: "Friday",
      isSelected: false,
      from: "9:00",
      to: "17:00",
    },
    {
      id: 7,
      day: "S",
      fullName: "Saturday",
      isSelected: false,
      from: "9:00",
      to: "17:00",
    },
  ]);

  const handlerSelectDay = (id) => {
    const updatedDays = days.map((item) => {
      if (item.id == id) {
        return { ...item, isSelected: !item.isSelected };
      } else {
        return item;
      }
    });
    setDays(updatedDays);
  };

  const handlerSetFromTime = ({ id, from }) => {
    const updatedDays = days.map((item) => {
      if (item.id == id) {
        if (item.to == from) {
          setErrorMsg({
            msg: "Cannot select at same time e.g 9:00 am to 9:00 am !",
            isShow: true,
          });
          return { item };
        } else {
          return { ...item, from: from };
        }
      } else {
        return item;
      }
    });
    setDays(updatedDays);
    console.log(updatedDays);
    console.log("from");
  };

  const handlerSetToTime = ({ id, to }) => {
    const updatedDays = days.map((item) => {
      if (item.id == id) {
        if (item.from == to) {
          setErrorMsg({
            msg: "Cannot select at same time e.g 9:00 am to 9:00 am !",
            isShow: true,
          });
          return { item };
        } else {
          return { ...item, to: to };
        }
      } else {
        return item;
      }
    });
    setDays(updatedDays);
  };

  const handlerMoveNext = () => {
    const selectedDays = days.filter((item) => item.isSelected == true);
    var daysArrayLength = days.length;
    if (selectedDays.length < 2) {
      setErrorMsg({
        msg: "At Least two days should be selected!",
        isShow: true,
      });
      setTimeout(() => {
        setErrorMsg({ ...errorMsg, isShow: false });
      }, 3000);
      return;
    }
    for (var i = 0; i < daysArrayLength; i++) {
      const fromTime = days[i].from.split(":");
      const toTime = days[i].to.split(":");
      const totalWorkHours = parseInt(toTime[0]) - parseInt(fromTime[0]);
      const TotalWorkInMinutes =
        totalWorkHours * 60 + parseInt(toTime[1]) - parseInt(fromTime[1]);
      if (TotalWorkInMinutes < 480) {
        setErrorMsg({
          msg: days[i].fullName + " work time  should not be less than 9 hours",
          isShow: true,
        });
        setTimeout(() => {
          setErrorMsg({ ...errorMsg, isShow: false });
        }, 3000);
        break;
      } else {
        console.log("published post");
      }
    }
  };
  return (
    <div >
      <h4 className="p-3">Schedule working days & timings</h4>
      <hr className=" mt-2 mb-2"></hr>
      <div className="p-4 d-flex justify-content-between">
        {days.map((item) => {
          return (
            <p
              key={item.id}
              className={
                item.isSelected ? style.selected_days : style.none_selected_days
              }
            >
              {item.day}
            </p>
          );
        })}
      </div>

      <div className="p-3">
        {errorMsg.isShow ? (
          <Alert variant="danger">{errorMsg.msg}</Alert>
        ) : null}
        <Row>
          {days.map((item) => {
            return (
              <Col xs={6} key={item.id}>
                <InputGroup className="mb-3">
                  <Button
                    style={{ width: "100px", border: "none" }}
                    className={
                      item.isSelected
                        ? style.selected_days
                        : style.none_selected_days
                    }
                    onClick={() => {
                      handlerSelectDay(item.id);
                    }}
                  >
                    {item.fullName}
                  </Button>
                  <FormControl
                    type="time"
                    className={style.back_light_color + " shadow-none"}
                    aria-describedby="basic-addon3"
                    placeholder="9:00 am to"
                    name="from"
                    onChange={(e) => {
                      handlerSetFromTime({ id: item.id, from: e.target.value });
                    }}
                  />{" "}
                  <FormControl
                    type="time"
                    className={style.back_light_color + " shadow-none"}
                    aria-describedby="basic-addon3"
                    placeholder="5:00 pm"
                    name="to"
                    onChange={(e) => {
                      handlerSetToTime({ id: item.id, to: e.target.value });
                    }}
                  />
                </InputGroup>
              </Col>
            );
          })}
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
            className={"w-25 p-2 " + style.back_blue_color}
            onClick={() => {
              handlerMoveNext();
            }}
          >
            NEXT
          </Button>{" "}
        </div>
      </div>
    </div>
  );
}
