import React from "react";
import Styles from "./Custome2.module.css";
import { FontAwesomeIcon } from  '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faYoutube, faInstagram } from '@fortawesome/free-brands-svg-icons'; 


export const Custome2 = (props) => {
  const { name, pic, profession } = props.card;
  return (
    <div className="col-md-3 col-sm-12 mb-3">
      <div className={`card p-3 ${Styles.main_parent}`}>
        <div className="d-flex justify-content-center">
          <img className={`${Styles.custome_size}`} src={pic} alt="" />
          <div className={`d-flex gap-3 ${Styles.icon_p}`}>

            <div className={`${Styles.icon_bg} p-2 rounded-circle shadow`}>
            <FontAwesomeIcon
              className={`${Styles.icon}`}
              icon={faFacebook}
              size="1x"
            />
            </div>
           <div className={`${Styles.icon_bg} p-2 rounded-circle shadow`}>
           <FontAwesomeIcon
              className={`${Styles.icon}`}
              icon={faTwitter}
              size="1x"
            />
           </div>
            <div className={`${Styles.icon_bg} p-2 rounded-circle shadow`}>
            <FontAwesomeIcon
              className={`${Styles.icon}`}
              icon={faYoutube}
              size="1x"
            />
            </div>
            <div className={`${Styles.icon_bg} p-2 rounded-circle shadow`}>
            <FontAwesomeIcon
              className={`${Styles.icon}`}
              icon={faInstagram}
              size="1x"
            />
            </div>
            
          </div>
        </div>
        <div className="d-flex flex-column align-items-center mt-3">
          <h4>{name}</h4>
          <p className="text-center text-2">{profession}</p>
        </div>
      </div>
    </div>
  );
};
