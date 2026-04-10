import Select from "react-select";
import { useContext } from "react";
import { ScheduleContext } from "../routes/Schedule";
import { customComponents } from "./CustomSelect";

export function Dropdown({ options }) {
  const { handleOptionChange, localStorageState } = useContext(ScheduleContext);

  // set state with option handler

  return (
    <>
      <Select
        onChange={(e) => {
          handleOptionChange(e.value);
        }}
        // When the app is initially rendered, it mounts everything as it is, the onchange logic, etc, so when I change the options, it logs correctly.
        // however, when I refresh the page, it reads the initial state , which is (0)

        // how can I save the state on browser refresh?
        // local storage?
        value={localStorageState}
        components={customComponents}
        placeholder={localStorageState ? localStorageState + " Day(s)" : "Select View"}
        options={options}
        styles={{
          control: (baseStyles, state) => ({
            ...baseStyles,
            backgroundColor: "none",
            border: state.isFocused ? "none" : "none",
            textDecoration: "none",
            padding: state.isFocused ? 0 : 0,
            margin: "0 35px 0 0",
            minHeight: "16px",
            "&:hover": {
              cursor: "pointer",
            },
          }),
          placeholder: (baseStyles, state) => ({
            ...baseStyles,
            margin: 0,
            color: "inherit",
            fontWeight: "bold",
          }),
          singleValue: (baseStyles, state) => ({
            ...baseStyles,
            color: "inherit",
            fontWeight: "bold",
          }),
          indicatorSeparator: (baseStyles, state) => ({
            ...baseStyles,
            width: 0,
          }),
          valueContainer: (baseStyles, state) => ({
            ...baseStyles,
            backgroundColor: "none",
            textDecoration: "none",
            width: "max-content",
          }),
          dropdownIndicator: (baseStyles, state) => ({
            ...baseStyles,
            color: "red",
            rotate: state.isFocused ? "0deg" : "-90deg",
          }),
          menu: (baseStyles, state) => ({
            //options container
            ...baseStyles,
            padding: "35px 18px",
            width: "258px",
            borderRadius: "20px",
            textAlign: "center",
          }),
          option: (baseStyles, state) => ({
            ...baseStyles,
            backgroundColor: state.isFocused ? "#e30547" : "initial",
            color: state.isFocused ? "white" : "inherit",
            borderRadius: "8px",
            fontStretch: "condensed",
            "&:hover": {
              cursor: "pointer",
            },
          }),
        }}
      />
    </>
  );
}
