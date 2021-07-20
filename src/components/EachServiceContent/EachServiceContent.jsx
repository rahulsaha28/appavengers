import React from "react";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Styles from './EachServiceContent.module.css';

export const EachServiceContent = ({ item }) => {
  return (
    <div className={`col ${Styles.item_section}`}>
      <div className="card d-flex flex-row justify-content-evenly align-items-center p-3 shadow-sm">
        <div className={`${Styles.check_box}`}>
          <FontAwesomeIcon icon={faCheck} size="2x" />
        </div>
        <div className={`${Styles.text_1}`}>{item}</div>
      </div>
    </div>
  );
};
