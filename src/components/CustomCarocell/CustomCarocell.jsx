import React from "react";
import infoIcon from "../../Assets/image/info.jfif";

export const CustomCarocell = ({ item }) => {
  const { name, position, des } = item;
  return (
    <div className="col-md-6">
      <div className="card p-3">
        <div className="d-flex justify-content-center">
          <p className="w-75 p-4">{des}</p>
        </div>
        <div className="d-flex justify-content-center align-items-center gap-3">
          <img src={infoIcon} alt="" />
          <div className="d-flex flex-column align-items-center mt-3">
            <h4>{name}</h4>
            <p className="text-center title-secondary">{position}</p>
          </div>
        </div>
      </div>
    </div>
  );
};
