import Task from "./Task";
import { useState } from "react";

export default function TaskContainer({ filteredTasks }) {
  return (
    <section className="task-container">
      <Task filteredTasks={filteredTasks} />
    </section>
  );
}
