import React from "react";
import Styles from "./Custome2.module.css";

export const Custom6 = (props) => {
  const { name, title, image, logo, date } = props.card;
  return (
    <div className="col-md-4 col-sm-12 mb-3">
      <div className="card p-3">
        <div className="d-flex justify-content-center">
          <img className={`${Styles.custome_size}`} src={image} alt="" />
        </div>
        <div className="mt-3">
          <div className="d-flex justify-content-between align-items-center">
            <div className="d-flex gap-2 align-items-center">
              <img className={`${Styles.size_50_50} rounded-circle`} src={logo} alt="" />
              <h6 className="title-secondary">{name}</h6>
            </div>
            <h6 className="title-secondary">{date}</h6>
          </div>
          <h4 className="p-3 mt-4">{title}</h4>
        </div>
      </div>
    </div>
  );
};
