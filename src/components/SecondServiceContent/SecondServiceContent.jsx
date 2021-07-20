import React from 'react'
import { EachServiceContent } from '../EachServiceContent/EachServiceContent';


export const SecondServiceContent = (props) => {
    const { title, des, content } = props.service;
    return (
        <div className="col-md-6 col-sm-12 p-3">
            <h4 className="section-title">Services</h4>
            <h2 className="text-1">{title}</h2>
            <p className="title-secondary">{des}</p>
            <div className="row row-cols-md-2 row-cols-1 g-3">
                {
                    content.map(item=><EachServiceContent item={item} />)
                }
            </div>
        </div>
    )
}
