import React from 'react';
import rightImage from '../../Assets/image/rightImage.png';
import Styles from './MainSection.module.css';

export const MainSection = () => {
    return (
        <>
        <div className="col-md-6 col-sm-12 pb-5">
            <div className= {`d-flex flex-column justify-content-center align-items-center p-5 ${Styles.left_side}`}>
            <div className="">
                <h2 className={`${Styles.head_title}`}>Secure IT Solutions Services</h2>
                <p className={`pt-2 pb-4 title-secondary`}>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam optio dolor obcaecati, fugit officia nihil impedit sed ipsum eius hic?
                </p>
                <button className="btn btn-comla shadow">Get Started</button>
            </div>
            </div>
            
        </div>
        <div className="col-md-6 col-sm-12 d-flex justify-content-center align-items-center p-3">
            <img className={` ${Styles.right_image}`} src={rightImage} alt="" />
        </div>
        </>
    )
}
