import React from "react";
import { TBody } from "../TBody/TBody";
import { THead } from "../THead/THead";

export const Custom4 = (props) => {
  const { head, body } = props.card;
  return (
    <div className="col-md-12 col-sm-12 mb-3">
      <table className="table table-striped">
        <thead className="p-3">
          <tr style={{ backgroundColor: "#ff5d22" }}>
            {head.map((item) => (
              <THead value={item} />
            ))}
          </tr>
        </thead>
        <tbody>
          {body.map(({ data }) => (
            <TBody value={data} />
          ))}
        </tbody>
      </table>
      <div className="d-flex justify-content-end gap-5">
          <div>
          <button className="btn btn-gray shadow-sm">Get It Now</button>
          </div>
          <div>
          <button className="btn btn-gray shadow-sm">Get It Now</button>
          </div>
          <div>
          <button className="btn btn-gray shadow-sm">Get It Now</button>
          </div>
        
        
      </div>
    </div>
  );
};
