import { useEffect, useState, useContext } from "react";
import taskData from "../task-data.json";
import { ScheduleContext } from "~/routes/Schedule";

export default function Timeline({ options }) {
  const { localStorageState } = useContext(ScheduleContext);

  const hours = Array.from({ length: 24 }, (_, i) => i);

  return (
    // ***create 3 column layout when day options change

    //   grid
    // 24 hrs
    // scroll container
    //   get the task time from task data
    //   2 colums for hours and tasks

    <section id="timeline">
      <div className="container grid">
        <div className="hours-grid">
          {hours.map((hr) => {
            return (
              <p
                className="schedule-time-column"
                key={hr}
              >
                {hr > 12 ? `${hr} pm` : `${hr} am`}
              </p>
            );
          })}
        </div>
        {/* add 24 empty boxes to add border to*/}
        {/* <div className="grid-borders">
          {hours.map((hr) => {
            return (
              <div
                key={hr}
                className="grid-border"
              ></div>
            );
          })}
        </div> */}
        {/* create boxes based on hours to fill the second colum in the container gridgrid */}
        {/* make 1 colum grid w. 24 rows that goes in grid area 2 */}
        {/* --------------------------------------1 COLUMN LAYOUT */}
        {localStorageState === 1 ? (
          <div className="col-1">
            <div className="schedule-task-container">
              {taskData.map((task) => {
                return (
                  <div
                    key={task.id}
                    className="timeline-task"
                    draggable="true"
                  >
                    <h3>{task.title}</h3>
                  </div>
                );
              })}
            </div>
          </div>
        ) : localStorageState === 3 ? (
          <div className="col-3">
            {taskData.map((task) => {
              return (
                <div
                  key={task.id}
                  className="timeline-task"
                  draggable="true"
                >
                  <h3>{task.title}</h3>
                </div>
              );
            })}
          </div>
        ) : localStorageState === 2 ? (
          <div className="col-2">
            {taskData.map((task) => {
              return (
                <div
                  key={task.id}
                  className="timeline-task"
                  draggable="true"
                >
                  <h3>{task.title}</h3>
                </div>
              );
            })}
          </div>
        ) : (
          <div className="col-1">
            <div className="schedule-task-container">
              {taskData.map((task) => {
                return (
                  <div
                    key={task.id}
                    className="timeline-task"
                    draggable="true"
                  >
                    <h3>{task.title}</h3>
                  </div>
                );
              })}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
