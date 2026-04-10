import { useState } from "react";
// import TaskContainer from "../Tasks/TasksContainer";
import tasks from "../../task-data.json";
import TaskContainer from "../../Components/Tasks/TasksContainer";
import TOD from "../TOD";
import timeJson from "../../TOD.json";
import taskData from "../../task-data.json";

export function DayDropdowns({ clicked, handleTimeClick }) {
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

  return (
    <section className="day-dropdown-menu-container">
      <div className="day-dropdowns ">
        <div className="container">
          <TOD
            clicked={clicked}
            handleTimeClick={handleTimeClick}
          />
        </div>
      </div>

      {clicked && <TaskContainer />}
    </section>
  );
}
