<!-- want to change the timeline layout based on the day options -->

    ***each grid needs to go into 1 column per tod
      ***create separate task container for each TOD column

<!-- how is the schedule page gonna get state data from day change? -->
<!-- where is the daychange state going to live? -->

    <!-- in schedule page?  -->

<div className="grid-area-2">
  {/* add 24 empty boxes to add border to*/}
  {hours.map((hr) => {
    return (
      <div
        key={hr}
        className="grid-border"
      ></div>
    );
  })}
</div>;
