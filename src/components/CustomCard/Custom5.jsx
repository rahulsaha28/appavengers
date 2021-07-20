import React from "react";
import { CustomCarocell } from "../CustomCarocell/CustomCarocell";

export const Custom5 = ({ card }) => {
  
  return (
    <div className="col-md-12 col-sm-12 mb-3">
      <div className="row">
          {
              card.info.map(item=><CustomCarocell item={item} />)
          }
       <div className="col-md-12 d-flex justify-content-center mt-5">
          <button className="btn btn-white">Check Out all Review</button>
       </div>
      </div>
    </div>
  );
};
