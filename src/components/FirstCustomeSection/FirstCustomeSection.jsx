import React from "react";

export const FirstCustomeSection = (props) => {
  const { sectionTitle, title, des, cards } = props.featureData;
  const { children, color } = props;
  return (
    <div className="d-flex flex-column align-items-center p-3 mt-4">
      <div className="col-md-5 col-sm-12 d-flex flex-column align-items-center">
        <h5 className="text-center text-2 mb-4">{sectionTitle}</h5>
        <h2 className="head-title" style={color?{color}:{}}>{title}</h2>
        <p className="text-center title-secondary" style={color?{color}:{}}>{des}</p>
      </div>
      <div className="col-md-12 mt-3">
          <div className="row">
          {cards.map((card) => React.cloneElement(children, { card }))}
          </div>
      </div>
    </div>
  );
};
