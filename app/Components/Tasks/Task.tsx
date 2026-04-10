import tagIcon from "../../../public/task-tag-home.svg";
import taskData from "../../task-data.json";

export default function Task() {
  return (
    <>
      {taskData.map((task) => {
        return (
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

              <img
                src={tagIcon}
                className={`task-tags ${task.color}`}
              ></img>
            </div>
          </div>
        );
      })}
    </>
  );
}
