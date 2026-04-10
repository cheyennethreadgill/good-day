import timeJson from "../TOD.json";
import taskData from "../task-data.json";

export default function TOD({ clicked, handleTimeClick }) {
  const timeOfDayfromJSON = timeJson.map((obj) => {
    const { timeOfDay } = obj;
    return timeOfDay;
  });

  // filter tasks based on each timeOfDay

  // const filteredTaskTimes = taskData.filter(CheckTaskTimeOfDay);

  // function CheckTaskTimeOfDay() {
  //   taskData.map((task) => {
  //     const { timeOfDay } = task;

  //     if (timeOfDay === "Morning") {
  //       return task;
  //     }
  //   });
  // }

  // console.log(filteredTaskTimes);

  return (
    <div className="day-container flex space-between">
      {timeOfDayfromJSON.map((time) => {
        return (
          <p
            key={time}
            onClick={() => handleTimeClick()}
            className={clicked ? `${time} active-brown times` : `${time} inactive-brown times`}
          >
            {time} (2) <span className="day-decor"></span>
          </p>
        );
      })}
    </div>
  );
}
