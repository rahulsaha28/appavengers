import React from 'react';
import logo from '../../Assets/image/logo.png';
import { FontAwesomeIcon } from  '@fortawesome/react-fontawesome';
import { faMapMarker, faPhoneVolume, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faTwitter, faYoutube, faInstagram } from '@fortawesome/free-brands-svg-icons'; 
import Styles from './FooterSection.module.css';
export const FooterSection = () => {
    return (
        <>
        <div className="col-md-4 col-sm-12 p-4 mb-4">
            <img  className="mb-5" src={logo} alt="" />
            <p className="title-secondary mb-3">Lorem ipsum dolor sit amet, consectetur elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse.</p>
            <div className="d-flex gap-5">
               <FontAwesomeIcon className={`${Styles.icon}`} icon={faFacebook} size="2x"/>
               <FontAwesomeIcon className={`${Styles.icon}`} icon={faTwitter} size="2x"/>
               <FontAwesomeIcon className={`${Styles.icon}`} icon={faYoutube} size="2x"/>
               <FontAwesomeIcon className={`${Styles.icon}`} icon={faInstagram} size="2x"/>
            </div>
        </div>
        <div className="col-md-8 col-sm-12">
            <div className="row d-flex align-items-center justify-content-center mt-5">
                <div className="col-md-3 col-sm-12">
                    <h3>Explore</h3>
                    <h6>Home</h6>
                    <h6>About</h6>
                    <h6>Case Studies</h6>
                    <h6>Our Blog</h6>
                    <h6>Contact</h6>
                </div>
                <div className="col-md-3 col-sm-12">
                    <h3>Resources</h3>
                    <h6>Our Scientists</h6>
                    <h6>Our Services</h6>
                    <h6>Testimonials</h6>
                    <h6>SaaS Solutions</h6>
                    <h6>Case Studies</h6>
                </div>
                <div className="col-md-3 col-sm-12">
                    <h3>Address</h3>
                    <h6 className="mb-3"><FontAwesomeIcon  className={Styles.icon_home} icon={faMapMarker}/> 175 5th Ave, New York, NY 10010, United States</h6>
                    <h6 className="mb-3"><FontAwesomeIcon className={Styles.icon_home}  icon={faPhoneVolume}/> +1 (123) 456 7890</h6>
                    <h6 className="mb-3"><FontAwesomeIcon className={Styles.icon_home}  icon={faEnvelope}/> hello@rewy.com</h6>
                    <h6 className="mb-3"><FontAwesomeIcon  className={Styles.icon_home} icon={faPhoneVolume}/>+55 785 4578964</h6>
                    
                </div>
            </div>
            
        </div>
        <hr />
        <div>
            <h5 className="title-secondary">Copyright @2021 <span style={{color:"#221638", fontWeight:600}}>Rewy</span> All rights reserved  <span style={{color:"#ff5d22"}} >EnvyTheme</span>.</h5>
        </div>
        </>
    )
}
