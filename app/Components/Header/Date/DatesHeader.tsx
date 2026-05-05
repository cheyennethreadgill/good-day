import scheduleIcon from "../../../../public/calendar-icon.svg";
import DateScroll from "./DateScroll";
import DayChange from "~/Components/DayChange";
import { useState } from "react";
import Calendar from "react-calendar";

import previousIcon from "../../../../public/Previous Icon.svg";
import nextIcon from "../../../../public/Next Icon.svg";

import { useWindowSize } from "~/hooks/useWindowResize";

export default function DatesHeader({ page, options }: { page: string; options: Array }) {
  const [calClick, setCalClick] = useState(false);
  const { isMobile, windowSize } = useWindowSize();

  const handleCalClick = (calClick) => {
    setCalClick(!calClick);
    console.log(calClick);
  };

  // const fullDate = new Date();
  // console.log(fullDate);
  // // get the month that's currently viewed
  // const date = fullDate.getDate();
  // console.log(date);
  // // figure out how many days are in the month
  // const month = fullDate.getMonth();
  // console.log(month);

  // for (var actualDate in month) {
  //   console.log(actualDate);
  // }

  return (
    <>
      {/* if not mobile and not the home page, flex end the month header */}
      {!isMobile ? (
        <div className={page !== "Home" ? "flex flex-end" : ""}>
          {page != "Home" ? (
            <>
              <DayChange options={options} />
              <div className="header-month">
                <div className="month-head">
                  <div className="flex">
                    <span>July</span>
                    <img
                      onClick={() => {
                        handleCalClick(calClick);
                      }}
                      src={scheduleIcon}
                      alt="schedule icon"
                    />
                  </div>
                </div>
              </div>
              {calClick && (
                <div className="react-calendar-container react-calendar-container-head">
                  <Calendar
                    onClickMonth={(value, event) => console.log("Clicked month: ", value)}
                    prevLabel={
                      <img
                        onClick={() => {
                          handleCalClick(calClick);
                        }}
                        src={previousIcon}
                        alt="Previous"
                      />
                    }
                    nextLabel={
                      <img
                        src={nextIcon}
                        alt="Previous"
                      />
                    }
                    prev2Label={null}
                    next2Label={null}
                  />
                </div>
              )}
            </>
          ) : (
            <>
              <div className="header-month">
                <div className="month-head">
                  <div className="flex">
                    <span>July</span>
                    <img
                      onClick={() => {
                        handleCalClick(calClick);
                      }}
                      src={scheduleIcon}
                      alt="schedule icon"
                    />
                  </div>
                </div>
              </div>
              {calClick && (
                <div className="react-calendar-container react-calendar-container-head">
                  <Calendar
                    prevLabel={
                      <img
                        src={previousIcon}
                        alt="Previous"
                      />
                    }
                    nextLabel={
                      <img
                        src={nextIcon}
                        alt="Previous"
                      />
                    }
                    prev2Label={null}
                    next2Label={null}
                  />
                </div>
              )}
            </>
          )}
        </div>
      ) : (
        //if mobile remove the flex end
        <div>
          {page != "Home" ? (
            <div className="flex">
              <DayChange options={options} />
              <div className="header-month">
                <div className="month-head">
                  <div className="flex">
                    <span>July</span>
                    <img
                      onClick={() => {
                        handleCalClick(calClick);
                      }}
                      src={scheduleIcon}
                      alt="schedule icon"
                    />
                  </div>
                </div>
              </div>
              {calClick && (
                <div className="react-calendar-container react-calendar-container-head">
                  <Calendar
                    prevLabel={
                      <img
                        onClick={() => {
                          handleCalClick(calClick);
                        }}
                        src={previousIcon}
                        alt="Previous"
                      />
                    }
                    nextLabel={
                      <img
                        src={nextIcon}
                        alt="Previous"
                      />
                    }
                    prev2Label={null}
                    next2Label={null}
                  />
                </div>
              )}
            </div>
          ) : (
            <>
              <DayChange options={options} />
              <div className="header-month">
                <div className="month-head">
                  <div className="flex">
                    <span>July</span>
                    <img
                      onClick={() => {
                        handleCalClick(calClick);
                      }}
                      src={scheduleIcon}
                      alt="schedule icon"
                    />
                  </div>
                </div>
              </div>
              {calClick && (
                <div className="react-calendar-container react-calendar-container-head">
                  <Calendar
                    prevLabel={
                      <img
                        src={previousIcon}
                        alt="Previous"
                      />
                    }
                    nextLabel={
                      <img
                        src={nextIcon}
                        alt="Previous"
                      />
                    }
                    prev2Label={null}
                    next2Label={null}
                  />
                </div>
              )}
            </>
          )}
        </div>
      )}
    </>
  );
}
