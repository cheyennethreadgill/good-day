import { useWindowSize } from "~/hooks/useWindowResize";
import { useEffect, useState, createContext } from "react";
import { useOutletContext } from "react-router";
import { Nav } from "~/Components/Nav";
import DateScroll from "~/Components/Header/Date/DateScroll";
import { Header } from "../Components/Header/Header";
import Timeline from "~/Components/Timeline";
import TaskModal from "~/Components/Tasks/TaskModal";

const defaultContextType: ScheduleContextType = {
  handleOptionChange: () => {},
  localStorageState: 0,
};

interface ScheduleContextType {
  handleOptionChange: (e: number) => void;
  localStorageState: number;
}

export const ScheduleContext = createContext<ScheduleContextType>(defaultContextType);

// -----------------------------------------COMPONENT
export default function Schedule() {
  console.log("Schedule component");
  // outlet context test
  // const logWorking: () => string = useOutletContext();
  // console.log(logWorking());
  const [localStorageState, setStorage] = useState(0);
  const [selectedOption, setSelectedOption] = useState("");
  const [taskClicked, setTaskClicked] = useState(false);

  // set the local storage with the current select option
  function handleLocalStorage(key: string, value: any) {
    window.localStorage.removeItem("Select Option");
    window.localStorage.setItem(key, value.toString());
    // set localStorage state for select option value placeholder value
    setStorage(parseInt(value));
  }

  // useeffect hook to get the storage item on rerender and convert it back to a number to set the local Storage state

  useEffect(() => {
    console.log("schedule use effect");
    const option: any = window.localStorage.getItem("Select Option");

    const convertedString = parseInt(option);
    setStorage(convertedString);
  }, [localStorageState]);

  interface optionValueInterface {
    optionValue: number;
  }

  const handleOptionChange = (optionValue) => {
    setSelectedOption(optionValue);
    handleLocalStorage("Select Option", optionValue);
    (localStorageState: number) => console.log(localStorageState);
    console.log(optionValue);
    // console.log(
    //   <AddTask
    //     taskClicked={taskClicked}
    //     setTaskClicked={setTaskClicked}
    //   />,
    // );
  };


  const timesOfDay = ["Morning", "Afternoon", "Evening"];

  const { isMobile, windowSize } = useWindowSize();

  const options = [
    { value: 1, label: "1 Day" },
    { value: 2, label: "2 Days" },
    { value: 3, label: "3 Days" },
  ];

  const ScheduleContextValues = { handleOptionChange, localStorageState };
  // want to disable header txt in each component the header is loaded in
  return (
    <ScheduleContext.Provider value={ScheduleContextValues}>
      <>
        <Nav
          isMobile={isMobile}
          windowSize={windowSize}
          setTaskClicked={setTaskClicked}
          taskClicked={taskClicked}
        ></Nav>

        <TaskModal
          setTaskClicked={setTaskClicked}
          taskClicked={taskClicked}
        />

        <main id="schedule">
          <Header
            dateScrollShown={true}
            page="Schedule"
            options={options}
          />

          <DateScroll
            isMobile={isMobile}
            page="Schedule"
          />
          <Timeline
            selectedOption={selectedOption}
            options={options}
          />
        </main>
      </>
    </ScheduleContext.Provider>
  );
}
