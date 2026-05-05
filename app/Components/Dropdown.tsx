import Select from "react-select";
import { useContext, useEffect } from "react";
import { ScheduleContext } from "../routes/Schedule";
import { HomeContext } from "../routes/home";
import { customComponents } from "./CustomSelect";

import { useWindowSize } from "~/hooks/useWindowResize";

export function Dropdown({
  noLabel,
  options,
  placeholder,
  color,
}: {
  noLabel: boolean;
  options: string[];
  placeholder: string;
  color: string;
}) {
  useEffect(() => {}, []);
  // Schedule context
  const { handleOptionChange, localStorageState } = useContext(ScheduleContext);

  // Home context
  const { homehandleOptionChange, homelocalStorageState } = useContext(HomeContext);

  const { isMobile, windowSize } = useWindowSize();
  // set state with option handler

  console.log(handleOptionChange);

  return (
    <>
      <Select
        onChange={
          noLabel
            ? (e) => {
                homehandleOptionChange(e.value);
              }
            : (e) => {
                handleOptionChange(e.value);
              }
        }
        // When the app is initially rendered, it mounts everything as it is, the onchange logic, etc, so when I change the options, it logs correctly.
        // however, when I refresh the page, it reads the initial state , which is (0)

        // how can I save the state on browser refresh?
        // local storage?
        value={noLabel ? homelocalStorageState : localStorageState}
        defaultMenuIsOpen={noLabel ? true : false}
        components={customComponents}
        placeholder={placeholder}
        options={options}
        styles={{
          input: noLabel
            ? (baseStyles, state) => ({
                ...baseStyles,
                display: "none",
                color: "inherit",
              })
            : (baseStyles, state) => ({
                ...baseStyles,
                display: "initial",
              }),
          control:
            color === "dark"
              ? (baseStyles, state) => ({
                  ...baseStyles,
                  height: isMobile ? "28px" : "35px",
                  width: isMobile ? "173px" : "190px",
                  outline: state.isFocused ? "5px solid #e5668c" : "none",
                  outlineColor: "none",
                  borderRadius: "6px",
                  fontFamily: '"DynaPuff", "Arial", "sans-serif"',
                  fontWeight: isMobile ? "600" : "bold",
                  color: "#e5668c",
                  textAlign: "center",
                  minHeight: "16px",
                  "&:hover": {
                    cursor: "pointer",
                  },
                })
              : (baseStyles, state) => ({
                  ...baseStyles,
                  backgroundColor: color === "dark" ? "white" : "none",
                  border: state.isFocused ? "none" : "none",
                  textDecoration: "none",
                  padding: state.isFocused ? 0 : 0,
                  margin: "0 35px 0 0",
                  borderRadius: "inherit",
                  minHeight: "16px",
                  "&:hover": {
                    cursor: "pointer",
                  },
                }),
          placeholder: (baseStyles, state) => ({
            ...baseStyles,
            margin: 0,
            color: color === "dark" ? "#e5668c" : "inherit",
            fontWeight: isMobile ? "600" : "bold",
            fontFamily: color === "dark" ? "DynaPuff" : "inherit",
            opacity: color === "dark" ? "50%" : "initial",
            textAlign: "center",
            fontSize: isMobile ? "14px" : "inherit",
            display: noLabel ? "none" : "initial",
          }),
          singleValue: (baseStyles, state) => ({
            ...baseStyles,
            color: "inherit",
            fontWeight: isMobile ? "600" : "bold",
            fontSize: isMobile ? "14px" : "inherit",
            display: noLabel && "none",
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
            display: noLabel ? "none" : "initial",
            color: "red",
            rotate: state.isFocused ? "0deg" : "-90deg",
          }),
          menu: (baseStyles, state) => ({
            //options container
            ...baseStyles,
            padding: "35px 18px",
            width: "168px",
            borderRadius: "20px",
            textAlign: "center",
            position: isMobile && noLabel ? "absolute" : noLabel ? "absolute" : "sticky",
            left: isMobile && noLabel ? "-140px" : noLabel ? "50px" : "0",
            top: noLabel && "-91px",
          }),
          option: (baseStyles, state) => ({
            ...baseStyles,
            backgroundColor: state.isFocused ? "#e30547" : "initial",
            color: state.isFocused ? "white" : "#3f262e",
            borderRadius: "8px",
            fontStretch: "condensed",
            "&:hover": {
              cursor: "pointer",
            },
            fontWeight: "bold",
            fontFamily: "Acumin",
            letterSpacing: "0.5px",
            fontSize: "16px",
          }),
          indicatorsContainer: (baseStyles, state) => ({
            ...baseStyles,
            justifyContent: "center",
          }),
        }}
      />
    </>
  );
}
