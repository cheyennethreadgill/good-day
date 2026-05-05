import { useState } from "react";
import TaskItem from "./TaskItem";

export default function Task({ filteredTasks }) {
  return (
    <>
      {filteredTasks.map((ime: {}) => {
        const { task } = ime;
        return (
          <TaskItem
            key={task.id}
            task={task}
          />
        );
      })}
    </>
  );
}
