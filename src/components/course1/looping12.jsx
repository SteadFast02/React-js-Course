import React from "react";
import Data from "../../api/seriesData.json";
import Props13 from "./props13";

const Looping12 = () => {
  return (
    <>
      <ul style={{ listStyle: "none" }} className="grid grid-three-cols">
        {Data.map((item) => {
          // props
          return <Props13 key={item.id} items={item} />;
        })}
      </ul>
    </>
  );
};

export default Looping12;
