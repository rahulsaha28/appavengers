import React from 'react'

export const Custom1 = (props) => {
   const {title, image, des} = props.card;
    return (
        <div className="col-md-4 col-sm-12 mb-3">
            <div className="card p-3">
                <div className="d-flex justify-content-center">
                <img src={image} alt="" />
                </div>
                <div className="d-flex flex-column align-items-center mt-3">
                    <h4>{title}</h4>
                    <p className="text-center title-secondary">{des}</p>
                </div>
                </div>
        </div>
    )
}
