import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import  { faCheckCircle, faTimesCircle } from '@fortawesome/free-solid-svg-icons'; 

export const TBody = ({ value }) => {
    return (
        <tr>
            {
                value.map(item=>{
                    if(item===true){
                        return <td style={{ color:"#0EB582" }}><FontAwesomeIcon icon={faCheckCircle} /></td>
                    }
                    else if(item==false){
                        return <td style={{ color:"#D85554" }}><FontAwesomeIcon icon={faTimesCircle} /></td>
                    }
                    else{
                        return <td>{item}</td>
                    }
                })
            }
            
        </tr>
    )
}
