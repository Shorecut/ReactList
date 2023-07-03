import React from "react";
import SectionList from "./SectionList";

const Section = ({ data }) => {
  return (
    <div>
      {data.map((item) => (
        <SectionList key={item.id} list={item} />
      ))}
    </div>
  );
};

export default Section;
