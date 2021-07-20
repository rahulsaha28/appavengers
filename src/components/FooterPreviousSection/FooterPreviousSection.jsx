import React from 'react';
import LeftImg from '../../Assets/image/img-15.png';
import Styles from './FooterPrevious.module.css'

export const FooterPreviousSection = () => {
    return (
        <>
        <div className="col-md-6 col-sm-12 p-4">
            <img className={Styles.img_medium} src={LeftImg} alt="" />
        </div>
        <div className="col-md-6 col-sm-12 d-flex flex-column justify-content-center">
            <h2 className="text-1 title-bold">We Like to Start Your</h2>
            <h2 className="text-1 title-bold">Project With Us</h2>
            <p className="title-secondary">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.</p>
            <div>
            <button className="btn btn-comla">Get Started</button>
            </div>
        </div>
        </>
    )
}
