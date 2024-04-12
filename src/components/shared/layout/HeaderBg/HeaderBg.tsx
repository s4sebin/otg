import React from "react";
import { HeaderBgProps } from "../../../../types/CareerGps.types";

const HeaderBg = (props: HeaderBgProps) => {
  return (
    <div
      className="ot-slider-wrapper"
      style={{ backgroundImage: `url(${props.url})` }}
    >
      <h1 className="ot-page-title">
        {props?.title}
        <span className="ot-text-highlight">{props?.HighlightTitle}</span>
      </h1>
    </div>
  );
};

export default HeaderBg;
