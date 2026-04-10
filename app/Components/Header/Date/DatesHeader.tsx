import scheduleIcon from "../../../../public/calendar-icon.svg";
import DateScroll from "./DateScroll";
import DayChange from "~/Components/DayChange";

export default function DatesHeader({ page, options }: { page: string; options: Array }) {
  return (
    <div className={page != "Home" && "flex flex-end"}>
      {page != "Home" ? (
        <>
          <DayChange options={options} />
          <div className="header-month">
            <div className="month-head">
              <div className="flex">
                <span>July</span>
                <img
                  src={scheduleIcon}
                  alt="schedule icon"
                />
              </div>
            </div>
          </div>
        </>
      ) : (
        <>
          <div className="header-month">
            <div className="month-head">
              <div className="flex">
                <span>July</span>
                <img
                  src={scheduleIcon}
                  alt="schedule icon"
                />
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
}
