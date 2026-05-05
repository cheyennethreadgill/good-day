import icon from "../../public/Day Change dropdown icon.svg";
import { Dropdown } from "./Dropdown";
import { ScheduleContext } from "~/routes/Schedule";
import { useContext } from "react";

export default function DayChange({ options }) {
  const { handleOptionChange, localStorageState } = useContext(ScheduleContext);

  return (
    <Dropdown
      options={options}
      placeholder={localStorageState ? localStorageState + " Day(s)" : "Select View"}
    />
  );
}
