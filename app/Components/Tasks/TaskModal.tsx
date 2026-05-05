import { useState } from "react";
import Calendar from "react-calendar";
import Form from "react-bootstrap/cjs/Form.js";
import Button from "react-bootstrap/cjs/Button.js";
import { Dropdown } from "../Dropdown";

import { useWindowSize } from "~/hooks/useWindowResize";

import weightIcon from "../../../public/weight icon.svg";
import leisureIcon from "../../../public/bag icon.svg";
import homeIcon from "../../../public/task-tag-home.svg";
import addTaskModalIcon from "../../../public/desktop-add-task-icon.svg";
import previousIcon from "../../../public/Previous Icon.svg";
import nextIcon from "../../../public/Next Icon.svg";

export default function TaskModal({
  page,
  editClicked,
  taskClicked,
  setTaskClicked,
  setEditClicked,
}: {
  page: string;
  editClicked: boolean;
  taskClicked: boolean;
  setTaskClicked: Function;
  setEditClicked: Function;
}) {
  const [calendarClicked, setCalendarClicked] = useState(false);
  // filter tasks based on each timeOfDay

  const { windowSize, isMobile } = useWindowSize();

  const options = [
    { value: "High", label: "High" },
    { value: "Medium", label: "Medium" },
    { value: "Low", label: "Low" },
  ];
  return (
    //  DESKTOP----------------------------------------
    <>
      {!isMobile ? (
        <div className="add-task-modal-container">
          <div className={taskClicked || editClicked ? "add-task-modal modal-slide-desktop" : "add-task-modal"}>
            <div className="form-container">
              <h2> {editClicked ? "Edit Task" : "Add Task"} </h2>
              <Form>
                <div className="add-task-modal-form-groups flex flex-column">
                  <Form.Group
                    className="mb-3 form-group"
                    controlId="Task title"
                  >
                    <Form.Label className="">Title</Form.Label>
                    <Form.Control
                      type="input"
                      placeholder="Enter name of task..."
                    />
                  </Form.Group>
                  <Form.Group
                    className="mb-3 form-group"
                    controlId="Task title"
                  >
                    <Form.Label>Duration</Form.Label>
                    <Form.Control
                      type="input"
                      placeholder="Enter name of task..."
                    />
                  </Form.Group>
                  <Form.Group
                    className="mb-3 form-group"
                    controlId="Task title"
                  >
                    <Form.Label>Priority</Form.Label>
                    <div>
                      <Dropdown
                        options={options}
                        placeholder={"High"}
                        color={"dark"}
                      />
                    </div>
                  </Form.Group>
                  <Form.Group
                    className="mb-3 form-group due-date-group"
                    controlId="Task title"
                  >
                    <Form.Label>Due Date</Form.Label>
                    <Form.Control
                      type="input"
                      className=""
                      placeholder="Enter name of task..."
                    />
                    <span
                      onClick={() => {
                        setCalendarClicked(!calendarClicked);
                      }}
                      className="due-date-calendar-icon"
                    ></span>
                  </Form.Group>
                  <Form.Group
                    className="mb-3 form-group"
                    controlId="Task title"
                  >
                    <Form.Label>Preferred Time</Form.Label>
                    <Form.Control
                      type="input"
                      placeholder="Enter name of task..."
                    />
                  </Form.Group>
                  <Form.Group
                    className="mb-3 form-group"
                    controlId="Task title"
                  >
                    <Form.Label>Tags</Form.Label>
                    <div className="tag-icons">
                      <img
                        src={weightIcon}
                        alt=""
                      />
                      <img
                        src={leisureIcon}
                        alt=""
                      />
                      <img
                        src={homeIcon}
                        alt=""
                      />
                    </div>
                  </Form.Group>
                </div>
                <Button> {editClicked ? "Save Changes" : "Submit"} </Button>
              </Form>
            </div>
            <img
              onClick={() => {
                taskClicked ? setTaskClicked(!taskClicked) : editClicked ? setEditClicked(!editClicked) : null;
                setCalendarClicked(false);

                console.log(editClicked);
              }}
              src={addTaskModalIcon}
              className="add-task-modal-icon"
              alt=""
            />
          </div>
          {calendarClicked && (
            <div className="react-calendar-container">
              <Calendar
                prevLabel={
                  <img
                    src={previousIcon}
                    alt="Previous"
                  />
                }
                nextLabel={
                  <img
                    src={nextIcon}
                    alt="Previous"
                  />
                }
                prev2Label={null}
                next2Label={null}
              />
            </div>
          )}
        </div>
      ) : (
        //------------------------------------Mobile
        <div className="add-task-modal-container">
          <div className={taskClicked || editClicked ? "add-task-modal modal-slide-mobile" : "add-task-modal"}>
            <div className="form-container">
              <h2>{editClicked ? "Edit Task" : "Add Task"}</h2>
              <Form>
                <div className="add-task-modal-form-groups flex flex-column">
                  <Form.Group
                    className="mb-3 form-group"
                    controlId="Task title"
                  >
                    <Form.Label className="">Title</Form.Label>
                    <Form.Control
                      type="input"
                      placeholder="Enter name of task..."
                    />
                  </Form.Group>
                  <Form.Group
                    className="mb-3 form-group"
                    controlId="Task title"
                  >
                    <Form.Label>Duration</Form.Label>
                    <Form.Control
                      type="input"
                      placeholder="Enter name of task..."
                    />
                  </Form.Group>
                  <Form.Group
                    className="mb-3 form-group"
                    controlId="Task title"
                  >
                    <Form.Label>Priority</Form.Label>
                    <div>
                      <Dropdown
                        options={options}
                        placeholder={"High"}
                        color={"dark"}
                      />
                    </div>
                  </Form.Group>
                  <Form.Group
                    className="mb-3 form-group due-date-group"
                    controlId="Task title"
                  >
                    <Form.Label>Due Date </Form.Label>
                    <Form.Control
                      type="input"
                      className=""
                      placeholder="Enter name of task..."
                    />
                    <span
                      onClick={() => {
                        setCalendarClicked(!calendarClicked);
                      }}
                      className="due-date-calendar-icon"
                    ></span>
                  </Form.Group>
                  <Form.Group
                    className="mb-3 form-group"
                    controlId="Task title"
                  >
                    <Form.Label>Preferred Time</Form.Label>
                    <Form.Control
                      type="input"
                      placeholder="Enter name of task..."
                    />
                  </Form.Group>
                  <Form.Group
                    className="mb-3 form-group"
                    controlId="Task title"
                  >
                    <Form.Label>Tags</Form.Label>
                    <div className="tag-icons">
                      <img
                        src={weightIcon}
                        alt=""
                      />
                      <img
                        src={leisureIcon}
                        alt=""
                      />
                      <img
                        src={homeIcon}
                        alt=""
                      />
                    </div>
                  </Form.Group>
                </div>
                <Button> {editClicked ? "Save Changes" : "Submit "} </Button>
              </Form>
            </div>
            <img
              onClick={() => {
                taskClicked ? setTaskClicked(!taskClicked) : editClicked ? setEditClicked(!editClicked) : null;
              }}
              src={addTaskModalIcon}
              className="add-task-modal-icon"
              alt=""
            />
          </div>
          {calendarClicked && (
            <div className="react-calendar-container">
              <Calendar
                prevLabel={
                  <img
                    src={previousIcon}
                    alt="Previous"
                  />
                }
                nextLabel={
                  <img
                    src={nextIcon}
                    alt="Previous"
                  />
                }
                prev2Label={null}
                next2Label={null}
              />
            </div>
          )}
        </div>
      )}
    </>
  );
}
