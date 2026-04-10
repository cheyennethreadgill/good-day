import type { Route } from "./+types/home";
import { useState, useEffect } from "react";
import { Header } from "../Components/Header/Header";
import { DayDropdowns } from "../Components/Header/DayDropdowns";
// import TaskContainer from "../Components/Tasks/TasksContainer";
import type { json } from "stream/consumers";
import { Nav } from "~/Components/Nav";
import { useWindowSize } from "~/hooks/useWindowResize";

export function meta({}: Route.MetaArgs) {
  return [{ title: "Good Day!" }, { name: "description", content: "Welcome to Good Day The Auto Scheduler =)!" }];
}

export default function Home() {
  // Top Level State
  const [clicked, setClicked] = useState(false);
  const handleTimeClick = () => {
    setClicked(!clicked);
  };

  const { isMobile, windowSize } = useWindowSize();

  return (
    <>
      <Nav
        isMobile={isMobile}
        windowSize={windowSize}
      />
      <Header
        isMobile={isMobile}
        dateScrollShown={true}
        page="Home"
      />
      <DayDropdowns
        clicked={clicked}
        handleTimeClick={handleTimeClick}
      />
    </>
  );
}
