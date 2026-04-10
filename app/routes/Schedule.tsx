import { useEffect, useState, createContext } from "react";
import { Nav } from "~/Components/Nav";
import DateScroll from "~/Components/Header/Date/DateScroll";
import { Header } from "../Components/Header/Header";
import Timeline from "~/Components/Timeline";
import { useWindowSize } from "~/hooks/useWindowResize";

const defaultContextType: ScheduleContextType = {
  handleOptionChange: () => {},
};

interface ScheduleContextType {
  handleOptionChange: (e: number) => void;
}

export const ScheduleContext = createContext<ScheduleContextType>(defaultContextType);

// -----------------------------------------COMPONENT

export default function Schedule() {
  const [localStorageState, setStorage] = useState(0);
  const [selectedOption, setSelectedOption] = useState(0);

  // set the local storage with the current select option
  function handleLocalStorage(key: string, value: any) {
    window.localStorage.removeItem("Select Option");
    window.localStorage.setItem(key, value.toString());
    // set localStorage state for select option value placeholder value
    setStorage(parseInt(value));
  }

  // useeffect hook to get the storage item on rerender and convert it back to a number to set the local Storage state
  useEffect(() => {
    const option: any = window.localStorage.getItem("Select Option");
    const parsedString = parseInt(option);
    setStorage(parsedString);
  }, [localStorageState]);

  const handleOptionChange = (optionValue: number) => {
    setSelectedOption(optionValue);
    handleLocalStorage("Select Option", optionValue);
    (localStorageState: number) => console.log(localStorageState);
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
        ></Nav>
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
