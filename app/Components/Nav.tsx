import { NavLink } from "react-router";
import logo from "../../public/LOGO.svg";
import home from "../../public/mobile nav home icon.svg";
import schedule from "../../public/nav-calendar-icon.svg";
import mobileSchedule from "../../public/Mobile nav schedule icon.svg";
import addTaskIcon from "../../public/desktop nav task icon.svg";
import mobileAddTaskIcon from "../../public/Mobile nav add task icon.svg";
import { useEffect, useState, type ReactPromise } from "react";
import { useWindowSize } from "~/hooks/useWindowResize";

export function Nav({
  isMobile,
  windowSize,
  setTaskClicked,
  taskClicked,
}: {
  isMobile: boolean;
  windowSize: number;
  setTaskClicked: Function;
  taskClicked: boolean;
}) {
  const navLinks = [{ icon: schedule, title: "Schedule" }];
  const navLinksMobile = [
    { id: "one", icon: home, title: "Home", slug: "/" },
    { id: "two", icon: mobileAddTaskIcon, title: "Add New Task", slug: "add-new-task" },
    { id: "three", icon: mobileSchedule, title: "Schedule", slug: "/schedule" },
  ];

  const [navClicked, setNavClicked] = useState(false);

  return (
    <nav
      onClick={isMobile ? "" : () => setNavClicked(!navClicked)}
      className={navClicked ? "main-nav main-nav-clicked" : "main-nav"}
    >
      <div className={navClicked ? "main-nav-content main-nav-content-clicked" : "main-nav-content"}>
        <div className="logo-container">
          <img
            className={navClicked ? "main-nav-content-logo main-nav-content-logo-clicked" : "main-nav-content-logo"}
            src={logo}
            alt=""
          />
          {navClicked ? <p>Good Day</p> : ""}
        </div>

        <div className="nav-links-container">
          <>
            {/* ------------------------------MOBILE */}
            {isMobile
              ? navLinksMobile.map((link) => {
                  const { icon, title, id, slug } = link;
                  return (
                    <NavLink
                      onClick={
                        slug === "add-new-task"
                          ? () => {
                              setTaskClicked(!taskClicked);
                              console.log("nav add task clicked");
                            }
                          : null
                      }
                      key={title}
                      to={slug === "add-new-task" ? "" : slug}
                      className={id}
                    >
                      <img
                        className={"nav-link-icons nav-link-icons-mobile"}
                        src={icon}
                      ></img>
                    </NavLink>
                  );
                })
              : /* ------------------------------DESKTOP */

                navLinks.map((link) => {
                  const { icon, title } = link;
                  return (
                    <NavLink
                      key={title}
                      to={title}
                      className={title}
                    >
                      {navClicked ? (
                        <>
                          {" "}
                          {title}{" "}
                          <img
                            className={"nav-link-icons "}
                            src={icon}
                          ></img>
                        </>
                      ) : (
                        <img
                          className={"nav-link-icons "}
                          src={icon}
                        ></img>
                      )}
                    </NavLink>
                  );
                })}

            {!isMobile ? (
              <NavLink to="/">
                {navClicked ? (
                  <>
                    Dashboard
                    <img
                      className={"nav-link-icons"}
                      src={home}
                    ></img>
                  </>
                ) : (
                  <img
                    className={"nav-link-icons"}
                    src={home}
                  ></img>
                )}
              </NavLink>
            ) : null}
          </>
        </div>
        {!isMobile && navClicked ? (
          <img
            onClick={() => setTaskClicked(!taskClicked)}
            className="add-task-icon"
            src={addTaskIcon}
            alt=""
          />
        ) : null}
      </div>
    </nav>
  );
}
