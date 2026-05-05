import timeJson from "../TOD.json";
import taskData from "../task-data.json";
import TaskContainer from "./Tasks/TasksContainer";

export default function TODCOLS({ clicked, handleTimeClick, filteredTasks }) {
// const timeOfDayfromJSON = timeJson.map((obj) => {
// const { id, timeOfDay } = obj;
// return { id, timeOfDay };
// });

// filter tasks based on each timeOfDay

function returnTaskContainer() {
return <TaskContainer />;
}

return (
<>
<div className="day-container flex space-between">
{timeJson.map((time) => {
const { id, timeOfDay } = time;
return (
<>
<p
key={id}
onClick={() => {
handleTimeClick(timeOfDay);
}}
className={clicked ? ` active-brown times` : `inactive-brown times`} >
{timeOfDay} (2) <span className="day-decor"></span>
</p>

              {clicked && <TaskContainer filteredTasks={filteredTasks} />}
            </>
          );
        })}
      </div>
    </>

);
}
