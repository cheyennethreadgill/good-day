import timeJson from "../TOD.json";
import taskData from "../task-data.json";
import TaskContainer from "./Tasks/TasksContainer";
import TODCOLS from "./TODCOLS";

export default function TOD({ id, clicked, handleTimeClick, filteredTasks, tod, ti }) {
  // filter tasks based on each timeOfDay

  return (
    <>
      {/* {ti == tod && ( */}
      <div className={`${tod} day-container `}>
        <div
          className="day-container-header"
          onClick={() => {
            handleTimeClick(tod, tod);
          }}
        >
          <p
            key={id}
            className={ti === tod && clicked ? ` active-brown times` : `inactive-brown times`}
          >
            <span className={ti === tod && clicked ? `day-drop-icon-active` : `day-drop-icon`}></span>
            {tod} (2) <span className="day-decor"></span>
          </p>
        </div>

        {ti === tod && clicked && <TaskContainer filteredTasks={filteredTasks} />}
      </div>
      {/* )} */}
    </>
  );
}
