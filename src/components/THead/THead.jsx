import React from 'react';
import Styles from './THead.module.css';

export const THead = ({ value }) => {
    return (
        <th scope="cal" className={`${Styles.t_head} text-center`}>{ value }</th>
    )
}
