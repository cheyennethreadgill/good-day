import { useState } from "react";
import tagIcon from "../../../public/task-tag-home.svg";
import taskData from "../../task-data.json";
import { Dropdown } from "../Dropdown";
import { ScheduleContext } from "~/routes/Schedule";

export default function TaskItem({ task }) {
  const options = [
    { value: "Edit", label: "Edit" },
    { value: "Delete", label: "Delete" },
  ];

  const [ID, setID] = useState(0);
  const [optionsIconClicked, setOptionClicked] = useState(false);

  return (
    <div className="task">
      <div className="flex task-flex">
        <input
          type="checkbox"
          name="Task Checkbox"
          id="task-checkbox"
          className={`${task.color}`}
        />
        <div
          id="task"
          className="flex"
        >
          <div className="task-text">
            <p className="task-times">
              {task.time} ● {task.taskDuration}
            </p>
            <h3 className={`task-title ${task.color}`}>{task.title}</h3>
          </div>

          <div className={`priority-gauge-${task.priority}`}>
            <span className="one"></span>
            <span className="two"></span>
            <span className="three"></span>
          </div>

          <div className="order-3">
            <div
              onClick={() => {
                setOptionClicked(!optionsIconClicked);
              }}
              className="flex options-icon-container"
            >
              <span className={`optionsIcon ${task.color}`}></span>
              <span className={`optionsIcon ${task.color}`}></span>
              <span className={`optionsIcon ${task.color}`}></span>
            </div>
            <img
              src={tagIcon}
              className={`task-tags ${task.color}`}
            ></img>
          </div>
        </div>
      </div>
      {optionsIconClicked && (
        <Dropdown
          noLabel="true"
          options={options}
        />
      )}
    </div>
  );
}
