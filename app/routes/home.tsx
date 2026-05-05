import type { Route } from "./+types/home";
import { useState, useEffect, createContext } from "react";
import { Header } from "../Components/Header/Header";
import { DayDropdowns } from "../Components/Header/DayDropdowns";
// import TaskContainer from "../Components/Tasks/TasksContainer";
import type { json } from "stream/consumers";
import taskData from "../task-data.json";
import { Nav } from "~/Components/Nav";
import { useWindowSize } from "~/hooks/useWindowResize";
import TaskModal from "~/Components/Tasks/TaskModal";

const defaultContextType: HomeContextType = {
  homehandleOptionChange: () => {},
  homelocalStorageState: "",
};

interface HomeContextType {
  homehandleOptionChange: (e: string) => void;
  homelocalStorageState: string;
}

export const HomeContext = createContext<HomeContextType>(defaultContextType);

export function meta({}: Route.MetaArgs) {
  return [{ title: "Good Day!" }, { name: "description", content: "Welcome to Good Day The Auto Scheduler =)!" }];
}

export default function Home() {
  // Top Level State
  const { isMobile, windowSize } = useWindowSize();
  const [clicked, setClicked] = useState(false);
  const [ti, setTime] = useState("");
  const [filteredTasks, setFilteredTasks] = useState([]);
  const [taskClicked, setTaskClicked] = useState(false);

  const [selectedOption, setSelectedOption] = useState("");
  const [homelocalStorageState, setStorage] = useState("");

  const [editClicked, setEditClicked] = useState(false);

  // set the local storage with the current select option
  function homehandleLocalStorage(key: string, value: any) {
    window.localStorage.removeItem("Edit");
    window.localStorage.setItem(key, value);
    // set localStorage state for select option value placeholder value
    setStorage(value);
  }

  const homehandleOptionChange = (optionValue: string) => {
    setSelectedOption(optionValue);
    // handleLocalStorage("Edit", optionValue);
    // (localStorageState: string) => console.log(localStorageState);
    setEditClicked(!editClicked);
    console.log(optionValue);
  };

  const HomeContextValues = { homehandleOptionChange, homelocalStorageState };

  function filteredTasksFilter(value: string) {
    const returnedMatchedTasks = taskData
      .filter((task) => value == task.timeOfDay)
      .map((task) => {
        const { timeOfDay } = task;
        return { timeOfDay, task };
      });

    setFilteredTasks(returnedMatchedTasks);
  }

  const handleTimeClick = (val: string, val2) => {
    filteredTasksFilter(val);
    setClicked(!clicked);
    setTime(val2);
  };

  return (
    <HomeContext.Provider value={HomeContextValues}>
      <>
        <Nav
          isMobile={isMobile}
          windowSize={windowSize}
          setTaskClicked={setTaskClicked}
          taskClicked={taskClicked}
        />
        <TaskModal
          page="Home"
          editClicked={editClicked}
          setTaskClicked={setTaskClicked}
          taskClicked={taskClicked}
          setEditClicked={setEditClicked}
        />
        <Header
          isMobile={isMobile}
          dateScrollShown={true}
          page="Home"
        />
        <DayDropdowns
          clicked={clicked}
          handleTimeClick={handleTimeClick}
          filteredTasks={filteredTasks}
          ti={ti}
        />
      </>
    </HomeContext.Provider>
  );
}
