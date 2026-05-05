import { useEffect, useState } from "react";
import DateScroll from "./Date/DateScroll";
import DatesHeader from "./Date/DatesHeader";
import Calendar from "react-calendar";

export function Header({
  options,
  dateScrollShown,
  page,
  isMobile,
}: {
  dateScrollShown: boolean;
  page: string;
  isMobile: boolean;
}) {
  return (
    <div className="header-container container">
      <header>
        <div
          id="main-header"
          className={page === "Home" ? "flex space-between " : "h-120"}
        >
          {page === "Home" ? (
            <div className="header-text">
              <h1>
                Hey Mike, <span>You Got This!</span>
              </h1>
              <p>Here's what you've done for the day</p>
            </div>
          ) : null}
          {page === "Home" ? (
            <div className="date-container ">
              <DatesHeader
                options={options}
                page="Home"
              />
              {dateScrollShown ? (
                <DateScroll
                  isMobile={isMobile}
                  page="Home"
                />
              ) : null}
            </div>
          ) : (
            <>
              <div className="date-container ">
                <DatesHeader
                  options={options}
                  page="Schedule"
                />
              </div>
            </>
          )}
        </div>
      </header>
    </div>
  );
}
