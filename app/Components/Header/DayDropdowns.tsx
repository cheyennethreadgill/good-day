import { useState } from "react";
// import TaskContainer from "../Tasks/TasksContainer";
import tasks from "../../task-data.json";
import TaskContainer from "../../Components/Tasks/TasksContainer";
import TOD from "../TOD";
import timeJson from "../../TOD.json";
import taskData from "../../task-data.json";

export function DayDropdowns({ clicked, handleTimeClick, filteredTasks, ti }) {
  // INSTRUCTIONS: For each time of day...
  // ---we want to load all tasks with this time of day when clicked

  // ***TO DO
  // ----- Make separate components for each time of day
  // --------map and render each "TOD" component into the Day Dropdowns menu

  // load in json data to the base component
  // add props to filter the TOD from the data received

  // make separate colum grid for each time of day

  // INSTRUCTIONS FOR SORTING TASKS
  // ----create task component
  // -------only render tasks for each specific time of day
  // ---------if a task has a "morning" time of day, render a Task Container for that TOD

  // const returnedTaskTimeOfDay = tasks.filter(filterTasksTimesOfDays);

  // function filterTasksTimesOfDays() {
  //   const time = timesOfDayMenu.map((t) => {
  //     return t;
  //   });

  //   tasks.forEach((task) => {
  //     const { timeOfDay } = task;
  //     return timeOfDay === time;
  //   });
  // }

  function showTaskcontainers(val) {
    //   const returnedTaskContainer = filteredTasks.map((obj) => {
    //     if (obj.task["timeOfDay"] === tod) {
    //       return <TaskContainer filteredTasks={filteredTasks} />;
    //     } else return;
    //   }
    // );
    for (const timeOfDay in filteredTasks) {
      if (timeOfDay === val) return <TaskContainer filteredTasks={filteredTasks} />;
    }

    // return returnedTaskContainer();
  }
  // const timeOfDayfromJSON = timeJson.map((obj) => {
  //   const { id, timeOfDay } = obj;
  //   return { id, timeOfDay };
  // });

  return (
    <section className="day-dropdown-menu-container">
      <div className="day-dropdowns ">
        <div className="container">
          {" "}
          {timeJson.map((time) => {
            return (
              <TOD
                key={time.id}
                clicked={clicked}
                handleTimeClick={handleTimeClick}
                filteredTasks={filteredTasks}
                tod={time.timeOfDay}
                ti={ti}
                // tod={filteredTasks["timeOfDay"]}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
}
