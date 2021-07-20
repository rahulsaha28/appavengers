import React from 'react'
import { FontAwesomeIcon }  from '@fortawesome/react-fontawesome';
import Styles from './ServiceCard.module.css';

export const ServiceCard = (props) => {
    const { title, des, image } = props.data;
    return (
        <div className="col">
            <div className={`card p-3 ${Styles.card_edit}`}>
                <div className="d-flex justify-content-center mt-3 mb-3">
                <FontAwesomeIcon icon={image} size="3x" />
                </div>
                <h4 className="text-center text-1">{title}</h4>
                <p className="text-center title-secondary">{des}</p>
                <div className="d-flex justify-content-center">
                <button className="btn btn-view">View Details</button>
                </div>
            </div>
        </div>
    )
}
