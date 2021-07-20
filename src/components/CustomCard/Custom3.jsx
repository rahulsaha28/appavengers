import React from "react";
import Styles from './Custome2.module.css';

export const Custom3 = (props) => {
    const { image, title, type } = props.card;
  return (
    <div className="col-md-4 col-sm-12 mb-3">
      <div className="card p-3">
        <div className="d-flex justify-content-center">
          <img className={`${Styles.custome_size}`} src={image} alt="" />
        </div>
        <div className="d-flex flex-column align-items-center mt-3">
          <h4 className="text-1">{title}</h4>
          <p className="text-center text-2">{type}</p>
        </div>
      </div>
    </div>
  );
};
