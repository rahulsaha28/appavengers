import React from 'react';
import Styles from './FirstServiceContent.module.css';


export const FirstServiceContent = ({ leftImg }) => {
    return (
        <div className="col-md-6 col-sm-12 p-3 d-flex justify-content-center align-items-center">
            <img className={`${Styles.img_style}`} src={leftImg} alt="" />    
        </div>
    )
}
