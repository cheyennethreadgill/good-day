const scrollIcon = "/date-scroll-icon.svg";

export default function DateScroll({ page, isMobile }: { page: string; isMobile: boolean }) {
  return (
    <>
      {page === "Home" ? (
        <div className="date-scroll flex space-between align-center">
          <img
            className="scroll-left"
            src={scrollIcon}
            alt="date scroll icon"
          />
          <div className=" flex day-container space-between">
            <a
              href="#"
              className="dates flex flex-column"
            >
              10
              <span>TUES</span>
            </a>
            <a
              href="#"
              className="dates flex flex-column"
            >
              11
              <span>TODAY</span>
            </a>
            <a
              href="#"
              className="dates flex flex-column"
            >
              12
              <span>THU</span>
            </a>
          </div>
          <div className="position-relative">
            <a href="#">
              <img
                className="scroll-right"
                src={scrollIcon}
                alt="date scroll icon"
              />
            </a>
          </div>
        </div>
      ) : (
        <div className="date-scroll container position-sticky ">
          <section className="background">
            <div className="date-scroll-schedule flex space-between align-center flex-column">
              {!isMobile ? <h1>July</h1> : null}
              <div className=" flex day-container space-between">
                <img
                  className="scroll-left"
                  src={scrollIcon}
                  alt="date scroll icon"
                />
                <a
                  href="#"
                  className="dates flex flex-column"
                >
                  10
                  <span>TUES</span>
                </a>
                <a
                  href="#"
                  className="dates flex flex-column"
                >
                  11
                  <span>TODAY</span>
                </a>
                <a
                  href="#"
                  className="dates flex flex-column"
                >
                  12
                  <span>THU</span>
                </a>
                <a href="#">
                  <img
                    className="scroll-right"
                    src={scrollIcon}
                    alt="date scroll icon"
                  />
                </a>
              </div>
            </div>
          </section>
        </div>
      )}
    </>
  );
}
